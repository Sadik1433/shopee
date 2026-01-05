import { useContext, useState } from "react";
import { ShopContext } from "./context/ShopContext.jsx";
import { Link } from "react-scroll";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const { all_product } = useContext(ShopContext);

  const filteredProducts = all_product.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="navbar fixed top-0 right-0 z-12 bg-blue-950">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Shopee</a>
        </div>
        <div className="flex-1">
        <ul className="flex justify-around" >
          <Link to="home" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
          <li>Home</li>
          </Link>
          <Link to="offer" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
          <li>Offers</li>
          </Link>
          <Link to="trending" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
          <li>Trending</li>
          </Link>
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
          <li>About</li>
          </Link>
        </ul>
      </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search by name or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {search && (
          <div className="transparent absolute top-14 left-200  border mt-2 max-h-60 overflow-y-auto w-64">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                >
                  {product.name} - ${product.price}
                </div>
              ))
            ) : (
              <div className="p-2 text-blue-900">No products found.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
