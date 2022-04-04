import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';

const container = ReactDOMClient.createRoot(document.getElementById("root"));
container.render(<App />);
