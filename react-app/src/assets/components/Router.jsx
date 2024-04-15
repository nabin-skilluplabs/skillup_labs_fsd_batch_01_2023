import React from 'react'
import App from './App.jsx'
import Counter from './Counter.jsx'

import {
    createBrowserRouter,
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
export default router;



