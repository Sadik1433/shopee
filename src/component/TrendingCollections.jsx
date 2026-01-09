import { useContext } from "react";
import { ShopContext } from "./context/ShopContext.jsx";
import Item from "./Item/Item.jsx";

const TrendingCollection = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="mr-10">
      <div className="container">
        <div className="bg-[#87A2FF]">
          <h1 className="text-4xl ml-9 font-bold p-4 text-white ">{props.badge} Collections</h1>
        </div>
        <ul className="flex gap-4 overflow-x-auto  px-4 py-8 scrollbar-hide">
          {all_product.map((item, i) => {
            if (item.badge === props.badge && item.category === props.category)
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
        </ul>
      </div>
    </div>
  );
};

export default TrendingCollection;
