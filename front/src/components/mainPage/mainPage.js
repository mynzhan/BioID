import React, { useState } from "react";
import UploadFile from "../UploadFile/UploadFile";

export const MainPage = () => {

  return (
    <div className="flex justify-center items-center flex-auto">
      <div className="mx-auto flex items-center">
        <img
          className="mx-auto w-80"
          src="https://cdn-icons-png.flaticon.com/512/1461/1461141.png"
          alt="face"
        />
        <span className="text-center">
          <h2 className="text-3xl">Добро пожаловать на страницу FaceID</h2>
          <p className="mt-5">
            Для теста перетащите картинку на поле ввода или нажмите на кнопку
          </p>
          <p></p>
          <UploadFile />
        </span>
      </div>
    </div>
  );
};
