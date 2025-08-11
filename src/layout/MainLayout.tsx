import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const MainLayout = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col items-start justify-start">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
