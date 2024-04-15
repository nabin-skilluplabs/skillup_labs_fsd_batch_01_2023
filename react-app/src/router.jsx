import {
    createBrowserRouter,
  } from "react-router-dom";
  

import App from './App.jsx';
import Counter from './Counter.jsx';
import Stock from "./Stock.jsx";



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

  ]);

  export default router;