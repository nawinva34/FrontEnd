import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./style/index.css";
import App from "./container/15-12-2022/App";
import Test1 from "./container/15-12-2022/Test1";
import Auten from "./component/15-12-2022/Auten";
import ForgetPassword from "./container/AppAuten/ForgetPassword";
import SignIn from "./container/AppAuten/SignIn"; 
import ResetPassword from "./container/AppAuten/ResetPassword";
import CreatePassword from "./container/AppAuten/CreatePassword";
import Task from "./container/19-12-2022/Task";
import Task2 from "./container/19-12-2022/Task2";
import CreateTab from "./container/20-12-2022/CreateTab";
import Task3 from "./container/20-12-2022/Task3";
import Tab3 from "./container/20-12-2022/Tab3";
import Day2 from "./container/15-12-2022/Day2";
import Day3 from "./container/15-12-2022/Day3";
import FormValidate from "./container/26-12-2022/FormValidate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FormValidate />,
  },
  {
    path: "/Test1",
    element: <Test1 />,
  },
  {
    path: "/Day2",
    element: <Day2 />,
  },
  {
    path: "/Day3",
    element: <Day3 />,
  },
  {
    path: "/Test4",
    element: <Task2 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);