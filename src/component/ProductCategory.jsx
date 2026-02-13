import FooterSection from "./FooterSection.jsx";
import Item from "./Item.jsx";  
import { useContext, useState } from "react";
import RelatedProducts from "./RelatedProducts.jsx"
import { ShopContext } from '../context/ShopContext.jsx'
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const ProductCategory = (props) => {
  const [sortBy, setSortBy] = useState("sort");
  const [search, setSearch] = useState("");
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
    <div className="relative top-18 left-1">
      <div className="max-w-[1230px]">
        <div className="relative sticky top-18 z-10 flex">
          <div className="absolute left-0 top-1">
            <button
              onClick={() => navigate(-1)}
              className="p-3"
            >
              <IoArrowBack size={30} />
            </button>
          </div>
          <div className="absolute right-12 top-4 text-1xl font-bold">
            <select
              className="border border-white bg-transparent px-4 py-2 rounded"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="" className="text-black">Filter</option>
              <option value="az" className="text-black">Name: A → Z</option>
              <option value="za" className="text-black">Name: Z → A</option>
              <option value="low" className="text-black">Price: Low → High</option>
              <option value="high" className="text-black">Price: High → Low</option>
            </select>
          </div>
        </div>
        <div>
          <img
            src={props.banner}
            alt="banner Image"
            className="size-full object-cover"
          />
        </div>
        <div className="gap-y-5 grid grid-cols-5 gap2  py-3 px-3">
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
