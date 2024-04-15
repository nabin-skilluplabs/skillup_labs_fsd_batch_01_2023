import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Counter from './Counter.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/counter",
    element: <Counter />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
