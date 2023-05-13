from flask import Flask, request, jsonify, send_from_directory, render_template, redirect, session
import tensorflow as tf
import numpy as np
from flask_pymongo import MongoClient
from dotenv import load_dotenv
import os
from PIL import Image
import io
import subprocess
import random
import string



def generate_random_string(length):
    letters = string.ascii_letters + string.digits
    result_str = ''.join(random.choice(letters) for i in range(length))
    return result_str


def run_powershell_command(command):
    process = subprocess.Popen(["powershell", "-Command", command], stdout=subprocess.PIPE)
    output, error = process.communicate()
    if error:
        raise Exception(f"Powershell command failed with error: {error}")
    return output.decode().strip()

def read_file_lines(filename):
    lines = []
    with open(filename, 'r') as file:
        for line in file:
            lines.append(line.strip())
    return lines

def append_to_file(filename, content):
    with open(filename, 'a') as file:
        file.write(content + '\n')

def create_directory(path):
        os.makedirs(path)

app = Flask(
            __name__, 
            static_url_path='', 
            static_folder='static'
            )

load_dotenv()

#append_to_file('./classes.txt','Subham')


app.secret_key = os.getenv('SECRET_KEY')
# Create a MongoClient object and pass the connection string
client = MongoClient( os.getenv('MONGO_URI'))
# Access a specific database
db = client['fishify']
# Access a specific collection
collection = db['fishify']


MODEL = tf.keras.models.load_model("./saved_models/1")
CLASSES=read_file_lines('./classes.txt')

@app.route('/')
def serve_html():
    return send_from_directory('static', 'index.html')

@app.route('/train')
def train():
    if 'username' in session:
        run_powershell_command("python train.py")
        return jsonify({'status': 'trained'}), 200

@app.route('/upload_image', methods=['POST'])
def upload_image():
    if 'username' in session:
        if 'image' not in request.files:
            return jsonify({'error': 'No image file found'}), 400
        if 'class' not in request.form:
            return  jsonify({'error': 'No class mentioned'}), 400
    image_file = request.files['image']
    image_class = request.form['class']
    image_file.save('./FishDisease/'+ image_class +'/' + generate_random_string(5) +'.jpg')
    return jsonify({'status': "Image Uploaded"}), 200


@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image file found'}), 400
    
    image_file = request.files['image']
    image_file.save('image.jpg')
    # Load the image and preprocess it
    image = Image.open('image.jpg')
    image = np.array(image)
    image = tf.image.resize(image, [256,256])
    #image = image / 255
   # Convert the NumPy array to a BytesIO object
    image_bytes = io.BytesIO()
    np.save(image_bytes, image)
    image_bytes.seek(0)
   # Make a prediction using the loaded image and the model
    prediction = MODEL.predict(np.load(image_bytes).reshape(1, 256, 256, 3))
    predicted_class=CLASSES[np.argmax(prediction[0])]
    confidence= float(np.max(prediction[0]))

    return jsonify({'class': predicted_class , 'confidence' : confidence, 'predictions': prediction.tolist(), 'classes':CLASSES})

@app.route('/admin')
def admin():
    if 'username' in session:
        return render_template('admin.html' , classes=CLASSES)
    else:
        return redirect('/admin/login')

@app.route('/admin/login', methods=['GET', 'POST'])
def login():
    if 'username' in session:
        return redirect('/admin')
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        user = collection.find_one({'username': username, 'password': password})
        if user:
            session['username'] = username
            return redirect('/admin')
        else:
            return render_template('login.html', message='Invalid username or password')

    return render_template('login.html')

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect('/admin/login')

@app.route('/get_train_py', methods=['GET'])
def get_train_py():
    if 'username' in session:
     with open('./train.py', 'r') as file:
        file_content = file.read()
    return  file_content 

@app.route('/write_train_py', methods=['POST'])
def write_train_py():
    if 'username' in session:
        data = request.form['data']
        if data:
            lines = data.splitlines()
            lines = [line.rstrip() for line in lines if line.rstrip()]
            formatted_data = '\n'.join(lines)
            with open('./train.py', 'w') as file:
                file.write(formatted_data)
            return render_template('admin.html', status="Success!", classes=CLASSES)
        else:
            return render_template('admin.html', status="Unsuccessfull!",classes=CLASSES)
        
@app.route('/new_class', methods=['POST'])
def add_new_class():
    if 'username' in session:
        class_name = request.form['class_name']
        append_to_file('./classes.txt',class_name)
        create_directory('./FishDisease/'+ class_name)
        CLASSES=read_file_lines('./classes.txt')
        return render_template('admin.html', status="Success!", classes=CLASSES)


if __name__ == '__main__':
    app.run(debug=True)
