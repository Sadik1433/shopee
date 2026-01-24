import { Link } from "react-router-dom";
import { RiSidebarFoldLine } from "react-icons/ri";
import { LiaAccusoft } from "react-icons/lia";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

const SideBar = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="drawer  drawer-open  z-10  w-10 h-screen fixed top-0 left-0 bottom-0 bg-[var(--navbar-bg-color) text-[var(--text-color) ]">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side border-r-1  is-drawer-close:overflow-hidden">
        <div className="backdrop-blur  is-drawer-close:w-12 is-drawer-open:w-40 flex flex-col items-start relative top-16 ">
          <h6 className="py-3 px-3  gap-2 font-bold text-lg">
            <LiaAccusoft size={28} />
          </h6>
          <ul className="menu font-bold text-lg w-full px-0 py-4.5">
            <li className="py-3">
              <Link to="/">
                <span className="pr-2">H</span>
                <span className="is-drawer-close:hidden">Home</span>
              </Link>
            </li>
            <li className="py-2">
              <Link to="/men">
                <span className="pr-2">M</span>
                <span className="is-drawer-close:hidden">Men</span>
              </Link>
            </li>
            <li className="py-2">
              <Link to="/women">
                <span className="pr-2">W</span>

                <span className="is-drawer-close:hidden">Women</span>
              </Link>
            </li>
            <li className="py-2">
              <Link to="/kids">
                <span className="pr-2">K</span>

                <span className="is-drawer-close:hidden">Home</span>
              </Link>
            </li>

            <li className="py-2">
              <Link to="/electro">
                <span className="pr-2">E</span>

                <span className="is-drawer-close:hidden">Electronic</span>
              </Link>
            </li>
            <li className="py-2">
              <Link to="/cart">
                <span className="pr-2">C</span>
                <span className="is-drawer-close:hidden">Cart</span>
              </Link>
            </li>
            <li className="py-2">
              <button onClick={toggleTheme} className="toggle-theme">
                {theme === "light" ? <FaMoon /> : <FaSun />}
                <span className="is-drawer-close:hidden">Theme</span>
              </button>
            </li>
          </ul>
          <div className="px-2 py-1 font-bold text-lg">
            <Link to="/profile">
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="avatar"
                className="w-8 h-8 rounded-full inline-block"
              />
            </Link>
          </div>
          <div
            className="is-drawer-close:tooltip is-drawer-close:tooltip-right py-4 px-1"
            data-tip="Open"
          >
            <label
              htmlFor="my-drawer-4"
              className="btn btn-primary btn-circle drawer-button is-drawer-open:rotate-y-180"
            >
              <RiSidebarFoldLine size={28} />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
