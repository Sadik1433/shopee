import { useContext } from "react";
import { ShopContext } from "./context/ShopContext";
import Item from "./Item/Item";

export default function RelatedProducts({ badge, category, heading }) {
  const { all_product } = useContext(ShopContext);
  const filteredProducts = all_product.filter(
    (item) => item.badge === badge && item.category === category
  );
  return (
    <div className="max-w-7xl mx-auto mt-16 px-4">
      <h2 className="text-2xl font-semibold text-[var(--heading-color)] mb-6">{heading} Section </h2>

      <div className="flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide pb-4 ">
        {filteredProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
            actual={item.actualPrice}
            rating={item.rating}
            badge={item.badge} />
        ))}
      </div>
    </div>
  );
}
