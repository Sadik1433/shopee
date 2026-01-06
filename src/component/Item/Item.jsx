import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="bg-blue-200 border-1 shadow hover:shadow-xl transition p-1 min-w-[210px] max-w-[200px] rounded-md ">
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
