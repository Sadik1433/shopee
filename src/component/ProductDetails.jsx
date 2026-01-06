import { Link } from "react-router-dom";

const ProductDetails = ({ product, cartItems }) => {
  if (!product || cartItems.length === 0 ) {
    return (
      <div className="h-screen w-[500px]  flex items-center justify-center text-gray-500">
        Select a product to see details
      </div>
    );
  }

  return (
    <div className="sm: opacity-0 w-[600px] h-fit  relative top-16  border-1 rounded shadow lg:opacity-100 ">
      <h2 className="text-2xl font-bold mb-4 border-b-1 bg-blue-900 p-2 ">Product Details</h2>
      <div className="flex gap-3 p-2">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="max-w-[300px] max-h-[300px] object-center rounded border-1"
          />
        </div>
        <div className="space-y-2 ">
          <p className="text-lg text-blue-400 font-bold">{product.name}</p>
          <p className="text-red-500">
            <span className="font-medium">Price : </span> ₹{product.price}
          </p>
          <p className="text-blue-800">
            <span className="font-medium">Size : </span> {product.size || "M"}
          </p>
          <div>
            <h6 className="text-red-400">Description : </h6>
            <p className="text-blue-400">{product.description}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 p-2 text-center">
        <Link
          to={`/product/${product.id}`}
          className="text-blue-500 hover:underline"
        >
          <span>More Details</span>
        </Link>
      </div>
    </div>
  );
};
export default ProductDetails;
