import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Home from './views/Home/Home';
import ProductCard from './components/ProductCard/ProductCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/productcard',
        element: <ProductCard/>,
    }
])

root.render(<RouterProvider router={router}/>)


