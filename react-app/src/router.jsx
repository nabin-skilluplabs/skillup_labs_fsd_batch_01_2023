import {
    createBrowserRouter
  } from "react-router-dom";

import App from './App';
import Counter from './Counter';
import Stock from './Stock';
import DescribingTheUI from "./pages/DescribingTheUI";
import News from "./pages/News";
import EnrollmentForm from "./pages/EnrollmentForm";
import Students from "./pages/Students";

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
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/enrollment-form",
        element: <EnrollmentForm />,
      },
      {
        path: "/students",
        element: <Students />,
      },
  ]);

export default router;