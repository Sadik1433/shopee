import FooterSection from "./FooterSection.jsx";
import Item from "./Item.jsx";  
import { useContext, useState } from "react";
import RelatedProducts from "./RelatedProducts.jsx";
import { ShopContext } from '../context/ShopContext.jsx';
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const ProductCategory = (props) => {
  const [sortBy, setSortBy] = useState("sort");
  const [search] = useState("");
  const { all_product } = useContext(ShopContext);
  const navigate = useNavigate();

  const filteredAndSortedProducts = all_product
    .filter((product) => {
      return (
        product.name.toLowerCase().includes(search.toLowerCase()) &&
        (props.category === "All" || product.category === props.category)
      );
    })
    .sort((a, b) => {
      if (sortBy === "az") {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "za") {
        return b.name.localeCompare(a.name);
      }
      if (sortBy === "low") {
        return a.price - b.price;
      }
      if (sortBy === "high") {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <div className="relative top-16 w-full pb-16 overflow-x-hidden scrollbar-hide">
      <div className="w-full">
        {/* Category Banner with Transparent Back Arrow and Filter Overlay */}
        <div className="px-2 sm:px-6 my-2 sm:my-4">
          <div className="relative overflow-hidden rounded-2xl shadow-md group">
            <img
              src={props.banner}
              alt="category banner"
              className="w-full h-44 sm:h-64 lg:h-70 object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            {/* Top gradient for visual contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />

            {/* Transparent Back Arrow Overlay on Banner */}
            <button
              onClick={() => navigate(-1)}
              className="absolute top-3 left-3 sm:top-5 sm:left-5 z-10 p-2 sm:p-2.5 rounded-full text-white bg-black/35 hover:bg-black/60 backdrop-blur-md border border-white/30 transition-all duration-200 hover:scale-110 active:scale-90 shadow-lg cursor-pointer flex items-center justify-center"
              title="Go back"
              aria-label="Go back"
            >
              <IoArrowBack size={24} className="drop-shadow-md" />
            </button>

            {/* Transparent Filter & Sort Dropdown Overlay on Banner */}
            <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-10">
              <select
                className="bg-black/35 hover:bg-black/60 text-white backdrop-blur-md border border-white/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold outline-none cursor-pointer shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
                onChange={(e) => setSortBy(e.target.value)}
                defaultValue=""
              >
                <option value="" className="text-black bg-white">Filter & Sort</option>
                <option value="az" className="text-black bg-white">Name: A → Z</option>
                <option value="za" className="text-black bg-white">Name: Z → A</option>
                <option value="low" className="text-black bg-white">Price: Low → High</option>
                <option value="high" className="text-black bg-white">Price: High → Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid: 2 cols on mobile, 3 on sm, 4 on md, 5 on lg */}
        <div className="gap-3 sm:gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 px-2 sm:px-6 py-4 transition-all duration-300">
          {filteredAndSortedProducts.map((item, i) => {
            if (item.category === props.category)
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  description={item.description}
                  price={item.price}
                  actual={item.actualPrice}
                  rating={item.rating}
                  badge={item.badge}
                />
              );
            return null;
          })}
        </div>

        <RelatedProducts heading="Offers" badge="Offers" category={props.category} />
        <RelatedProducts heading="Trending" badge="Trending" category={props.category} />
        <RelatedProducts heading="Best Seller" badge="Best Seller" category={props.category} />
        <FooterSection />
      </div>
    </div>
  );
};

export default ProductCategory;
