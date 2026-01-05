
export default function CartList({onSelect, all_product, cartItems,getTotalCartAmount}) {
  
  return (
    <div className="flex  justify-center ">
      <div className="w-[500px] relative top-10 shadow-lg py-2 m-4">
      <div className="bg-blue-900 border-1 text-white p-2 flex justify-between">
        <h1 className="text-xl">CartItems</h1>
        <span>Total Amount . {getTotalCartAmount()}</span>
      </div>
        <div className="flow-root">
          <ul role="list" className=" h-full py-2  overflow-y-auto scroll-hide  ">
            {all_product.map((product) => {
              if (cartItems[product.id] > 0) {
                return (
                  <li
                    key={product.id}
                    onClick={() => onSelect(product)}
                    className="flex m-2 py-2 px-2 min-w-120 border-1 rounded"
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
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{product.name}</h3>
                          <p className="ml-4">{product.price}</p>
                        </div>
                      </div>
                      <div className="flex flex-1  items-end justify-between text-sm">
                        <button className="px-2 text-blue-900 border-1">
                          {cartItems[product.id]}
                        </button>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.price * cartItems[product.id]}
                        </p>
                        <div className="flex">
                          <button
                            onClick={() => {
                              removeFromCart(product.id);
                            }}
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
