from fastapi import FastAPI, UploadFile, File 
from fastapi.middleware.cors import CORSMiddleware
import shutil, os 

app = FastAPI()

# Allow CORS from frontend 
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    filepath = f"temp/{file.filename}"
    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
        
        return {"filename": file.filename}
    