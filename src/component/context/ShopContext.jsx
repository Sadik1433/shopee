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

  // 🔹 Load watchlist from localStorage OR default
  const getInitialWatchlist = () => {
    const storedWatchlist = localStorage.getItem("watchlist");
    return storedWatchlist ? JSON.parse(storedWatchlist) : [];
  };

  const [cartItems, setCartItems] = useState(getInitialCart);
  const [watchlist, setWatchlist] = useState(getInitialWatchlist);

  // 🔹 Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // 🔹 Save watchlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

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

  // Toggle Watchlist
  const toggleWatchlist = (itemId) => {
    setWatchlist((prev) => {
      if (prev.includes(Number(itemId))) {
        return prev.filter((id) => id !== Number(itemId));
      } else {
        return [...prev, Number(itemId)];
      }
    });
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
    watchlist,
    addToCart,
    removeFromCart,
    toggleWatchlist,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
