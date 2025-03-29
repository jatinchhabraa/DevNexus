import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "../Screens/Login.jsx";
import Register from "../Screens/Register.jsx";
import Home from "../Screens/Home.jsx";
import Project from "../Screens/Project.jsx";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
