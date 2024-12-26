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
import Day1 from './pages/Day1';
import PreReleaseBusiness from './pages/PreReleaseBusiness';
import WW from './pages/WW';
import Contact from './pages/Contact';
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
  },
  {
    path: "Day1",
    element: <Day1 />,
  },
  {
    path: "PreReleaseBusiness",
    element: <PreReleaseBusiness />,
  },
  {
    path: "WW",
    element: <WW />,
  },
  {
    path: "Contact",
    element: <Contact />,
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
