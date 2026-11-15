import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import { Link as ScrollLink } from "react-scroll";
import { useLocation, Link } from "react-router-dom";
import { SiShopee } from "react-icons/si";
import { FaSun, FaMoon } from "react-icons/fa";
import { IoSearchOutline, IoClose } from "react-icons/io5";
import { TfiMenu } from "react-icons/tfi";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const { all_product, activeUser, toggleMobileSidebar } = useContext(ShopContext);

  const filteredProducts = search.trim()
    ? all_product.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const location = useLocation();
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="navbar max-h-[80px] fixed top-0 left-0 right-0 z-40 bg-[var(--navbar-bg-color)] backdrop-blur-md border-b border-[var(--border-color)] shadow-sm px-3 sm:px-6">
      {/* ── Left: Mobile Menu Button + Brand Logo ── */}
      <div className="flex-1 flex items-center">
        <button
          onClick={toggleMobileSidebar}
          className="lg:hidden p-2 mr-2 text-[var(--text-color)] hover:bg-[var(--input-color)] rounded-xl transition-colors cursor-pointer"
          aria-label="Open navigation menu"
        >
          <TfiMenu size={22} />
        </button>

        <Link to="/" className="flex items-center gap-2">
          <SiShopee className="text-3xl text-[var(--heading-color)]" />
          <span className="text-xl font-bold font-serif text-[var(--text-color)] tracking-tight">
            Shopee
          </span>
        </Link>
      </div>

      {/* ── Desktop Search Bar (Exact layout preserved for lg+ screens) ── */}
      <div className="hidden lg:block fixed top-4 left-64 w-96 xl:w-100 z-50">
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 outline-none border border-[var(--border-color)] rounded-lg bg-[var(--input-color)] text-[var(--text-color)] focus:border-[var(--heading-color)] transition-colors"
        />
        {search && (
          <div className="bg-[var(--card-color)] absolute top-full left-0 right-0 text-[var(--text-color)] border border-[var(--border-color)] rounded-lg mt-2 max-h-60 overflow-y-auto shadow-xl z-50">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  onClick={() => setSearch("")}
                >
                  <div className="p-3 hover:bg-[var(--input-color)] cursor-pointer transition-colors border-b border-[var(--border-color)] last:border-0 text-sm">
                    {product.name}
                  </div>
                </Link>
              ))
            ) : (
              <div className="p-3 text-[var(--text-secondary)] italic text-sm">
                No products found.
              </div>
            )}
          </div>
        )}
      </div>

      {/* ── Tablet Search Bar (md screens) ── */}
      <div className="hidden md:flex lg:hidden flex-1 max-w-xs mx-4 relative">
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-1.5 text-sm outline-none border border-[var(--border-color)] rounded-lg bg-[var(--input-color)] text-[var(--text-color)] focus:border-[var(--heading-color)] transition-colors"
        />
        {search && (
          <div className="bg-[var(--card-color)] absolute top-full left-0 right-0 text-[var(--text-color)] border border-[var(--border-color)] rounded-lg mt-2 max-h-60 overflow-y-auto shadow-xl z-50">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  onClick={() => setSearch("")}
                >
                  <div className="p-3 hover:bg-[var(--input-color)] cursor-pointer transition-colors border-b border-[var(--border-color)] last:border-0 text-sm">
                    {product.name}
                  </div>
                </Link>
              ))
            ) : (
              <div className="p-3 text-[var(--text-secondary)] italic text-sm">
                No products found.
              </div>
            )}
          </div>
        )}
      </div>

      {/* ── Right Navigation & Actions ── */}
      <div className="flex items-center justify-end gap-2 sm:gap-4">
        {/* Mobile Search Toggle Button */}
        <button
          onClick={() => setIsMobileSearchOpen((prev) => !prev)}
          className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-color)] rounded-xl transition-colors cursor-pointer"
          aria-label="Toggle mobile search"
        >
          {isMobileSearchOpen ? <IoClose size={22} /> : <IoSearchOutline size={22} />}
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex justify-end gap-8 xl:gap-12 font-medium text-[var(--text-secondary)] py-2 items-center">
          {location.pathname === "/" && (
            <>
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                offset={-65}
                duration={500}
                activeClass="!text-[var(--heading-color)] border-b-2 border-[var(--heading-color)]"
                className="cursor-pointer hover:text-[var(--heading-color)] transition-colors py-1"
              >
                <li>Home</li>
              </ScrollLink>
              <ScrollLink
                to="offer"
                spy={true}
                smooth={true}
                offset={-65}
                duration={500}
                activeClass="!text-[var(--heading-color)] border-b-2 border-[var(--heading-color)]"
                className="cursor-pointer hover:text-[var(--heading-color)] transition-colors py-1"
              >
                <li>Offers</li>
              </ScrollLink>
              <ScrollLink
                to="trending"
                spy={true}
                smooth={true}
                offset={-65}
                duration={500}
                activeClass="!text-[var(--heading-color)] border-b-2 border-[var(--heading-color)]"
                className="cursor-pointer hover:text-[var(--heading-color)] transition-colors py-1"
              >
                <li>Trending</li>
              </ScrollLink>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-65}
                duration={500}
                activeClass="!text-[var(--heading-color)] border-b-2 border-[var(--heading-color)]"
                className="cursor-pointer hover:text-[var(--heading-color)] transition-colors py-1"
              >
                <li>About</li>
              </ScrollLink>
            </>
          )}
        </ul>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-color)] rounded-xl transition-colors cursor-pointer"
          aria-label="Toggle dark/light theme"
        >
          {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>

        {/* User Profile or Login */}
        {activeUser ? (
          <Link to="/profile" className="shrink-0">
            <img
              src={activeUser.profileImage || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"}
              alt="avatar"
              loading="lazy"
              className="w-9 h-9 sm:w-11 sm:h-11 object-cover rounded-full cursor-pointer hover:scale-105 transition-all border border-[var(--border-color)]"
            />
          </Link>
        ) : (
          <Link to="/login">
            <button className="cursor-pointer px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base rounded-full font-bold bg-[var(--btn-color)] text-white hover:shadow-lg active:scale-95 transition-all">
              Login
            </button>
          </Link>
        )}
      </div>

      {/* ── Expandable Mobile Search Row (< md screens) ── */}
      {isMobileSearchOpen && (
        <div className="absolute top-[65px] left-0 right-0 bg-[var(--navbar-bg-color)] border-b border-[var(--border-color)] p-3 md:hidden shadow-lg backdrop-blur-md">
          <input
            type="text"
            placeholder="Search products..."
            autoFocus
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 text-sm outline-none border border-[var(--border-color)] rounded-xl bg-[var(--input-color)] text-[var(--text-color)] focus:border-[var(--heading-color)] transition-colors"
          />
          {search && (
            <div className="bg-[var(--card-color)] text-[var(--text-color)] border border-[var(--border-color)] rounded-xl mt-2 max-h-56 overflow-y-auto shadow-xl">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    onClick={() => {
                      setSearch("");
                      setIsMobileSearchOpen(false);
                    }}
                  >
                    <div className="p-3 hover:bg-[var(--input-color)] cursor-pointer transition-colors border-b border-[var(--border-color)] last:border-0 text-sm">
                      {product.name}
                    </div>
                  </Link>
                ))
              ) : (
                <div className="p-3 text-[var(--text-secondary)] italic text-sm">
                  No products found.
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
