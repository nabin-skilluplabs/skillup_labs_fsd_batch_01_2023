import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Counter from "./Counter";
import Stock from "./Stock";
import DescribingTheUI from "./pages/DescribingTheUI";
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
    path: "/pages/describingtheui",
    element: <DescribingTheUI />,
  },
]);

export default router;
