import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home/Home';
import PrivacyDuodoku from './pages/Duodoku/Privacy';
import axios from 'axios';
import Footer from './components/Footer';
import App from './App';

axios.defaults.baseURL = 'https://alfirma-api-3efa34f27f01.herokuapp.com'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  <Footer/>
  </>
);
