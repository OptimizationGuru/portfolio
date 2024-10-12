import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ReactGA from 'react-ga';

const root = ReactDOM.createRoot(document.getElementById('root'));

ReactGA.initialize(process.env.REACT_APP_GA_ID);

ReactGA.pageview(window.location.pathname + window.location.search);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
