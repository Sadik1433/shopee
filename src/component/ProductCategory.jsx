import FooterSection from "./FooterSection.jsx";
import Item from "./Item/Item.jsx";
import { useContext, useState } from "react";
import { ShopContext } from './context/ShopContext.jsx'

const ProductCategory = (props) => {
  const [sortBy, setSortBy] = useState("sort");
  const [search, setSearch] = useState("");
  const {all_product} = useContext(ShopContext);

  const filteredAndSortedProducts = all_product
  .filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (props.category === "All" || product.category === props.category)
    );
  })
  .sort((a, b) => {
    if (sortBy === "az") {
      return a.name.localeCompare(b.name); // A → Z
    }
    if (sortBy === "za") {
      return b.name.localeCompare(a.name); // Z → A
    }
    if (sortBy === "low") {
      return a.price - b.price; // Low → High
    }
    if (sortBy === "high") {
      return b.price - a.price; // High → Low
    }
    return 0;
  });


  return (
    <div className="bg-sky-100 relative top-15 right-5 bottom-0 max-w-1xl lg:max-w-7xl pr-2 ">
      <div className="relative w-full bg-red-300 sticky top-16 z-10 flex items-center">
        <div className="absolute right-10 top-3 text-1xl font-bold">
          <select
            className="border px-4 py-2 rounded text-black"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Filter</option>
            <option value="az">Name: A → Z</option>
            <option value="za">Name: Z → A</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
          </select>
        </div>
      </div>
      <div className="p-1">
        <img
          src={props.banner}
          alt="banner Image"
          className="size-full object-cover"
        />
      </div>
      <div className="mt-2 pl-10 grid  gap-y-5 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-0 ">
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
      <FooterSection />
    </div>
  );
};

export default ProductCategory;
