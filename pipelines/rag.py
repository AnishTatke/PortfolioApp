import os
import re
import dotenv
import pdfplumber

from injest import injest
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_groq import ChatGroq
from langchain_core.prompts import (
    ChatPromptTemplate, 
)

TASK_PROMPT = """
Give correct answers to all the questions asked to you as the given PERSONA with respect to the given CONTEXT. 
Answer every questions professionally and honestly. Treat all the questions asked to you as interview questions.
"""

RESTRICTION_PROMPT = """
RULES AND RESTRICTIONS:
1) Your should strictly follow the provided PERSONA and CONTEXT.
2) Your answer should not contain any extra unecessary information which is not asked in the question. If the question is not clear, you can ask for clarification or reply with 
"Sorry, I am not able to answer that question. Please ask me something else."
3) Your answer should be clear (referring to the provided CONTEXT).
4) You should always format your response normal text avoiding code blocks, bullet points, bold, italics or any other formatting. Only use new lines to separate different sections of your answer.
5) You always answer very concisely, and split long context paragraphs into small and more understandable sections. You always structure you response in the most readable way possible.
"""

PERSONA_PROMPT = """
PERSONA: You are Anish Tatke, a Masters student at the University of Florida. You are an experienced software developer with 2 years of experience and currently a professional Machine Learning and AI Engineer looking for work.
"""

CONTEXT_PROMPT = """
CONTEXT:
{context}
"""

def extract_all_text(pdf_path):
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        previous_text = ""

        for i, page in enumerate(pdf.pages):
            page_text = page.extract_text()
            if page_text:
                page_text = page_text.strip()
                
                # Extract lines from the page
                lines = page_text.split("\n")
                processed_lines = []

                for line in lines:
                    line = line.strip()
                    # Check if line is a capitalized header
                    if re.match(r"^[A-Z\s]+$", line):
                        processed_lines.append("\n" + line)  # Add newline before header
                    else:
                        processed_lines.append(line)

                # Reconstruct the processed page text
                page_text = "\n".join(processed_lines)

                # Add newline before a new page if it starts with a new header
                first_line = lines[0].strip()
                is_new_header = bool(re.match(r"^[A-Z\s]+$", first_line))
                if is_new_header and previous_text:
                    text += "\n\n"  # Separate sections across pages

                # Append the processed page text
                text += " " + page_text if previous_text else page_text  # Avoid leading space on the first page
                
                previous_text = page_text  # Store for next page comparison
    
    return text.strip()

def chunk_by_section(text):
    sections = re.split(r'\n(?=[A-Z\s]+(?:\n|$))', text)  # Detect headers (uppercase lines)
    chunks = [s.strip() for s in sections if s.strip()]  # Clean empty values
    return chunks

def retreive_document(db, query, k:int =4):
    results = db.similarity_search(query, k)
    for result in results:
        yield result.page_content

def prepare_context(db, query):
    context = ""
    for ctx in retreive_document(db, query):
        context += ctx + "\n\n"
    return context

def prepare_query(query):
    return f"QUESTION: {query}"

def get_answer(query: str):
    dotenv.load_dotenv()
    model_checkpoint = os.getenv("MODEL_CHECKPOINT")
    embedding_checkpoint = os.getenv("EMBEDDING_CHECKPOINT")

    if not query:
        raise ValueError("Query cannot be empty.")
    
    if not os.path.exists("data/resume_db"):
        print("Database not found. Running the indexing script first.")
        injest()
    
    db = FAISS.load_local("data/resume_db", HuggingFaceEmbeddings(model_name=embedding_checkpoint), allow_dangerous_deserialization=True)
    chat = ChatGroq(
        model=model_checkpoint,
        temperature=0.2
    )

    start_system_message = PERSONA_PROMPT + TASK_PROMPT + RESTRICTION_PROMPT + CONTEXT_PROMPT
    prompt = ChatPromptTemplate(
        messages=[
            ("system", start_system_message),
            ("user", "{query}")
        ],
    )

    pipeline = (
        {
            "query": lambda x: x['query'],
            "context": lambda x: prepare_context(db, x['query']),
        }
        | prompt 
        | chat
    )

    return pipeline.invoke(
        {
            "query": prepare_query(query),
            "context": prepare_context(db, query)
        }
    )