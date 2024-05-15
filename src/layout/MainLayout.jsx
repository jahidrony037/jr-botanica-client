import { motion, useScroll, useSpring } from "framer-motion";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer/Footer";

const MainLayout = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[8px] bg-[#84d814] transform origin-left z-20"
        style={{ scaleX }}
      />
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
    </>
  );
};

export default MainLayout;
