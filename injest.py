import os
import re
import dotenv
import pdfplumber

from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS

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

def main(path):
    if not path or not os.path.exists(path):
        raise FileNotFoundError("File not found or invalid path")
    
    # Load environment variables
    dotenv.load_dotenv()

    print("Loading resume content...")
    text = extract_all_text(path)
    print("Extracting resume sections...")
    sections = chunk_by_section(text)

    print("Initialize DB")
    db = FAISS.from_texts(sections, HuggingFaceEmbeddings(model_name=os.getenv("EMBEDDING_CHECKPOINT")))
    db.save_local("data/resume_db")

if __name__ == "__main__":
    path = "data/resume_content.pdf"
    main(path=path)