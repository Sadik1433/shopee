import CartList from "../component/CartList.jsx";
import ProductDetails from "../component/ProductDetails.jsx";
import CheckoutSection from "../component/CheckoutSection.jsx";
import { ShopContext } from "../context/ShopContext.jsx";
import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const location = useLocation();
  const buyNowProduct = location.state?.buyNowProduct || null;

  const {
    all_product,
    cartItems,
    removeFromCart,
    addToCart,
    clearFromCart,
    getTotalCartAmount,
    placeOrder,
    activeUser,
  } = useContext(ShopContext);

  const hasCartItems = Object.values(cartItems).some((q) => q > 0);
  const showCheckout = hasCartItems || buyNowProduct;

  const onSelected = (p) => {
    setSelectedProduct(p);
  };

  return (
    <div className="min-h-screen w-screen bg-[var(--bg-color)]">
      <div className="flex gap-2 p-4">
        {/* Cart list */}
        <CartList
          all_product={all_product}
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          clearFromCart={clearFromCart}
          onSelect={onSelected}
          getTotalCartAmount={getTotalCartAmount}
        />

        {/* Right panel: Checkout if cart has items or buy-now, else Product Details */}
        {showCheckout ? (
          <div className="flex-1 sticky top-20 self-start mt-18">
            <CheckoutSection
              cartItems={cartItems}
              all_product={all_product}
              getTotalCartAmount={getTotalCartAmount}
              placeOrder={placeOrder}
              activeUser={activeUser}
              addToCart={addToCart}
              buyNowProduct={buyNowProduct}
            />
          </div>
        ) : (
          <ProductDetails cartItems={cartItems} product={selectedProduct} />
        )}
      </div>
    </div>
  );
};

export default Cart;
