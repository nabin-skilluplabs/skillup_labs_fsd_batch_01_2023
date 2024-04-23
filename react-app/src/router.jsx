import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Counter from "./Counter";
import Stock from "./Stock";
import DescribingTheUI from "./pages/DescribingTheUI";
import News from "./pages/News";
import ToDoApp from "./ToDoApp";

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
    path: "/describingtheui",
    element: <DescribingTheUI />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/todoapp",
    element: <ToDoApp />,
  },
]);

export default router;
