import os
import json
import asyncio
from fastapi import FastAPI, WebSocket, WebSocketDisconnect, Depends, APIRouter
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
from .db import SessionLocal, engine
from . import models
from .schemas import MessageIn
import httpx


# create DB
models.Base.metadata.create_all(bind=engine)


app = FastAPI()
api = APIRouter(prefix='/api')


OLLAMA_URL = os.getenv('OLLAMA_URL', 'http://ollama:11434')


# dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@api.get('/history')
def get_history(db: Session = Depends(get_db)):
    convs = db.query(models.Conversation).order_by(models.Conversation.created_at.desc()).limit(50).all()
    out = []
    for c in convs:
        last =
