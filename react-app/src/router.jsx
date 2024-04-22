import App from './App.jsx'
import Counter from './Counter.jsx'
import Stock  from './Stock.jsx';
import ToDoApp from './ToDoApp.jsx';
import DescribingTheUI from './pages/DescribingTheUI.jsx';

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
    {
        path: "/stock",
        element: <Stock />,
      },
      {
        path: "/todoapp",
        element: <ToDoApp />
      },
      {
        path: "/describing-the-ui",
        element: <DescribingTheUI />
      }
  ]);
  export default router;