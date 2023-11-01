import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
