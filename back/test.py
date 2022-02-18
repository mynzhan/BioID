import asyncio
import cv2
import face_recognition
import numpy as np

async def async_func(task_no):
    print(f'{task_no}: Запуск ...')
    await asyncio.sleep(2)
    print(f'{task_no}: ... Готово!')


async def main():
    print(852)
    taskA = loop.create_task(loading('asd.jpg'))
    print(85)
    taskB = loop.create_task(async_func('taskB'))
    taskC = loop.create_task(async_func('taskC'))
    await asyncio.wait([taskA,taskB,taskC])


if __name__ == "__main__":
    try:
        loop = asyncio.get_event_loop()
        loop.run_until_complete(main())
    except :
        pass
    
    


async def loading(filename):
    print('in')
    img = cv2.imread(filename)
    
    vector = await asyncio.to_thread(getVector(img))
    
    np.savetxt(filename + '.vec', vector, delimiter=' ')
    

def getVector(img):
    return face_recognition.face_encodings(img)[0]