import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Profile from './pages/Profile';
import MyProfile from './pages/MyProfile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/user/:username',
    element: <Profile />,
  },
  {
    path: '/profile',
    element: <MyProfile />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
