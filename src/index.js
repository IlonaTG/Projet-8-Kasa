import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/main.css';
import AppRouter from './components/appRouter/main.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

