import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Counter from "./Counter";
import Stock from "./Stock";
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
