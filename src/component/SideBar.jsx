import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { TfiMenu } from "react-icons/tfi";
import { useEffect, useState } from "react";

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
      <div className="drawer-side border-r-1  is-drawer-close:overflow-hidden backdrop-blur bg-white/1 backdrop-blur-md">
        <div className=" is-drawer-close:w-13 is-drawer-open:w-50 flex flex-col items-start relative top-16 ">
          <div className="absolute top-3 left-3 cursor-pointer is-drawer-close:tooltip is-drawer-open:absolute right-12  py-2 px-0">
            <label htmlFor="my-drawer-4">
              <span className="cursor-pointer text-[var(--text-color)]">
                <TfiMenu size={28} />
              </span>
            </label>
          </div>
          <ul className="absolute top-14 gap-5 menu  w-full px-0 py-1 text-[24px]">
            <li>
              <Link to="/">
                <span>🏠</span>
                <span className="is-drawer-close:hidden px-2">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/men">
                <span>👕</span>
                <span className="is-drawer-close:hidden px-2">Men</span>
              </Link>
            </li>
            <li>
              <Link to="/women">
                <span>👗</span>

                <span className="is-drawer-close:hidden px-2">Women</span>
              </Link>
            </li>
            <li>
              <Link to="/kids">
                <span>🧒</span>
                <span className="is-drawer-close:hidden px-2">Kids</span>
              </Link>
            </li>

            <li>
              <Link to="/electro">
                <span>📱</span>

                <span className="is-drawer-close:hidden px-2">Electronic</span>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <span>🛒</span>
                <span className="is-drawer-close:hidden px-2">Cart</span>
              </Link>
            </li>
            <li>
              <Link to="/favourite">
                <span>❤️</span>
                <span className="is-drawer-close:hidden px-2">Favourite</span>
              </Link>
            </li>
            <li>
              <button onClick={toggleTheme} className="toggle-theme text-[var(--heading-colr)]">
                {theme === "light" ? <FaMoon size={25} /> : <FaSun size={25} />}
                <span className="is-drawer-close:hidden pl-4">Theme</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
