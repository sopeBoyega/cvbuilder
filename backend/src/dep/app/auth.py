from typing import Optional
from fastapi import APIRouter,Cookie, Request
from fastapi.responses import JSONResponse , HTMLResponse
from secrets import token_urlsafe
from werkzeug.security import generate_password_hash, check_password_hash
from .model import User
from fastapi import HTTPException
from . import db,users
import functools
import inspect
from starlette.middleware.base import BaseHTTPMiddleware

auth = APIRouter(prefix="/auth", tags=["auth"])
tokenByteLength = 32
passwordHashMethod = "pbkdf2:sha256:600000"
# mongod --dbpath ./db

def LocalIDGetUser(localID):
    user =  users.find_one({"localID":localID})
    return User(**user) if user else None
def LocalIDGetUserRaw(localID):
    user =  users.find_one({"localID":localID})
    return user

class AuthMiddleware (BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        localID = request.cookies.get("localID")
        if localID:
            user = LocalIDGetUser(localID)
            if user:
                request.state.user = user
            else:
                request.state.user = None
        else:
            request.state.user = None
        if request.state.user is None and not (request.url.path  in ["/auth/login", "/auth/register"]):
            return JSONResponse({"detail": "Unauthorized"}, status_code=401)
        response = await call_next(request)
        return response
    


@auth.post("/login")
async def LOGIN (request: Request):
    json = User(**await request.json()).model_dump()
    user = users.find_one({"username":json["username"]})
    if user:
        if check_password_hash(user.get("password"),json["password"]):
            response = JSONResponse({"detail":"YES"})
            response.set_cookie(key="localID",value=user["localID"],samesite="None",path="/",secure=True,httponly=True,max_age=60*60*24*30)  # 30 days
            return response
    raise HTTPException(status_code=401, detail="NO")
    

@auth.post("/register")
async def REGISTER (request: Request):
    json = User(**await request.json()).model_dump()
    if all((json["username"],json["password"],json["email"])):
        if not (users.find_one({"username":json["username"]})):
            json["localID"] = token_urlsafe(tokenByteLength)
            json["password"] = generate_password_hash(json["password"],method=passwordHashMethod)
            users.insert_one(json)
            response = JSONResponse({"detail":"YES"})
            response.set_cookie(key="localID",value=json["localID"],samesite="None",path="/",secure=True,httponly=True)
            return response
        else:
            raise HTTPException(status_code=400, detail="EXISTS")
    else:
        raise HTTPException(status_code=400, detail="NO")
    

@auth.get("/getuser")
def GetUser( request: Request):
    user  =  request.state.user
    if not user:
        raise HTTPException(status_code=401, detail="Unauthorized")
    return JSONResponse({"user":user.model_dump()})