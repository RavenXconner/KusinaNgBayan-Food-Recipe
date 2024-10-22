// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Uncomment this if Bootstrap is needed
import 'font-awesome/css/font-awesome.min.css'; // Uncomment this if Font Awesome is needed
import '@fortawesome/fontawesome-free/css/all.min.css'; // Uncomment this if Font Awesome is needed
import './components/css/style.css'; // Uncomment this if custom CSS is needed
import './components/css/bootstrap.min.css'; // Uncomment this if custom Bootstrap CSS is needed

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
