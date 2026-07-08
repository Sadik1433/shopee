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
    <div className="flex bg-[var(--bg-color)]">
      <div className="w-[500px] relative top-8 py-2 m-4">
        {/* Header */}
        <div className="text-[var(--heading-color)] sticky top-20 p-3 bg-[var(--bg-color)] backdrop-blur border border-[var(--border-color)] rounded-2xl flex justify-between items-center mb-2">
          <button onClick={() => navigate("/")}>
            <IoArrowBack size={25} />
          </button>
          <h1 className="text-xl font-bold">Cart Items</h1>
          <span className="text-sm font-semibold">₹{totalAmount}</span>
        </div>

        <div className="flow-root">
          <ul role="list" className="h-full py-2 overflow-y-auto scroll-hide">
            {hasItems ? (
              <>
                {all_product.map((product) => {
                  if (cartItems[product.id] > 0) {
                    return (
                      <li
                        key={product.id}
                        onClick={() => onSelect(product)}
                        className="flex m-2 py-2 px-2 min-w-120 border border-[var(--border-color)] rounded-xl cursor-pointer hover:bg-[var(--input-color)] transition-colors"
                      >
                        <div className="size-18 shrink-0 overflow-hidden rounded-xl border border-gray-200">
                          <img
                            alt={product.name}
                            src={product.image}
                            className="size-full object-cover"
                            loading="lazy"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-[var(--text-color)]">
                              <h3>{product.name}</h3>
                              <p className="ml-4">₹{product.price}</p>
                            </div>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="flex items-center gap-2 px-2">
                              <button
                                onClick={(e) => { e.stopPropagation(); removeFromCart(product.id); }}
                                className="btn btn-xs h-8 bg-transparent border-none flex font-bold text-2xl hover:bg-red-500 hover:text-white"
                              >
                                -
                              </button>
                              <span className="px-2 text-[var(--text-color)] font-bold min-w-[20px] text-center">
                                {cartItems[product.id]}
                              </span>
                              <button
                                onClick={(e) => { e.stopPropagation(); addToCart(product.id); }}
                                className="btn btn-xs h-8 bg-transparent border-none flex font-bold text-lg hover:bg-green-500 hover:text-white"
                              >
                                +
                              </button>
                            </div>
                            <p className="mt-1 text-sm text-gray-500 font-bold">
                              Total: ₹{product.price * cartItems[product.id]}
                            </p>
                            <div className="flex">
                              <button
                                onClick={(e) => { e.stopPropagation(); clearFromCart(product.id); }}
                                type="button"
                                className="btn btn-sm bg-red-600 border-none hover:bg-red-700 text-white rounded-xl"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  }
                  return null;
                })}

                {/* Action Buttons */}
                <div className="m-2 mt-4 flex flex-col gap-2">
                  <button
                    onClick={() => navigate("/orders")}
                    className="w-full py-3 border border-[var(--border-color)] text-[var(--text-color)] font-semibold rounded-2xl hover:bg-[var(--input-color)] transition-colors"
                  >
                    View My Orders
                  </button>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-[var(--text-secondary)]">
                <MdShoppingBag size={60} className="mb-4 opacity-30" />
                <p className="text-xl font-medium">Your cart is currently empty</p>
                <button
                  onClick={() => navigate("/")}
                  className="mt-4 px-6 py-2 bg-[var(--heading-color)] text-white rounded-full font-bold hover:opacity-90 transition-opacity"
                >
                  Go Shopping
                </button>
                <button
                  onClick={() => navigate("/orders")}
                  className="mt-2 px-6 py-2 border border-[var(--border-color)] text-[var(--text-color)] rounded-full font-semibold hover:bg-[var(--input-color)] transition-colors"
                >
                  View My Orders
                </button>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
