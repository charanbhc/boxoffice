import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Archives from './pages/Archives';
import APTG from './pages/APTG';
import ATRDay1 from './pages/RECORDS';
import Day1 from './pages/Day1';
import PreReleaseBusiness from './pages/PreReleaseBusiness';
import Closing from './pages/Closing';
import Contact from './pages/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "BoxOffice",
    element: <Archives />,
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
    element: <Closing />,
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
