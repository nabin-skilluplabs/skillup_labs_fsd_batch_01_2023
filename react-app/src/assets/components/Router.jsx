import React from 'react'
import App from '../../App.jsx'
import Counter from '../../Counter.jsx'
import Stock from '../../Stock.jsx';
import EnrollmentForm from '../pages/EnrollmentForm.jsx';

import {
    createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/counter",
        element: <Counter />,
    },
    {
        path: "/stock",
        element: <Stock />,
    },
    {
        path: "/enrollment",
        element: <EnrollmentForm />,
    },
]);
export default router;



