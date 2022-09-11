// Importações
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Renderização do component App na div com id="root" do index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);