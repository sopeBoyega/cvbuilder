from fastapi import APIRouter, Cookie, Request, Response
from fastapi.exceptions import HTTPException
from fastapi.responses import JSONResponse, HTMLResponse 
from secrets import token_urlsafe
from .auth import LocalIDGetUser
from .addons.XML import xmlToJson 
from xml.dom.minidom import parseString as StringToXml
from .addons.AI import DeepSeek, Gemini
from . import db,users
from .model import CV
import json , time
from pydantic_core import from_json
aiend = APIRouter(prefix="/ai", tags=["ai"])



ai = Gemini()
specXml = StringToXml(open("CVRequirements.xml","r").read()).documentElement


def GenerateQuestions(jobDescription:str):
    prompt = f"""
        <prompt> generate all questions for a professional CV based on the `jobDescription` and `{specXml.tagName}`</prompt>
        <context> a question</context>
        <jobDescription>
            {jobDescription}
        </jobDescription>
        {specXml.toprettyxml()}
        <roles>
            <role>List the questions in a JSON format.  
                Use this JSON schema:
                question = {"{'context':str, 'answerType':Literal['str','int','float','bool','list'], 'question':str}"}
                Return: list[question]
            </role>
        </roles>
    """
    aiResponse = ai.generate(prompt=prompt).removeprefix("```").removeprefix("json").removesuffix("```")
    print(aiResponse)
    aiResJson = json.loads(aiResponse)
    print(aiResJson)
    return {"questions":aiResJson}


def GenerateCV(questions:list[dict]):
    prompt = f"""
        <prompt> generate a professional CV based on the `questions` and `{specXml.tagName}`</prompt>
        <questions>
            {questions}
        </questions>
        {specXml.toprettyxml()}
        <roles>
            <role> reply strictly with only the cv. and nothing else. </role>
            <role> return a text document </role>
        </roles>
    """
    aiResponse = ai.generate(prompt=prompt).removeprefix("```").removesuffix("```")
    return aiResponse

@aiend.post("/questions")
async def GenerateQuestionsEndPoint(data:Request):#,):
    jobDescription = (await data.json())["jobDescription"]
    return JSONResponse(GenerateQuestions(jobDescription)) 
    
    

@aiend.post("/cv")
async def GenerateQuestionsEndPoint(data:Request,):
    questions = (await data.json())["questions"]
    user = data.state.user
    generatedCv =GenerateCV(questions)
    if user:
        user.Cvs.append(CV(
            cv = generatedCv ,
            title = ai.generate(f"Generate the job title for this cv `{generatedCv}`. Return only the short title and nothing else. let it be unique from `{[cv.title for cv in user.Cvs]}`"),
            theme = ai.generate(f"Generate a theme for this cv `{generatedCv}`. Return only the short theme and nothing else"),
            
            date = time.strftime("%d %B %Y"),
            ID = token_urlsafe(32)))
        users.update_one({"localID":user.localID},{"$set":user.model_dump()})
        # print(user.Cvs[-1].cv)
        return JSONResponse({"id":user.Cvs[-1].getId(),"message":"CV generated"})
    return JSONResponse({"detail":"User not found"})
    

 
@aiend.post("/cvget")
async def GetgjcvCV(data:Request):
    print("GetCV ---------------------------------------------------")
    # print(data.headers)
    cvid =  (await data.json())["cvid"]
    user = data.state.user 
    if user:
        cv:CV
        
        for i in user.Cvs:
         
            if i.ID == cvid:
                cv =  i
                
                return JSONResponse({"cv":cv.model_dump()})
           
        raise HTTPException(detail="cv not found",status_code=404)
    return JSONResponse({"detail":"User not found"})
    
    
 