import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.scss';

import reportWebVitals from './reportWebVitals';

import HomeFrame from './layout/HomeFrame';
import AboutFrame from './layout/AboutFrame';
import PageNotFoundFrame from './layout/PageNotFoundFrame';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeFrame />} />
        <Route path="/about" element={<AboutFrame />} />
        <Route path="*" element={<PageNotFoundFrame />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
