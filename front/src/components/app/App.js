import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { BaseStyled } from "../baseStyled/baseStyled";
import { AppHeader } from "../appHeader/appHeader";
import { ForgotPwd } from "../forgotPwd/forgotPwd";
import { Login } from "../login/Login";
import { Register } from "../register/register";
import { MainPage } from "../mainPage/mainPage";
import { Footer } from "../footer/footer";

function App() {
  return (
    <Router>
      <AppHeader />
      <BaseStyled>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot_pwd" element={<ForgotPwd />} />
        </Routes>
      </BaseStyled>
      <Footer />
    </Router>
  );
}

export default App;
