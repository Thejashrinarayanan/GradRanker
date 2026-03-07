import docx
import PyPDF2

def extract_text_from_pdf(path):
    """
    Extract text from a PDF file
    """
    text = ""
    try:
        with open(path, "rb") as f:
            reader = PyPDF2.PdfReader(f)
            for page in reader.pages:
                page_text = page.extract_text()
                if page_text:
                    text += page_text + "\n"
    except Exception as e:
        print(f"Error reading PDF: {e}")
    return text


def extract_text_from_docx(path):
    """
    Extract text from a DOCX file
    """
    text = ""
    try:
        doc = docx.Document(path)
        text = "\n".join([p.text for p in doc.paragraphs])
    except Exception as e:
        print(f"Error reading DOCX: {e}")
    return text


def extract_text_from_resume(path):
    """
    Detect file type and extract text
    Supports PDF and DOCX
    """
    if path.lower().endswith(".pdf"):
        return extract_text_from_pdf(path)
    elif path.lower().endswith(".docx"):
        return extract_text_from_docx(path)
    else:
        return ""
