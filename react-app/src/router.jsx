import App from './App.jsx'
import Counter from './Counter.jsx'
import Stock  from './Stock.jsx';
import ToDoApp from './ToDoApp.jsx';
import DescribingTheUI from './pages/DescribingTheUI.jsx';
import EnrollmentForm from './pages/EnrollmentForm.jsx';
import Students from './pages/Students.jsx'

import {
    createBrowserRouter,
  } from "react-router-dom";
import News from './pages/News.jsx';

  

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
      },
      {
        path: "/news",
        element: <News />
      },
      {
        path: "/enrollmentform",
        element: <EnrollmentForm />
      },
      {
        path: "/students",
        element: <Students />
      }
  ]);
  export default router;