import React from 'react';
import ReactDOM from 'react-dom'; // Use ReactDOM from 'react-dom' here
import './index.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import myCreatedRoute from './Route/Route';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>
);
