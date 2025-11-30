from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime


class MessageIn(BaseModel):
     question: str


class MessageOut(BaseModel):
     role: str
     content: str
     created_at: datetime


class ConversationPreview(BaseModel):
     id: int
     created_at: datetime
     last_message_preview: Optional[str]
