import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import axios from 'axios';
import Footer from './components/Footer';
import App from './App';

axios.defaults.baseURL = 'http://127.0.0.1:8000' //'https://alfirma-api-3efa34f27f01.herokuapp.com'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  <Footer/>
  </>
);
