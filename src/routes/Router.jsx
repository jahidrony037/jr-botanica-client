import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddFood from "../pages/AddFood/AddFood";
import AvailableFoods from "../pages/AvailableFoods/AvailableFoods";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ManageFood from "../pages/ManageFood/ManageFood";
import RequestedFoods from "../pages/RequestedFoods/RequestedFoods";
import SignUP from "../pages/SignUP/SignUP";
import UpdateFood from "../pages/UpdateFood/UpdateFood";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
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
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/availableFoods",
        element: <AvailableFoods />,
      },
      {
        path: "/availableFood/:id",
        // loader: (params) =>
        //   axios(`foods/${params.params.id}`, {
        //     withCredentials: true,
        //   }),
        element: (
          <PrivateRoute>
            <FoodDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/foodRequest",
        element: (
          <PrivateRoute>
            <RequestedFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "/manageFood",
        element: (
          <PrivateRoute>
            <ManageFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateFood/:id",
        loader: (params) =>
          axios.get(`${import.meta.env.VITE_URL}/food/${params.params.id}`, {
            withCredentials: true,
          }),
        element: (
          <PrivateRoute>
            <UpdateFood />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
