import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { MdShoppingBag } from "react-icons/md";

export default function CartList({
  onSelect,
  all_product,
  cartItems,
  removeFromCart,
  addToCart,
  clearFromCart,
  getTotalCartAmount,
}) {
  const navigate = useNavigate();

  const hasItems = Object.values(cartItems).some((q) => q > 0);
  const totalAmount = getTotalCartAmount();

  return (
    <div className="w-full max-w-[500px] relative top-4 sm:top-8 py-2 mx-auto">
      {/* Header */}
      <div className="text-[var(--heading-color)] sticky top-20 z-10 p-3 sm:p-4 bg-[var(--bg-color)]/95 backdrop-blur-md border border-[var(--border-color)] rounded-2xl flex justify-between items-center mb-4 shadow-xs">
        <button
          onClick={() => navigate("/")}
          className="p-1.5 rounded-xl text-[var(--text-color)] hover:bg-[var(--input-color)] transition-colors cursor-pointer"
          aria-label="Go home"
        >
          <IoArrowBack size={24} />
        </button>
        <h1 className="text-lg sm:text-xl font-bold">Cart Items</h1>
        <span className="text-sm sm:text-base font-bold text-[var(--heading-color)]">₹{totalAmount}</span>
      </div>

      <div className="flow-root">
        <ul role="list" className="h-full py-1">
          {hasItems ? (
            <>
              {all_product.map((product) => {
                if (cartItems[product.id] > 0) {
                  return (
                    <li
                      key={product.id}
                      onClick={() => onSelect(product)}
                      className="flex items-center gap-3 my-2.5 p-3 w-full border border-[var(--border-color)] rounded-2xl bg-[var(--card-color)] cursor-pointer hover:bg-[var(--input-color)] transition-colors shadow-xs"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 overflow-hidden rounded-xl border border-[var(--border-color)]">
                        <img
                          alt={product.name}
                          src={product.image}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      <div className="flex flex-1 flex-col min-w-0">
                        <div className="flex justify-between items-start text-sm sm:text-base font-medium text-[var(--text-color)] gap-2">
                          <h3 className="truncate font-semibold">{product.name}</h3>
                          <p className="font-bold text-[var(--heading-color)] shrink-0">₹{product.price}</p>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-2 mt-2 sm:mt-3 text-xs sm:text-sm">
                          <div className="flex items-center bg-[var(--input-color)] rounded-xl px-2 py-0.5 border border-[var(--border-color)]">
                            <button
                              onClick={(e) => { e.stopPropagation(); removeFromCart(product.id); }}
                              className="w-6 h-6 flex items-center justify-center font-bold text-lg text-[var(--text-color)] hover:text-red-500 cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span className="px-2 text-[var(--text-color)] font-bold min-w-[20px] text-center">
                              {cartItems[product.id]}
                            </span>
                            <button
                              onClick={(e) => { e.stopPropagation(); addToCart(product.id); }}
                              className="w-6 h-6 flex items-center justify-center font-bold text-base text-[var(--text-color)] hover:text-green-500 cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>

                          <p className="font-bold text-[var(--text-secondary)]">
                            ₹{product.price * cartItems[product.id]}
                          </p>

                          <button
                            onClick={(e) => { e.stopPropagation(); clearFromCart(product.id); }}
                            type="button"
                            className="px-2.5 py-1 text-xs bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-lg font-semibold transition-colors cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                }
                return null;
              })}

              {/* Action Buttons */}
              <div className="mt-4 flex flex-col gap-2">
                <button
                  onClick={() => navigate("/orders")}
                  className="w-full py-3 border border-[var(--border-color)] bg-[var(--card-color)] text-[var(--text-color)] font-semibold rounded-2xl hover:bg-[var(--input-color)] transition-colors cursor-pointer"
                >
                  View My Orders
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-[var(--text-secondary)] bg-[var(--card-color)] rounded-3xl border border-[var(--border-color)] p-6">
              <MdShoppingBag size={56} className="mb-4 opacity-30 text-[var(--heading-color)]" />
              <p className="text-lg sm:text-xl font-medium text-[var(--text-color)]">Your cart is currently empty</p>
              <button
                onClick={() => navigate("/")}
                className="mt-4 px-6 py-2.5 bg-[var(--heading-color)] text-white rounded-full font-bold hover:opacity-90 transition-opacity cursor-pointer text-sm"
              >
                Go Shopping
              </button>
              <button
                onClick={() => navigate("/orders")}
                className="mt-2 px-6 py-2 border border-[var(--border-color)] text-[var(--text-color)] rounded-full font-semibold hover:bg-[var(--input-color)] transition-colors cursor-pointer text-sm"
              >
                View My Orders
              </button>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}
