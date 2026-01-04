const ProductDetails = ({ product }) => {

  if (!product) {
    return (
      <div className="h-screen  w-[500px]  flex items-center justify-center text-gray-500">
        Select a product to see details
      </div>
    );
  }

  return (
    <div className="w-[500px]  p-6 sticky top-15 h-fit">
      <h2 className="text-2xl font-bold mb-4">Product Details</h2>

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-100 object-cover rounded mb-4"
      />

      <div className="space-y-2">
        <p className="text-lg font-semibold">{product.name}</p>
        <p className="text-gray-700">
          <span className="font-medium">Price:</span> ₹{product.price}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Size:</span> {product.size || "M"}
        </p>
      </div>
    </div>
  );
};
export default ProductDetails;

