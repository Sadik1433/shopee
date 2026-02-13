import CartList from "../component/CartList.jsx";
import ProductDetails from "../component/ProductDetails.jsx";
import { ShopContext } from "../context/ShopContext.jsx";
import { useState, useContext } from "react";

const Cart = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { all_product, cartItems, removeFromCart, addToCart, clearFromCart, getTotalCartAmount } = useContext(ShopContext);

  const onSelected = (p) => {
    setSelectedProduct(p);
  };

  return (
    <div>
      <div className="min-h-screen w-screen  flex gap-2  p-4">
        <CartList
          all_product={all_product}
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          clearFromCart={clearFromCart}
          onSelect={onSelected}
          getTotalCartAmount={getTotalCartAmount}
        />

        <ProductDetails cartItems={cartItems} product={selectedProduct} />
      </div>
    </div>
  );
};

export default Cart;
