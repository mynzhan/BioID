import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AppHeader } from "../appHeader/appHeader";
import { ForgotPwd } from "../forgotPwd/forgotPwd";
import { Login } from "../login/Login";
import { Register } from "../register/register";
import { MainPage } from "../mainPage/mainPage";

function App() {
  return (
    <Router>
      <div className="h-screen flex-col bg-gray-200">
        <AppHeader />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot_pwd" element={<ForgotPwd />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
