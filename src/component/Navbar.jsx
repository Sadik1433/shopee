import { useContext, useState } from "react";
import { ShopContext } from "./context/ShopContext.jsx";
import { Link as ScrollLink} from "react-scroll";
import { useLocation, Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
const Navbar = () => {
  const [search, setSearch] = useState("");
  const { all_product } = useContext(ShopContext);

  // seach filter product

  const filteredProducts = all_product.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
  );

  // hide navbar on specific routes
  const location = useLocation();

  const hideNavbarRoutes = ["/"];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div>
      <div className="navbar fixed top-0 right-0 z-12 bg-blue-950">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Shopee</a>
        </div>
        <div className="fixed top-4 left-1/2  w-52">
          <input
            type="text"
            placeholder="Search ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 outline-none border-b-1 border-white text-white"
          />
        </div>
        {/* search input display box */}
        {search && (
          <div className="bg-white absolute top-14 left-158 text-blue-900 border mt-2 max-h-60 overflow-y-auto w-60">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  onClick={() => setSearch("")}
                >
                  <div
                    key={product.id}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {product.name}
                  </div>
                </Link>
              ))
            ) : (
              <div className="p-2 text-blue-900">No products found.</div>
            )}
          </div>
        )}
        {/* hide navbar on specific routes  */}
        {shouldHideNavbar && (
          <div className="flex-1 cursor-pointer">
            <ul className="flex justify-end gap-18">
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
              >
                <li>Home</li>
              </ScrollLink>
              <ScrollLink
                to="offer"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
              >
                <li>Offers</li>
              </ScrollLink>
              <ScrollLink
                to="trending"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
              >
                <li>Trending</li>
              </ScrollLink>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
              >
                <li>About</li>
              </ScrollLink>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
