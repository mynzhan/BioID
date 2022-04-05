/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

import "./appHeader.css";

export const AppHeader = () => {
  return (
    <header className="w-full flex-1">
      <nav className="bg-white border-4 text-xl ">
        <div className="container mx-auto px-4 flex justify-between m-2">
          <Link to="/">
            <div className="py-1 px-4">
              Fase ID
            </div>
          </Link>
          <div className="flex " id="mobile-menu">
            <Link to="/login" className="border-2 border-blue-500 rounded-xl">
              <div className="py-1 px-4">Log in</div>
            </Link>
            <Link to="/register" className="bg-blue-900 rounded-xl ml-4">
              <div className="py-1 px-4 text-white">Sign up</div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
