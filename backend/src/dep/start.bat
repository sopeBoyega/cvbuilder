start  mongod --dbpath ./db
uvicorn main:app --host localhost --port 8089 --reload