import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import AutoDesigner from '../pages/DashPages/AutoDesigner';
import AboutUs from '../pages/DashPages/AboutUs';
import HomePage from '../pages/DashPages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import LegalPage from '../pages/DashPages/LegalPage';
import TermsOfService from '../pages/DashPages/terms-of-service';
import PrivacyPolicy from '../pages/DashPages/privacy-policy';
import NotFoundPage from '../pages/NotFoundPage';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/create-car" element={<AutoDesigner />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/LegalPage" element={<LegalPage />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Routing;