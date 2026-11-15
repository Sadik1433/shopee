import { Link } from "react-router-dom";
import { useContext, memo } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

const Item = memo((props) => {
  const { watchlist, toggleWatchlist } = useContext(ShopContext);
  const isWatchlisted = watchlist.includes(Number(props.id));

  return (
    <div
      className={`bg-[var(--card-color)] border border-[var(--border-color)] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out p-2 rounded-xl relative group ${
        props.className || "w-full min-w-0 max-w-[240px] mx-auto"
      }`}
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleWatchlist(props.id);
        }}
        className="absolute top-2 right-2 z-10 p-1.5 bg-white/85 dark:bg-slate-800/85 backdrop-blur-md rounded-full shadow-sm hover:scale-115 active:scale-90 transition-all duration-200 text-gray-600 dark:text-gray-200 cursor-pointer"
        aria-label="Add to wishlist"
      >
        {isWatchlisted ? (
          <IoHeart className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 transition-transform duration-200" />
        ) : (
          <IoHeartOutline className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200" />
        )}
      </button>
      <Link to={`/product/${props.id}`}>
        <div className="relative overflow-hidden rounded-md">
          <img
            src={props.image}
            alt={props.name}
            className="w-full h-44 sm:h-56 lg:h-60 object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </div>
        <div className="py-2.5 sm:py-4 px-1 sm:px-2">
          <div className="font-bold text-sm sm:text-base text-[var(--text-color)] group-hover:text-[var(--heading-color)] transition-colors duration-200 line-clamp-1 mb-1 sm:mb-2">
            {props.name}
          </div>
          <div className="flex justify-between items-center gap-1">
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-lg font-bold text-[var(--text-color)] truncate">
                ₹{props.price}
              </span>
              <span className="text-[10px] sm:text-xs text-[var(--text-secondary)] line-through truncate">
                ₹{props.actual}
              </span>
            </div>
            <div className="bg-[var(--input-color)] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg text-[var(--heading-color)] text-xs sm:text-sm font-bold flex items-center gap-1 shrink-0">
              <span>★</span> {props.rating}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
});

export default Item;
