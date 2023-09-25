from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import File, UploadFile
from fastapi import Form
import models
from models import Disease

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
async def root():
    return {"message": "Hello Banana"}

@app.get("/banana")
async def root():
    id = 420
    return {"ID": id, "Name": "Good Monkey"}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}


@app.post("/results")
async def publish_results(file: UploadFile, disease: str = Form(...)):
    disease = disease.lower()
    model = None

    if disease == "alzheimer's":
        model = Disease.ALZHEIMER
    elif disease == "stroke":
        model = Disease.STROKE
    elif disease == "tumor":
        model = Disease.TUMOR

    loaded_model = models.load_model_for_disease(model.filename)
    img = await file.read()
    preprocessed_file = models.preprocess_file(img, model.preprocessor, model.input_shape)
    prediction = models.get_prediction(preprocessed_file, loaded_model, model.classes)
    return {"diagnosis": prediction}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

#uvicorn main:app --host 0.0.0.0 --port 8000 --reload