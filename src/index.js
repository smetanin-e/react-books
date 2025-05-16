import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './scss/style.scss';

import Home from './pages/Home'
import Cart from './pages/Cart';
import NotFoundPage from './pages/NotFoundPage';
import Wish from './pages/Wish';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFoundPage />
    },
    {
        path: '/cart',
        element: <Cart />
    },
    {
        path: '/wish',
        element: <Wish />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

