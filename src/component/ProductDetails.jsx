import { Link } from "react-router-dom";

const ProductDetails = ({ product, cartItems }) => {
  const isCartEmpty = Object.values(cartItems).every(quantity => quantity === 0);

  if (isCartEmpty) {
    return (
      <div className="h-screen w-[500px] flex items-center justify-center text-[var(--heading-color)] font-bold text-xl">
        Your cart is empty.
      </div>
    );
  }

  if (!product || typeof product === 'string') {
    return (
      <div className="h-screen w-[500px] flex items-center justify-center text-[var(--heading-color)]">
        Select a product from your cart to see details.
      </div>
    );
  }

  return (
    <div className="w-[600px] relative top-18 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-2xl  shadow-2xl backdrop-blur-sm overflow-hidden z-50">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6 border-b border-[var(--border-color)] pb-4">
          <h2 className="text-2xl font-bold text-[var(--heading-color)]">Product Preview</h2>
          <span className="px-3 py-1 bg-[var(--heading-color)]/10 text-[var(--heading-color)] text-xs font-bold tracking-wider">
            In Cart
          </span>
        </div>

        <div className="flex gap-6">
          <div className="shrink-0">
            <div className="relative group">
              <img
                src={product.image}
                alt={product.name}
                className="h-[320px] object-center rounded-2xl border border-[var(--border-color)] shadow-sm"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 flex-1">
            <div>
              <h3 className="text-xl font-bold text-[var(--text-color)] leading-tight mb-1">
                {product.name}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm italic">
                Category: <span className="text-[var(--text-color)] font-medium">{product.category || "General"}</span>
              </p>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-[var(--heading-color)]">
                ₹{product.price}
              </span>
              {product.actualPrice && (
                <span className="text-sm text-[var(--text-secondary)] line-through">
                  ₹{product.actualPrice}
                </span>
              )}
            </div>

            {product.sizes && product.sizes.length > 0 && (
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-[var(--text-secondary)] uppercase">
                  {product.category === "electronics" ? "Specification:" : "Size:"}
                </span>
                <span className="px-3 py-1 bg-[var(--input-color)] border border-[var(--border-color)] text-[var(--text-color)] font-bold rounded-lg text-sm">
                  {product.sizes[0]}
                </span>
              </div>
            )}

            <div className="space-y-1">
              <span className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-tighter">Description</span>
              <p className="text-sm text-[var(--text-color)] leading-relaxed line-clamp-3">
                {product.description || "No description available for this premium item."}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 flex items-center justify-center py-4 bg-[var(--btn-color)] text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-[var(--btn-color)]/20 active:scale-[0.98] transition-all"
          >
            Go to Product Page
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
