import React from 'react';
import ReactDOM from 'react-dom/client';
import ResetStyle from './assets/style/globalstyle/ResetStyle';
import App from './App.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResetStyle></ResetStyle>
    <App />
  </React.StrictMode>,
)
