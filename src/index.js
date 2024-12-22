import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import BoxOffice from './pages/BoxOffice';
import APTG from './pages/APTG';
import ATRDay1 from './pages/ATRDay1';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "BoxOffice",
    element: <BoxOffice />,
  },
  {
    path: "APTG",
    element: <APTG />,
  },
  {
    path: "ATRDay1",
    element: <ATRDay1 />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
