import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../../App';
import LoginPage from '../DashPages/LoginPage';
import AutoDesigner from '../DashPages/AutoDesigner';
import AboutMe from '../DashPages/AboutMe';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create-car" element={<AutoDesigner />} />
      <Route path="/about" element={<AboutMe />} />
    </Routes>
  );
}

export default Routing;
