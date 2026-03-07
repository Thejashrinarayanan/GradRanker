import re

# Skills for Data Analyst role
ROLE_SKILLS = {
    "Data Analyst": [
        "python", "sql", "excel", "power bi", "tableau",
        "data visualization", "statistics"
    ],
    "Software Engineer": [
        "python", "java", "javascript", "react", "node",
        "sql", "data structures", "algorithms"
    ]
}


def detect_sections(text):
    text = text.lower()
    return {
        "education": "Present" if "education" in text else "Missing",
        "experience": "Present" if "experience" in text else "Missing",
        "skills": "Present" if "skills" in text else "Missing",
        "projects": "Present" if "project" in text else "Missing",
        "certifications": "Present" if "certification" in text else "Missing",
        "achievements": "Present" if "achievement" in text else "Missing",
    }


def extract_skills(text, job_role):
    required = ROLE_SKILLS.get(job_role, [])
    text = text.lower()
    detected = [s for s in required if s in text]
    missing = [s for s in required if s not in detected]
    return detected, missing, required


def extract_experience_years(text):
    years = re.findall(r"(\d+)\s*years?", text.lower())
    return int(years[0]) if years else 0


def evaluate_resume(text, job_role):
    sections = detect_sections(text)
    detected, missing, required = extract_skills(text, job_role)
    exp = extract_experience_years(text)

    match_percentage = int(len(detected) / len(required) * 100)

    # ATS score logic
    ats_score = min(100, (len(detected) * 12) + (exp * 5))
    final_score = int((ats_score + match_percentage) / 2)

    # Feedback generator
    feedback = []
    if missing:
        feedback.append("Improve skills by learning: " + ", ".join(missing[:3]))
    if sections["certifications"] == "Missing":
        feedback.append("Add certifications to strengthen your profile.")
    if sections["achievements"] == "Missing":
        feedback.append("Add achievements to stand out.")
    if exp < 2:
        feedback.append("Gain more experience or internships.")

    # Project keyword detection
    keywords = []
    for word in ["classification", "automation", "data cleaning", "analysis", "prediction"]:
        if word in text.lower():
            keywords.append(word)

    return {
        "job_role": job_role,
        "sections": sections,
        "skills_required_for_role": required,
        "skills_detected": detected,
        "missing_skills": missing,
        "match_percentage": match_percentage,
        "project_keywords_detected": keywords,
        "experience_years": exp,
        "education_level": "B.Tech",  # can be extracted later
        "ats_score": ats_score,
        "final_score": final_score,
        "feedback": feedback
    }
