import { useContext, useState } from "react";
import { ShopContext } from "./context/ShopContext.jsx";
import { Link as ScrollLink} from "react-scroll";
import { useLocation, Link } from "react-router-dom";

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
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* search input display box */}
        {search && (
          <div className="bg-white absolute top-14 left-130 text-blue-900 border mt-2 max-h-60 overflow-y-auto w-84">
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
          <div className="flex-1">
            <ul className="flex justify-around">
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
