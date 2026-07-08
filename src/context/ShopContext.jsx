import { createContext, useEffect, useState, useCallback, useMemo } from "react";
import all_product from "../component/Assets/all_product.js";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext(null);

const DefaultCart = () => {
  let cart = {};
  all_product.forEach((product) => {
    cart[product.id] = 0;
  });
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

  const getInitialOrders = () => {
    const storedOrders = localStorage.getItem("orders");
    return storedOrders ? JSON.parse(storedOrders) : [];
  };

  const [cartItems, setCartItems] = useState(getInitialCart);
  const [watchlist, setWatchlist] = useState(getInitialWatchlist);
  const [users, setUsers] = useState(getInitialUsers);
  const [activeUser, setActiveUser] = useState(getInitialActiveUser);
  const [orders, setOrders] = useState(getInitialOrders);

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
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const productMap = useMemo(() => {
    const map = {};
    all_product.forEach((product) => {
      map[product.id] = product;
    });
    return map;
  }, []);

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
      const quantity = cartItems[itemId];
      if (quantity > 0) {
        const itemInfo = productMap[itemId];
        if (itemInfo) {
          totalAmount += itemInfo.price * quantity;
        }
      }
    }

    return totalAmount;
  }, [cartItems, productMap]);

  const clearCart = useCallback(() => {
    setCartItems(DefaultCart());
  }, []);

  const cancelOrder = useCallback((orderId) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.orderId === orderId ? { ...o, status: "Cancelled" } : o
      )
    );
  }, []);

  const deleteOrder = useCallback((orderId) => {
    setOrders((prev) => prev.filter((o) => o.orderId !== orderId));
  }, []);

  const clearOrderHistory = useCallback(() => {
    if (!activeUser) return;
    setOrders((prev) => prev.filter((o) => o.userEmail !== activeUser.email));
  }, [activeUser]);

  // itemMeta: { [productId]: { color, size } } — optional per-item metadata from checkout
  const placeOrder = useCallback((shippingInfo = {}, itemMeta = {}) => {
    const orderedItems = [];
    for (const itemId in cartItems) {
      const quantity = cartItems[itemId];
      if (quantity > 0) {
        const product = productMap[itemId];
        if (product) {
          orderedItems.push({
            productId: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            quantity,
            subtotal: product.price * quantity,
            color: itemMeta[product.id]?.color || null,
            size: itemMeta[product.id]?.size || null,
            category: product.category || null,
          });
        }
      }
    }
    if (orderedItems.length === 0) return null;

    const total = orderedItems.reduce((sum, item) => sum + item.subtotal, 0);
    const newOrder = {
      orderId: `ORD-${Date.now()}`,
      placedAt: new Date().toISOString(),
      userEmail: activeUser?.email || "guest",
      items: orderedItems,
      total,
      status: "Processing",
      shippingInfo,
    };

    setOrders((prev) => [newOrder, ...prev]);
    setCartItems(DefaultCart());
    return newOrder;
  }, [cartItems, productMap, activeUser]);

  const contextValue = useMemo(() => ({
    all_product,
    cartItems,
    watchlist,
    users,
    activeUser,
    orders,
    signup,
    login,
    logout,
    updateProfile,
    addToCart,
    removeFromCart,
    clearFromCart,
    clearCart,
    toggleWatchlist,
    getTotalCartAmount,
    placeOrder,
    cancelOrder,
    deleteOrder,
    clearOrderHistory,
  }), [cartItems, watchlist, users, activeUser, orders, signup, login, logout, updateProfile, addToCart, removeFromCart, clearFromCart, clearCart, toggleWatchlist, getTotalCartAmount, placeOrder, cancelOrder, deleteOrder, clearOrderHistory]);


  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
