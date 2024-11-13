import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './containers/homepage/Homepage';
import AccountManagerment from './containers/accountmanagerment/AccountManagerment';
import AssetAllocation from './containers/assetAllocation/AssetAllocation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
    children: [
      {
        path: "Homepage",
        element: <Homepage />,
        // loader: teamLoader,
      },
      {
        path: "/AccountManagerment",
        element: <AccountManagerment />,
      },
      {
        path: "/AssetAllocation",
        element: <AssetAllocation />
      }
    ],
  },
  
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
