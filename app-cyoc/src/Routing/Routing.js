import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import AutoDesigner from '../pages/DashPages/AutoDesigner';
import AboutMe from '../pages/DashPages/AboutMe';
import App from '../App';
import HomePage from '../pages/DashPages/HomePage';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create-car" element={<AutoDesigner />} />
      <Route path="/about" element={<AboutMe />} />
    </Routes>
  );
}

export default Routing;