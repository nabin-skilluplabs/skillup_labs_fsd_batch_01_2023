import { createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import Counter from "./Counter.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
]);

export default router;
