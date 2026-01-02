import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="bg-transparent border-1 shadow hover:shadow-xl transition p-1 flex flex-col justify-between w-55 ">
      <Link to={`/product/${props.id}`}>
        <div className="relative">
          <img
            src={props.image}
            alt={props.name}
            className="w-full h-60 object-cover rounded-md"
          />
        </div>
        <div className="mt-px">
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
          <div className="flex text-gray-500 text-center mt-1">
            <span>{props.description}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
