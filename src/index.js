import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./style/index.css";
import App from "./container/App";
import Test1 from "./container/Test1";
import Test2 from "./container/Test2";
import Test3 from "./container/Test3";
import Test4 from "./container/Test4";
import Test5 from "./container/Test5";
import Test6 from "./container/Test6";
import Test7 from "./container/Test7";
import Test8 from "./container/Test8";
import Test9 from "./container/Test9";
import Test10 from "./container/Test10";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Test1",
    element: <Test1 />,
  },
  {
    path: "/Test2",
    element: <Test2 />,
  },
  {
    path: "/Test3",
    element: <Test3 />,
  },
  {
    path: "/Test4",
    element: <Test4 />,
  },
  {
    path: "/Test5",
    element: <Test5 />,
  },
  {
    path: "/Test6",
    element: <Test6 />,
  },
  {
    path: "/Test7",
    element: <Test7 />,
  },
  {
    path: "/Test8",
    element: <Test8 />,
  },
  {
    path: "/Test9",
    element: <Test9 />,
  },
  {
    path: "/Test10",
    element: <Test10 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);