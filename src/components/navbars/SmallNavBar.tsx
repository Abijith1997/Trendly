import { IconMenu, IconShoppingCart } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SmallNavBar = () => {
  const navigate = useNavigate();
  const [rightBarActive, setRightbarActive] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setRightbarActive(false);
      }
    }

    if (rightBarActive) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [rightBarActive]);

  const handleNavigate = (route: string) => {
    navigate(`/${route}`);
    setRightbarActive(false);
  };

  const handleClick = () => {
    if (location.pathname === "/") {
      // Already on home → just scroll
      document.querySelector(".products-grid")?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      // Navigate home and pass state to scroll after load
      navigate("/", { state: { scrollTo: "products-grid" } });
    }
  };

  return (
    <div className="links-group flex md:hidden justify-between items-center gap-10 [&>div]:hover:bg-blue-200 [&>div]:cursor-pointer [&>div]:px-3 [&>div]:py-2 [&>div]:rounded-lg">
      <div
        className="left-nav"
        onClick={() => setRightbarActive(!rightBarActive)}
      >
        <IconMenu />
      </div>
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 z-100 h-full w-78 bg-white shadow-lg transform transition-transform duration-300 ease-in-out 
  ${rightBarActive ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        <div className="p-5 py-10 flex flex-col gap-10 items-center justify-between h-full">
          <div className="top-group w-full px-5 py-2 gap-5 flex flex-col items-center justify-between">
            <div
              className="links w-full text-center hover:bg-blue-200 p-2 px-4 cursor-pointer rounded"
              onClick={handleClick}
            >
              Products
            </div>
            <div
              className="links w-full text-center hover:bg-blue-200 p-2 px-4 cursor-pointer rounded"
              onClick={() => handleNavigate("about")}
            >
              About
            </div>
            <div
              className="links w-full text-center hover:bg-blue-200 p-2 px-4 cursor-pointer rounded"
              onClick={() => handleNavigate("contact")}
            >
              Contact
            </div>

            <div
              className="links border border-black/10 relative flex items-center justify-center w-full p-2 px-4 rounded shadow-xl"
              onClick={() => handleNavigate("cart")}
            >
              <IconShoppingCart size={24} />
            </div>
          </div>

          <div className="bottom-group w-full px-5 py-2 gap-5 flex flex-col items-center justify-between">
            <div
              className="links w-full text-center hover:bg-blue-200 p-1 px-4 cursor-pointer rounded"
              onClick={() => handleNavigate("login")}
            >
              Login
            </div>
            <div className="border-b border-black/10 h-[1px] w-full"></div>
            <div
              className="links w-full text-center hover:bg-blue-200 p-1 px-4 cursor-pointer rounded"
              onClick={() => handleNavigate("register")}
            >
              Register
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
