import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home/Home';
import PrivacyDuodoku from './pages/Duodoku/Privacy';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000' //'https://alfirma-api-3efa34f27f01.herokuapp.com'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/duodoku/privacy" element={<PrivacyDuodoku />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
