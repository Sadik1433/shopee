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
    <div className="min-h-screen w-full bg-[var(--bg-color)] pb-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 p-2 sm:p-4 lg:p-6 justify-center items-center lg:items-start">
        {/* Cart list */}
        <div className="w-full lg:w-[500px] shrink-0">
          <CartList
            all_product={all_product}
            cartItems={cartItems}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            clearFromCart={clearFromCart}
            onSelect={onSelected}
            getTotalCartAmount={getTotalCartAmount}
          />
        </div>

        {/* Right panel: Checkout if cart has items or buy-now, else Product Details */}
        {showCheckout ? (
          <div className="w-full lg:flex-1 lg:max-w-[600px] lg:sticky lg:top-20 self-start mt-4 lg:mt-8">
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
          <div className="w-full lg:flex-1 lg:max-w-[600px]">
            <ProductDetails cartItems={cartItems} product={selectedProduct} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
