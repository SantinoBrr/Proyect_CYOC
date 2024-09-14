import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../DashPages/LoginPage';
import AutoDesigner from '../DashPages/AutoDesigner';
import App from '../../App';

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-car" element={<AutoDesigner />} />
        </Routes>
    );
}

export default Routing;