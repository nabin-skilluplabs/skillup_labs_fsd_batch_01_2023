import {
    createBrowserRouter,
  } from "react-router-dom";
  

import App from './App.jsx';
import Counter from './Counter.jsx';
import Stock from "./Stock.jsx";
import DescribingTheUI from "./pages/DescribingTheUI.jsx";



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
      path: "/describing-the-ui",
      element: <DescribingTheUI />,
    },

  ]);

  export default router;