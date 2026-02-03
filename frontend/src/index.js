import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Navbar from './LandingPage/Navbar';
import Footer from './LandingPage/Footer';
import NotFound from './LandingPage/NotFound';

import HomePage from './LandingPage/Home/HomePage';
import AboutPage from './LandingPage/About/AboutPage';
import ProductPage from './LandingPage/Products/ProductPage';
import PricingPage from './LandingPage/Pricing/PricingPage';
import SupportPage from './LandingPage/Support/SupportPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/products' element={<ProductPage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/supports' element={<SupportPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

