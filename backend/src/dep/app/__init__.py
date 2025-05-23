from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient
from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017")
# client.drop_database("PrimeResume")
db = client.get_database("PrimeResume")
def setup_db():
    if "users" not in  db.list_collection_names():
         db.create_collection("users") 

users = db.get_collection("users")
print(list(users.find()))
from .auth import auth, AuthMiddleware 
from .airoute import aiend
from .view import view
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

@app.on_event("startup") 
async def startup():
     setup_db()

app.include_router(auth)
app.include_router(aiend) 
app.include_router(view) 
app.add_middleware(AuthMiddleware)

# LocalIDGetUser("WWlcFJhLf4BUHRh4LkXT5H1Ad5gzB8J7oSeaU0_ybfY")