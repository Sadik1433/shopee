import { useContext, useMemo } from "react";
import { ShopContext } from "./context/ShopContext";
import Item from "./Item/Item";

export default function RelatedProducts({ badge, category, heading }) {
  const { all_product } = useContext(ShopContext);

  const displayProducts = useMemo(() => {
    if (badge && category) {
      return all_product.filter(
        (item) => item.badge === badge && item.category === category
      );
    } else {
      return [...all_product]
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);
    }
  }, [all_product, badge, category]);

  return (
    <div className="max-w-[1200px] mt-24 px-4 overflow-hidden">
      <div className="border-b-1 border-gray-200 py-2 px-2">
        <h2 className="text-4xl font-bold text-[var(--heading-color)] flex items-center gap-3">
          {heading || "Discover Related Products"}
        </h2>
      </div>

      <div className="flex gap-8 overflow-x-auto overflow-y-hidden scrollbar-hide pb-8 px-2 py-3">
        {displayProducts.map((item, i) => (
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
        ))}
      </div>
    </div>
  );
}
