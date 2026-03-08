from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import os
import uuid
from resume_extractor import extract_text_from_resume
from resume_evaluator import evaluate_resume

app = FastAPI(
    title="GradRanker Resume Evaluator",
    description="Upload resumes (PDF/DOCX) and get AI-based evaluation results",
    version="1.1"
)

# CORS settings (allow your frontend)
origins = ["http://localhost:3000"]  # Add frontend URL if different

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Upload directory
UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


@app.get("/")
def read_root():
    return {"message": "Welcome to GradRanker Resume Evaluator API"}


@app.post("/api/resume/upload")
async def upload_resume(file: UploadFile = File(...), job_role: str = "Data Analyst"):
    """
    Upload a PDF or DOCX resume and get evaluation results
    """

    # Validate file type
    if file.content_type not in [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ]:
        raise HTTPException(status_code=400, detail="Only PDF or DOCX allowed")

    # Save uploaded file with unique name
    ext = file.filename.split('.')[-1]
    unique_filename = f"{uuid.uuid4()}.{ext}"
    file_path = os.path.join(UPLOAD_DIR, unique_filename)

    try:
        with open(file_path, "wb") as f:
            f.write(await file.read())
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to save file: {e}")

    # Extract text from resume
    extracted_text = extract_text_from_resume(file_path)
    if not extracted_text:
        raise HTTPException(status_code=400, detail="Could not extract text from resume")

    # Evaluate resume and get combined output
    try:
        result = evaluate_resume(extracted_text, job_role)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Resume evaluation failed: {e}")

    return {
        "status": "success",
        "message": "Resume evaluated successfully",
        **result
    }
