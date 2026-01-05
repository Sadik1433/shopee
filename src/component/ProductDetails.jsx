import { Link } from "react-router-dom";

const ProductDetails = ({ product }) => {
  if (!product) {
    return (
      <div className="h-screen  w-[500px]  flex items-center justify-center text-gray-500">
        Select a product to see details
      </div>
    );
  }

  return (
    <div className="sm: opacity-0 w-[600px] h-fit  relative top-16 p-2  border-1 rounded shadow lg:opacity-100 ">
      <h2 className="text-2xl font-bold mb-4 border-b-1 ">Product Details</h2>
      <div className="flex gap-3">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="max-w-[200px]  object-contain rounded border-1"
          />
        </div>
        <div className="space-y-2">
          <p className="text-lg font-semibold">{product.name}</p>
          <p className="text-gray-700">
            <span className="font-medium">Price:</span> ₹{product.price}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Size:</span> {product.size || "M"}
          </p>
          <div>
            <h6>Description</h6>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
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
