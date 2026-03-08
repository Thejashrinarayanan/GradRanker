# resume_evaluator.py
import re

# 5 roles from different fields with 20 distinct skills each
ROLE_SKILLS = {
    "Data Analyst": [
        "python", "sql", "excel", "tableau", "power bi",
        "r", "sas", "statistics", "data visualization", "forecasting",
        "pandas", "numpy", "matplotlib", "seaborn", "data cleaning",
        "analytics", "business intelligence", "dashboards", "reporting", "machine learning"
    ],

    "Software Engineer": [
        "python", "java", "c++", "javascript", "react",
        "node", "angular", "spring", "django", "flask",
        "html", "css", "typescript", "git", "rest api",
        "sql", "mongodb", "algorithms", "data structures", "oop"
    ],

    "Marketing Lead": [
        "seo", "sem", "content marketing", "social media", "branding",
        "email marketing", "campaign management", "google analytics", "ppc", "adwords",
        "facebook ads", "instagram ads", "copywriting", "lead generation", "crm",
        "hubspot", "marketing strategy", "sales funnel", "market research", "influencer marketing"
    ],

    "HR Manager": [
        "recruitment", "talent acquisition", "performance management", "employee engagement", "hr policies",
        "training", "payroll", "benefits administration", "onboarding", "offboarding",
        "conflict resolution", "labor laws", "employee retention", "hr analytics", "succession planning",
        "organization development", "hr software", "interviewing", "coaching", "leadership development"
    ],

    "Financial Analyst": [
        "financial modeling", "excel", "accounting", "budgeting", "forecasting",
        "power bi", "tableau", "valuation", "investment analysis", "risk management",
        "profit and loss", "balance sheet", "cash flow", "variance analysis", "sap",
        "quickbooks", "data analysis", "market research", "corporate finance", "financial reporting"
    ]
}

# Assign a default weight of 5 to each skill for scoring
ROLE_WEIGHTS = {role: {skill: 5 for skill in skills} for role, skills in ROLE_SKILLS.items()}

# ---------- Helper functions ----------
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
    text = text.lower()
    required = ROLE_SKILLS.get(job_role, [])
    detected = [skill for skill in required if skill.lower() in text]
    missing = [skill for skill in required if skill.lower() not in text]
    return detected, missing, required

def extract_experience_years(text):
    years = re.findall(r"(\d+)\s*years?", text.lower())
    return int(years[0]) if years else 0

def calculate_score(detected, required, exp, job_role):
    weights = ROLE_WEIGHTS.get(job_role, {})
    skill_score = sum(weights.get(skill, 3) for skill in detected)
    max_skill_score = sum(weights.get(skill, 3) for skill in required)
    
    skill_percentage = int((skill_score / max_skill_score) * 100) if max_skill_score else 0
    exp_score = min(100, exp * 5)
    final_score = int((skill_percentage + exp_score) / 2)
    return final_score, skill_percentage, exp_score

# ---------- Main Evaluation ----------
def evaluate_resume(text, job_role):
    sections = detect_sections(text)
    detected, missing, required = extract_skills(text, job_role)
    exp = extract_experience_years(text)

    final_score, skill_percentage, exp_score = calculate_score(detected, required, exp, job_role)

    # Feedback
    feedback = []
    if missing:
        feedback.append("Improve skills by learning: " + ", ".join(missing[:5]))
    if sections["certifications"] == "Missing":
        feedback.append("Add certifications to strengthen your profile.")
    if sections["achievements"] == "Missing":
        feedback.append("Add achievements to stand out.")
    if exp < 2:
        feedback.append("Gain more experience or internships.")

    # Detect project keywords
    project_keywords = [
        "classification", "automation", "data cleaning", "analysis",
        "prediction", "machine learning", "api", "dashboard"
    ]
    keywords_detected = [word for word in project_keywords if word in text.lower()]

    return {
        "job_role": job_role,
        "sections": sections,
        "skills_required_for_role": required,
        "skills_detected": detected,
        "missing_skills": missing,
        "skill_match_percentage": skill_percentage,
        "experience_years": exp,
        "experience_score": exp_score,
        "final_score": final_score,
        "project_keywords_detected": keywords_detected,
        "education_level": "B.Tech",
        "feedback": feedback
    }