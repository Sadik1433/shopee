import { useContext, useState } from "react";
import { ShopContext } from "./context/ShopContext.jsx";
import { Link as ScrollLink } from "react-scroll";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const { all_product, activeUser, logout } = useContext(ShopContext);
  const filteredProducts = all_product.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase()),
  );

  const location = useLocation();

  const hideNavbarRoutes = ["/"];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="navbar fixed top-0 right-0 z-100 bg-[var(--navbar-bg-color)] backdrop-blur-md border-b border-[var(--border-color)] shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Shopee</a>
      </div>
      <div className="fixed top-4 left-1/3  w-60">
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 outline-none border border-[var(--border-color)] rounded-lg bg-[var(--input-color)] text-[var(--text-color)] focus:border-[var(--heading-color)] transition-colors"
        />
      </div>
      {search && (
        <div className="bg-[var(--card-color)] absolute top-14 left-1/3 text-[var(--text-color)] border border-[var(--border-color)] rounded-lg mt-2 max-h-60 overflow-y-auto w-60 shadow-xl z-50">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                onClick={() => setSearch("")}
              >
                <div
                  key={product.id}
                  className="p-3 hover:bg-[var(--input-color)] cursor-pointer transition-colors border-b border-[var(--border-color)] last:border-0"
                >
                  {product.name}
                </div>
              </Link>
            ))
          ) : (
            <div className="p-3 text-[var(--text-secondary)] italic">No products found.</div>
          )}
        </div>
      )}
      <div className="flex-1 cursor-pointer px-5">
        <ul className="flex justify-end gap-10 font-medium text-[var(--text-secondary)] py-2 items-center">
          {location.pathname === "/" && (
            <>
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
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
                offset={-70}
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
                offset={-70}
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
                offset={-70}
                duration={500}
                activeClass="!text-[var(--heading-color)] border-b-2 border-[var(--heading-color)]"
                className="cursor-pointer hover:text-[var(--heading-color)] transition-colors py-1"
              >
                <li>About</li>
              </ScrollLink>
            </>
          )}
          <li>
            {activeUser ? (
              <div className="flex items-center gap-12">
                <Link to="/profile">
                  <img
                    src={activeUser.profileImage}
                    alt="avatar"
                    className="w-11  rounded-full inline-block cursor-pointer hover:scale-110 transition-all"
                  />
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-[var(--btn-color)] text-white px-6 py-2 rounded-full font-bold hover:shadow-lg active:scale-95 transition-all ml-4">
                  Login
                </button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
