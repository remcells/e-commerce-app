import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import AboutUsPage from './pages/AboutUsPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductPage from './pages/ProductPage';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
