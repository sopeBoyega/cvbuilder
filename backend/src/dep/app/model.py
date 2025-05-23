from pprint import pprint
from pydantic import BaseModel,EmailStr
from typing import List, Optional, Literal
from datetime import date
from bson import ObjectId
class RequestModel(BaseModel):
    data:dict
    localID:str = None

class Experience(BaseModel):
    job_title: str
    company_name: str
    location: Optional[str] = None
    start_date: date
    end_date: Optional[date] = None 
    responsibilities: List[str]

class Education(BaseModel):
    degree: str
    university: str
    graduation_year: int
    relevant_coursework: Optional[List[str]] = None

class Certification(BaseModel):
    name: str
    issuing_organization: str
    issue_date: date

class Project(BaseModel):
    name: str
    description: str
    technologies_used: List[str]
    link: Optional[str] = None

class CV(BaseModel):
    ID:str 
    title:str
    theme:str
    date:str
    status:Literal["draft","downloaded","saved"] = "draft"
    cv:str

    def getId(self):
        return self.ID
    

class User (BaseModel):
    _id:Optional[ObjectId] = None
    username:str
    password:str
    email:str = None
    localID:str = None
    Cvs:Optional[List[CV]] = []

    def getId(self):
        return self._id
    