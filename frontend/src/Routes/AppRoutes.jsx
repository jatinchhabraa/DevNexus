import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<div>Home</div>} />
          <Route path="Login" element={<div>Login</div>} />
          <Route path="Register" element={<div>Register</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
