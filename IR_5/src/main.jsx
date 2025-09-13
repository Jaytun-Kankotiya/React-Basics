import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Players from './Pages/Players';
import Report from './Pages/Report';
import PlayerDetails from './Pages/PlayerDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/players',
    element: <Players />,
  },
  {
    path: '/report',
    element: <Report />,
  },
  {
    path: '/playersdetails/:playerId',
    element: <PlayerDetails />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
