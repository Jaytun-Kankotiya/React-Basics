import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Product from './components/Products';
import About from './components/About';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/products',
    element: <Product />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/products/:productSequence',
    element: <ProductDetails />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
