import cv2, os
import face_recognition
import numpy as np
import asyncio

async def loading(filename):
    img = cv2.imread(filename)
    vector = getVector(img)
    await np.savetxt(filename + '.vec', vector, delimiter=' ')
    print(vector)
    return vector

async def getVector(img):
    await asyncio.to_thread(face_recognition.face_encodings(img)[0])
    
async def asyncupload(loop, filename):
    tasks = []
    task = asyncio.ensure_future(loading(filename))
    tasks.append(task)
    responses = await asyncio.gather(*tasks)
    return responses