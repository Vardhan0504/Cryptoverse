import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for ReactDOM
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // Keep this for routing

const root = ReactDOM.createRoot(document.getElementById('root')); // Initialize the root

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
