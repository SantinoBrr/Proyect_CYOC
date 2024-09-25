import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import AutoDesigner from '../pages/DashPages/AutoDesigner';
import AboutAss from '../pages/DashPages/AboutAss';
import HomePage from '../pages/DashPages/HomePage';
import RegisterPage from '../pages/RegisterPage';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/create-car" element={<AutoDesigner />} />
      <Route path="/about" element={<AboutAss />} />
    </Routes>
  );
}

export default Routing;