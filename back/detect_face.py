import cv2
import face_recognition
import numpy as np
from threading import *

def saveFile(filename):
    img = cv2.imread(filename)
    vector = face_recognition.face_encodings(img)[0]
    np.savetxt(filename + '.vec', vector, delimiter=' ')
    

def control(filename):
    thr1 = Thread(target=saveFile, args=(filename,))
    
    thr1.start()
    for thread in enumerate(): 
        print(thread)