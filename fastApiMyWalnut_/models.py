from keras.models import load_model
from keras.applications import vgg19
from keras.applications import vgg16
from keras.applications import densenet
from os.path import join
from keras.preprocessing import image
import numpy as np
from PIL import Image
import io
from dataclasses import dataclass


@dataclass
class Model:
    filename: str
    preprocessor: callable
    input_shape: tuple[int, int]
    classes: list[str]


class Disease:
    ALZHEIMER = Model(filename="alzheimer_vgg19.h5",
                      preprocessor=vgg19.preprocess_input,
                      input_shape=(208, 176),
                      classes=["Mild Demented", "Moderate Demented", "Non Demented", "Very Mild Demented"])
    STROKE = Model(filename="stroke_densenet169.h5",
                   preprocessor=densenet.preprocess_input,
                   input_shape=(224, 224),
                   classes=["No Stroke Detected", "Stroke Detected"])
    TUMOR = Model(filename="tumor_vgg16.h5",
                  preprocessor=vgg16.preprocess_input,
                  input_shape=(224, 224),
                  classes=["No Brain Tumour Detected", "Brain Tumour Detected"])


def load_model_for_disease(model_file: str):
    models_dir = 'Models'

    return load_model(join(models_dir, model_file))


def preprocess_file(img, preprocessor, input_shape):
    img = Image.open(io.BytesIO(img))
    img = img.resize(input_shape)
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    if img_array.shape[3] == 1:
        img_array = np.repeat(img_array, 3, axis=3)
    processed_img = preprocessor(img_array)
    return processed_img


def get_prediction(img, model, classes):
    prediction = model.predict(img)
    return classes[np.argmax(prediction[0])]
