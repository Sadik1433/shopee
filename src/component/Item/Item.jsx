import { Link } from "react-router-dom";
import { useContext, memo } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

const Item = memo((props) => {
  const { watchlist, toggleWatchlist } = useContext(ShopContext);
  const isWatchlisted = watchlist.includes(Number(props.id));

  return (
    <div className="bg-[var(--card-color)] border border-[var(--border-color)] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-2 min-w-[220px] max-w-[220px] rounded-xl relative group">
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleWatchlist(props.id);
        }}
        className="absolute top-2 right-2 z-10 p-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:scale-110 transition-transform text-gray-600"
      >
        {isWatchlisted ? (
          <IoHeart className="w-5 h-5 text-red-500" />
        ) : (
          <IoHeartOutline className="w-5 h-5" />
        )}
      </button>
      <Link to={`/product/${props.id}`}>
        <div className="relative">
          <img
            src={props.image}
            alt={props.name}
            className="w-full h-60 object-cover rounded-md"
          />
        </div>
        <div className="py-4 px-2">
          <div className="font-bold text-base text-[var(--text-color)] group-hover:text-[var(--heading-color)] transition-colors line-clamp-1 mb-2">
            {props.name}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[var(--text-color)]">
                ₹{props.price}
              </span>
              <span className="text-xs text-[var(--text-secondary)] line-through">
                ₹{props.actual}
              </span>
            </div>
            <div className="bg-[var(--input-color)] px-2 py-1 rounded-lg text-[var(--heading-color)] text-sm font-bold flex items-center gap-1">
              <span>★</span> {props.rating}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
});

export default Item;
