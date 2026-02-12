import { createContext, useEffect, useState, useCallback, useMemo } from "react";
import all_product from "../Assets/all_product.js";

export const ShopContext = createContext(null);

const DefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {

  const getInitialCart = () => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : DefaultCart();
  };

  const getInitialWatchlist = () => {
    const storedWatchlist = localStorage.getItem("watchlist");
    return storedWatchlist ? JSON.parse(storedWatchlist) : [];
  };

  const getInitialUsers = () => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  };

  const getInitialActiveUser = () => {
    const storedActiveUser = localStorage.getItem("activeUser");
    return storedActiveUser ? JSON.parse(storedActiveUser) : null;
  };

  const [cartItems, setCartItems] = useState(getInitialCart);
  const [watchlist, setWatchlist] = useState(getInitialWatchlist);
  const [users, setUsers] = useState(getInitialUsers);
  const [activeUser, setActiveUser] = useState(getInitialActiveUser);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  useEffect(() => {
    localStorage.setItem("activeUser", JSON.stringify(activeUser));
  }, [activeUser]);

  const signup = useCallback((userData) => {
    const userExists = users.find((user) => user.email === userData.email);
    if (userExists) {
      alert("User already exists with this email!");
      return false;
    }
    setUsers((prev) => [...prev, userData]);
    setActiveUser(userData);
    return true;
  }, [users]);

  const login = useCallback((email, password) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      setActiveUser(user);
      return true;
    }
    alert("Invalid email or password!");
    return false;
  }, [users]);

  const logout = useCallback(() => {
    setActiveUser(null);
  }, []);

  const updateProfile = useCallback((updatedData) => {
    if (!activeUser) return;

    const updatedUser = { ...activeUser, ...updatedData };
    setActiveUser(updatedUser);

    setUsers((prev) =>
      prev.map((user) => user.email === activeUser.email ? updatedUser : user)
    );

    return true;
  }, [activeUser]);

  const addToCart = useCallback((itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  }, []);

  const removeFromCart = useCallback((itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0),
    }));
  }, []);

  const clearFromCart = useCallback((itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: 0,
    }));
  }, []);

  const toggleWatchlist = useCallback((itemId) => {
    setWatchlist((prev) => {
      if (prev.includes(Number(itemId))) {
        return prev.filter((id) => id !== Number(itemId));
      } else {
        return [...prev, Number(itemId)];
      }
    });
  }, []);

  const getTotalCartAmount = useCallback(() => {
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
  }, [cartItems]);

  const contextValue = useMemo(() => ({
    all_product,
    cartItems,
    watchlist,
    users,
    activeUser,
    signup,
    login,
    logout,
    updateProfile,
    addToCart,
    removeFromCart,
    clearFromCart,
    toggleWatchlist,
    getTotalCartAmount,
  }), [cartItems, watchlist, users, activeUser, signup, login, logout, updateProfile, addToCart, removeFromCart, clearFromCart, toggleWatchlist, getTotalCartAmount]);

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
