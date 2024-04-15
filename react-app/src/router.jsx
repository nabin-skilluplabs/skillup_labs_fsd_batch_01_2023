import App from './App.jsx'
import Counter from './Counter.jsx'

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
      element:<Counter />,
    },
  ]);
  export default router;