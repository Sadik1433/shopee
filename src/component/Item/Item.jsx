import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

const Item = (props) => {
  const { watchlist, toggleWatchlist } = useContext(ShopContext);
  const isWatchlisted = watchlist.includes(Number(props.id));

  return (
    <div className="bg-[var(--card-color) backdrop-blur border-1 shadow hover:shadow-xl transition p-1 min-w-[210px] max-w-[200px] rounded-md relative group">
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
        <div className="truncate py-2">
          <div className="font-bold text-md text-center text-blue-700">
            <span>{props.name}</span>
            <hr />
          </div>
          <div className="mt-1 flex justify-around items-center text-sm font-semibold">
            <span className="text-xl text-bold text-justify text-blue-900">
              ₹{props.price}
            </span>
            <span className="text-sm text-gray-400 line-through ">
              ₹{props.actual}
            </span>
            <span className="text-green-500 px-3">★ {props.rating}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
