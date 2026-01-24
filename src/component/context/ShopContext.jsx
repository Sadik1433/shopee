import { createContext, useEffect, useState } from "react";
import all_product from "../Assets/all_product.js";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext(null);

const DefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {

  // 🔹 Load cart from localStorage OR default
  const getInitialCart = () => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : DefaultCart();
  };

  const [cartItems, setCartItems] = useState(getInitialCart);

  // 🔹 Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  // Remove item
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0),
    }));
  };

  const getTotalCartAmount = () => {
  let totalAmount = 0;

  for (const itemId in cartItems) {
    if (cartItems[itemId] > 0) {
      const itemInfo = all_product.find(
        (product) => product.id === Number(itemId)
      );
      totalAmount += itemInfo.price * cartItems[itemId];
    }
  }

  return totalAmount;
};

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
