from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True
)

class Message(BaseModel):
    text: str
    sender: str = 'user' or 'bot'

@app.get("/")
def root():
    return {"message": "Welcome to the chatbot API!"}

@app.post("/chat")
async def chat(message: Message):
    from pipelines.rag import get_answer
    try:
        if message.sender == 'user':
            answer = get_answer(message.text)
            # return Message(text=f"You said: {message.text}", sender='bot')
            return Message(text=answer.content, sender='bot')
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    
