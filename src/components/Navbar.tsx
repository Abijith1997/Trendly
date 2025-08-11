import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";
import { SmallNavBar } from "./navbars/SmallNavBar";
import { LargeNavBar } from "./navbars/LargeNavBars";

const Navbar = () => {
  const navigate = useNavigate();

  const state = useSelector((state: RootState) => state.cart);

  return (
    <nav className="fixed top-0 left-0 z-10 w-full bg-blue-100 lg:px-30 lg:py-5 px-5 py-4">
      <div className="flex justify-between items-center lg:px-30">
        <h1
          className="text-5xl font-bold tracking-wiser cursor-pointer"
          onClick={() => navigate("/")}
        >
          Trendly
        </h1>
        <LargeNavBar />
        <SmallNavBar />
      </div>
    </nav>
  );
};

export default Navbar;
