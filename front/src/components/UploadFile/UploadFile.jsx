import React, { useState } from "react";

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("file", selectedFile);
    
    fetch("http://127.0.0.1:5000/upload", {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div class="mt-10 flex w-full items-center justify-around bg-grey-lighter ">
      <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300">
        <svg
          class="w-8 h-8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span class="mt-2 text-base leading-normal">Выбрать картинку</span>
        <input
          type="file"
          name="file"
          class="hidden"
          onChange={changeHandler}
        />
      </label>
      <button
        onClick={handleSubmission}
        className="py-4 px-9 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300"
      >
        Отправить
      </button>
    </div>
  );
};

export default UploadFile;
