import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

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
  return (
    <div className="flex  bg-[var(--bg-color)]">
      <div className="w-[500px] relative top-8  py-2 m-4">
        <div className="text-[var(--heading-color)] sticky top-20 p-3 bg-[var(--bg-color)] backdrop-blur border-1 flex justify-between">
          <button
            onClick={() => navigate('/')}
          >
            <IoArrowBack size={25} />
          </button>
          <h1 className="text-xl">CartItems</h1>
          <span>Total Amount . {getTotalCartAmount()}</span>
        </div>
        <div className="flow-root">
          <ul role="list" className="h-full py-2 overflow-y-auto scroll-hide">
            {Object.values(cartItems).some(quantity => quantity > 0) ? (
              all_product.map((product) => {
                if (cartItems[product.id] > 0) {
                  return (
                    <li
                      key={product.id}
                      onClick={() => onSelect(product)}
                      className="flex m-2 py-2 px-2 min-w-120 border-1 rounded cursor-pointer hover:bg-[var(--input-color)] transition-colors"
                    >
                      <div className="size-18 shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          alt={product.name}
                          src={product.image}
                          className="size-full object-cover"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium  text-[var(--text-color)]">
                            <h3>{product.name}</h3>
                            <p className="ml-4">₹{product.price}</p>
                          </div>
                        </div>
                        <div className="flex flex-1  items-end justify-between text-sm">
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
                              onClick={(e) => {
                                e.stopPropagation();
                                clearFromCart(product.id);
                              }}
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
              })
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-[var(--text-secondary)]">
                <p className="text-xl font-medium">Your cart is currently empty</p>
                <button
                  onClick={() => navigate('/')}
                  className="mt-4 px-6 py-2 bg-[var(--heading-color)] text-white rounded-full font-bold hover:opacity-90 transition-opacity"
                >
                  Go Shopping
                </button>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
