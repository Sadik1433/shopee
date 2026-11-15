import { Link } from "react-router-dom";

const ProductDetails = ({ product, cartItems }) => {
  const isCartEmpty = Object.values(cartItems).every(quantity => quantity === 0);

  if (isCartEmpty) {
    return (
      <div className="py-20 w-full max-w-[500px] mx-auto flex items-center justify-center text-[var(--heading-color)] font-bold text-lg sm:text-xl text-center px-4">
        Your cart is empty.
      </div>
    );
  }

  if (!product || typeof product === 'string') {
    return (
      <div className="py-20 w-full max-w-[500px] mx-auto flex items-center justify-center text-[var(--heading-color)] font-medium text-base sm:text-lg text-center px-4">
        Select a product from your cart to see details.
      </div>
    );
  }

  return (
    <div className="w-full max-w-[600px] relative top-4 sm:top-8 bg-[var(--card-color)] border border-[var(--border-color)] rounded-3xl shadow-xl overflow-hidden mx-auto mb-8">
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4 sm:mb-6 border-b border-[var(--border-color)] pb-3 sm:pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--heading-color)]">Product Preview</h2>
          <span className="px-3 py-1 bg-[var(--heading-color)]/10 text-[var(--heading-color)] text-xs font-bold tracking-wider rounded-full">
            In Cart
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
          <div className="shrink-0 w-full sm:w-auto flex justify-center">
            <div className="relative group">
              <img
                src={product.image}
                alt={product.name}
                className="w-48 sm:w-44 h-56 sm:h-72 object-cover rounded-2xl border border-[var(--border-color)] shadow-sm"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 flex-1 w-full">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-color)] leading-tight mb-1">
                {product.name}
              </h3>
              <p className="text-[var(--text-secondary)] text-xs sm:text-sm italic">
                Category: <span className="text-[var(--text-color)] font-medium">{product.category || "General"}</span>
              </p>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-black text-[var(--heading-color)]">
                ₹{product.price}
              </span>
              {product.actualPrice && (
                <span className="text-xs sm:text-sm text-[var(--text-secondary)] line-through">
                  ₹{product.actualPrice}
                </span>
              )}
            </div>

            {product.sizes && product.sizes.length > 0 && (
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-xs sm:text-sm font-bold text-[var(--text-secondary)] uppercase">
                  {product.category === "electronics" ? "Specification:" : "Size:"}
                </span>
                <span className="px-3 py-1 bg-[var(--input-color)] border border-[var(--border-color)] text-[var(--text-color)] font-bold rounded-lg text-xs sm:text-sm">
                  {product.sizes[0]}
                </span>
              </div>
            )}

            <div className="space-y-1">
              <span className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-tight">Description</span>
              <p className="text-xs sm:text-sm text-[var(--text-color)] leading-relaxed line-clamp-3">
                {product.description || "No description available for this premium item."}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 flex items-center justify-center py-3 sm:py-3.5 bg-[var(--btn-color)] text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-[var(--btn-color)]/20 active:scale-98 transition-all text-sm sm:text-base"
          >
            Go to Product Page
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
