import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import Navibar from './components/common/Navibar.js';
import Footer from './components/common/Footer.js';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navibar />
    <App />
    <Footer />
  </React.StrictMode>
);
