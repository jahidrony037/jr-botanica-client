import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layout/MainLayout";
import router from "./routes/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <RouterProvider router={router}>
      <MainLayout />
    </RouterProvider>
  </div>
);
