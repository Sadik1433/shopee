import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Item from "../component/Item.jsx";
import { IoArrowBack, IoHeartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Favourite = () => {
  const { watchlist, all_product } = useContext(ShopContext);
  const navigate = useNavigate();
  const favoriteProducts = all_product.filter((p) => watchlist.includes(p.id));

  return (
    <div className="relative top-16 bg-[var(--bg-color)] min-h-screen pb-16 w-full">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-6 pt-6">
        <div className="flex items-center gap-3 border-b border-[var(--border-color)] pb-3 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-xl text-[var(--text-color)] hover:bg-[var(--input-color)] transition-colors cursor-pointer"
            aria-label="Go back"
          >
            <IoArrowBack size={24} />
          </button>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--heading-color)]">
            Favourites Section
          </h2>
          <span className="text-xs sm:text-sm font-semibold text-[var(--text-secondary)] ml-auto">
            {favoriteProducts.length} {favoriteProducts.length === 1 ? "item" : "items"}
          </span>
        </div>

        {favoriteProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 py-2">
            {favoriteProducts.map((item, i) => (
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
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-[var(--text-secondary)] bg-[var(--card-color)] rounded-3xl border border-[var(--border-color)] p-8 max-w-md mx-auto mt-8">
            <IoHeartOutline size={64} className="mb-4 opacity-30 text-[var(--heading-color)]" />
            <h3 className="text-xl font-bold text-[var(--text-color)] mb-2">No Favourites Yet</h3>
            <p className="text-sm text-center text-[var(--text-secondary)] mb-6">
              You haven't added any products to your wishlist.
            </p>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-2.5 bg-[var(--btn-color)] text-white font-bold rounded-xl hover:opacity-90 transition-opacity active:scale-95 cursor-pointer text-sm"
            >
              Explore Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourite;
