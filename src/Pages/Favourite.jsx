import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Item from "../component/Item.jsx";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Favourite = () => {
    const { watchlist, all_product } = useContext(ShopContext);
    const navigate = useNavigate();
    return (
        <div className="relative top-15 bg-[var(--bg-color)] min-h-screen">
            {all_product.some(p => watchlist.includes(p.id)) && (
                <div className="mt-12 px-4">
                    <div className="text-center w-full flex  gap-2 border-b-2 border-gray-200">
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center mb-2"
                        >
                            <IoArrowBack size={25} />
                        </button>
                        <h2 className="text-2xl font-bold text-[var(--heading-color)] ml-4 mb-2">Favourites Section</h2>
                    </div>
                    <div className="grid grid-cols-5 gap-4 overflow-x-auto p-3 scrollbar-hide">
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
