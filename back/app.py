from flask import Flask, request
import os
from detect_face import control

imgroot = os.path.dirname(os.path.abspath(__file__)) + '/source/'

app = Flask(__name__)

@app.route("/upload", methods=['POST'])
def hello_world():
    file = request.files.get('file')
    fnname = file.filename
    file.save(imgroot + fnname)
    vector = control(filename=imgroot + fnname)
    return {"success": "Succesfully"}, 200
    