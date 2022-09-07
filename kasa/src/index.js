import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.scss';

import HomeFrame from './layout/HomeFrame';
import AboutFrame from './layout/AboutFrame';
import PageNotFoundFrame from './layout/PageNotFoundFrame';
import HousingFrame from './layout/HousingFrame';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeFrame />} />
        <Route path="/about" element={<AboutFrame />} />
        <Route path="/housing/:id" element={<HousingFrame />} />
        <Route path="/badId" element={<PageNotFoundFrame />} />
        <Route path="*" element={<PageNotFoundFrame />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
