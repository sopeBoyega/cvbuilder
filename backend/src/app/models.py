from flask_login import UserMixin
from . import db
from sqlalchemy import Column, Integer, String, ForeignKey, Boolean, DateTime,Text

class CV(db.Model):
    id = Column(Integer, primary_key=True)
    title = Column(String(150), nullable=False)
    content = Column(Text, nullable=False)
    theme = Column(String(200), nullable=True)
    tags = Column(String(150), nullable=True)  # Comma-separated tags
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    is_public = Column(Boolean, default=False)
    created_at = Column(DateTime, nullable=False, default=db.func.current_timestamp())
    updated_at = Column(DateTime, nullable=False, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())
    status = Column(String(50), nullable=False, default='draft')  # 'draft', 'published', 'archived'
    is_deleted = Column(Boolean, default=False)
    is_favorite = Column(Boolean, default=False)
    
    def __repr__(self):
        return f"CV('{self.title}', '{self.user_id}')"
    
    def toJson(self):
        return {
            'id': self.id,
            'title': self.title,
            'content': self.content,
            'theme': self.theme,
            'tags': self.tags,
            'user_id': self.user_id,
            'is_public': self.is_public,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'status': self.status,
            'is_deleted': self.is_deleted,
            'is_favorite': self.is_favorite
        }
    
    def getId(self):
        return self.id
    
    

class User(db.Model, UserMixin):
    id = Column(Integer, primary_key=True)
    username = Column(String(150), unique=True, nullable=False)
    email = Column(String(150), unique=True, nullable=False)
    password = Column(String(150), nullable=False)
    localID = Column(String(150), unique=True, nullable=False)
    is_admin = Column(Integer, default=0)
    Cvs = db.relationship('CV', backref='user', lazy=True)
    
    def toJson(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'localID': self.localID,
            'is_admin': self.is_admin,
            'Cvs': [cv.toJson() for cv in self.Cvs]
        }

    def __repr__(self):
        return f"User('{self.username}', '{self.email}')"