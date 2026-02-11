import { useContext } from "react";
import { ShopContext } from "./context/ShopContext";
import Item from "./Item/Item";

const Favourite = () => {
    const { watchlist, all_product } = useContext(ShopContext);
    return (
        <div className="relative top-15 min-h-screen">
            {all_product.some(p => watchlist.includes(p.id)) && (
                <div className="mt-12 px-4">
                    <div className="text-center w-full">
                        <h2 className="text-2xl font-bold text-red-600 italic mb-6">Favourites Section</h2>
                    </div>
                    <div className="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 overflow-x-auto pb-4 scrollbar-hide">
                        {all_product
                            .filter(p => watchlist.includes(p.id))
                            .map((item, i) => (
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
            )}
        </div>
    );
};
export default Favourite;
