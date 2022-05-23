import React from "react";

export const BaseStyled = ({ children }) => {
  return (
    <div className="bg-gray-200 min-h-screen overflow-hidden flex flex-col">
        {children}
    </div>
  );
};
