import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { TfiMenu } from "react-icons/tfi";
import { IoHome } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { FaChild } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useEffect, useState } from "react";
import { MdOutlineFavorite } from "react-icons/md";

const SideBar = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="drawer  drawer-open  z-10  w-10 h-screen fixed top-0 left-0 bottom-0  text-[var(--text-color) ]">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side border-r-1  is-drawer-close:overflow-hidden backdrop-blur bg-white/3 backdrop-blur-md">
        <div className=" is-drawer-close:w-12 is-drawer-open:w-40 flex flex-col items-start relative top-16 ">
          <div className="absolute top-2 left-3 cursor-pointer is-drawer-close:tooltip is-drawer-open:absolute right-12  py-2 px-0">
            <label htmlFor="my-drawer-4">
              <span>
                <TfiMenu size={28} />

              </span>
            </label>
          </div>
          <ul className="absolute top-15 gap-5 menu font-bold text-lg w-full px-0  py-2">
            <li>
              <Link to="/">
                <span className="pr-2"><IoHome size={25} /></span>
                <span className="is-drawer-close:hidden">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/men">
                <span className="pr-2"><FaMale size={25} /></span>
                <span className="is-drawer-close:hidden">Men</span>
              </Link>
            </li>
            <li>
              <Link to="/women">
                <span className="pr-2"><FaFemale size={25} /></span>

                <span className="is-drawer-close:hidden">Women</span>
              </Link>
            </li>
            <li>
              <Link to="/kids">
                <span className="pr-2"><FaChild size={25} /></span>

                <span className="is-drawer-close:hidden">Home</span>
              </Link>
            </li>

            <li>
              <Link to="/electro">
                <span className="pr-2"><MdOutlinePhoneIphone size={25} /></span>

                <span className="is-drawer-close:hidden">Electronic</span>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <span className="pr-2"><MdOutlineShoppingCart size={25} /></span>
                <span className="is-drawer-close:hidden">Cart</span>
              </Link>
            </li>
            <li>
              <Link to="/favourite">
                <span className="pr-2"><MdOutlineFavorite size={25} /></span>
                <span className="is-drawer-close:hidden">Favourite</span>
              </Link>
            </li>
            <li>
              <button onClick={toggleTheme} className="toggle-theme">
                {theme === "light" ? <FaMoon size={25} /> : <FaSun size={25} />}
                <span className="is-drawer-close:hidden pl-2">Theme</span>
              </button>
            </li>

            <li className="py-1">
              <Link to="/profile">
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="avatar"
                  className="w-5 h-5 rounded-full inline-block"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
