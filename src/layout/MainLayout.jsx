import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="container mx-auto ">
        <Navbar />
      </div>
      <div className="container mx-auto min-h-[calc(100vh-291px)]">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
