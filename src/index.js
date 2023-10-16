import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LoadingProvider } from './LoadingContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoadingProvider>
    <App />
  </LoadingProvider>
);
