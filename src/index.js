import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './global'; // + importa os estilos globais definidos em global.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles /> {/* + aplicando estilos globais para toda a aplicação*/}
    <App />
  </React.StrictMode>
);