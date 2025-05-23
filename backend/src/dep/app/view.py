from fastapi import  (
    APIRouter,
    Cookie,
    HTTPException,
    Request,
)
from fastapi.responses import JSONResponse
from .auth import LocalIDGetUser
from . import users
from .model import CV, User

view = APIRouter(prefix="/user",tags=["user"])


@view.post("/insertcv")
async def InsertCV(request:Request):
    user = request.state.user
    if not user:
        return HTTPException(status_code=401,detail="Unauthorized")
    Json = await request.json()
    try:
        user.Cvs.append(CV(**Json["cv"]))
        users.update_one({"localID":user.localID},user.model_dump())
        return "CV added successfully"
    except:return HTTPException(status_code=404,detail="Could not add cv, cv does not match it's Model")

@view.post("/getcvs")
def InsertCV(request:Request):
    user = request.state.user
    if not user:
        return HTTPException(status_code=401,detail="Unauthorized")
    try:
        return JSONResponse({"cvs":user.model_dump()["Cvs"]})
    except:return HTTPException(status_code=404,detail="Could not get cvs")


# @view.get("/test")
# @RequireLocalID
# def Test():
#     return "Tested"
# @view.post("/test")
# @RequireLocalID
# def Test():
#     return "Tested"