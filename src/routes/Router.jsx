import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddFood from "../pages/AddFood/AddFood";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUP from "../pages/SignUP/SignUP";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUP />,
      },
      {
        path: "/addFood",
        element: <AddFood />,
      },
    ],
  },
]);

export default router;
