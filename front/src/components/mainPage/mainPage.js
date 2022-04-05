import React from "react";

export const MainPage = () => {
  return (
    <div className="container mx-auto mt-12">
      <img
        className="mx-auto w-80"
        src="https://cdn-icons-png.flaticon.com/512/1461/1461141.png"
        alt="face"
      />
      <div className="flex justify-center text-2xl mt-12">
        <h2>Welcome to FaceID</h2>
        <h2 className="ml-4 text-blue-700 underline">
          <a href="/">TRY IT</a> 
        </h2>
      </div>
    </div>
  );
};
