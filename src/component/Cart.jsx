import { useContext, useState } from "react";
// import ProductList from "./ProductList";
import { ShopContext } from "./context/ShopContext";


export default function Cart() {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="flex  justify-center items-center">   
      <div className="h-screen relative border-2 rounded-lg shadow-lg p-4 m-4">
        <div className="flow-root"  >
          <div className="bg-blue-300 font-bold text-3xl sticky top-12 text-center p-4">
            <h1>Cart Items</h1>
          </div>
          <ul role="list" className="py-2 overflow-y-auto ">
            {all_product.map((product) => {
              if (cartItems[product.id] > 0) {
                return (
                  <li
                    key={product.id}
                    className="flex m-2 py-2 px-2 min-w-145 border-1 rounded"
                  >
                    <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
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
