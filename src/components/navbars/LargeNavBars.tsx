import { IconShoppingCart, IconUser } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LargeNavBar = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const [ddmActive, setDdmActive] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setDdmActive(false);
      }
    }

    if (ddmActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ddmActive]);
  return (
    <div className="links-group hidden md:flex justify-between items-center gap-10 [&>div]:hover:bg-blue-200 [&>div]:cursor-pointer [&>div]:px-3 [&>div]:py-2 [&>div]:rounded-lg">
      <div className="links" onClick={() => navigate("/products")}>
        Products
      </div>
      <div className="links" onClick={() => navigate("/about")}>
        About
      </div>
      <div className="links" onClick={() => navigate("/contact")}>
        Contact
      </div>

      <div
        className="links border-1 border-black/10 shadow-sm relative"
        onClick={() => navigate("/cart")}
      >
        <IconShoppingCart size={24} />
      </div>
      <div
        className="profile relative cursor-pointer w-full"
        onClick={() => setDdmActive(!ddmActive)}
      >
        <div className="ddm">
          <IconUser size={24} />
        </div>
        {ddmActive && (
          <div
            ref={ref}
            className="right-0 px-8 py-3 ddm-content absolute flex flex-col gap-3 -bottom-30 bg-white items-center justify-center rounded-lg shadow-xl z-10"
          >
            <div
              className="links w-full text-center hover:bg-blue-200 p-1 px-4 cursor-pointer rounded "
              onClick={() => navigate("/login")}
            >
              Login
            </div>
            <div className="border-b-1 border-black/10 h-[1px] w-full"></div>
            <div
              className="links w-full text-center hover:bg-blue-200 p-1 px-4 cursor-pointer rounded"
              onClick={() => navigate("/register")}
            >
              Register
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
