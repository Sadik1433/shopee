import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  IoPersonOutline,
  IoCallOutline,
  IoLocationOutline,
  IoCheckmarkCircleOutline,
  IoRadioButtonOn,
  IoRadioButtonOff,
  IoColorPaletteOutline,
  IoResizeOutline,
} from "react-icons/io5";
import { MdShoppingBag, MdPayment } from "react-icons/md";
import { BsCash, BsCreditCard2Front, BsQrCode } from "react-icons/bs";

const PAYMENT_METHODS = [
  {
    id: "cod",
    label: "Cash on Delivery",
    desc: "Pay when your order arrives",
    icon: BsCash,
  },
  {
    id: "upi",
    label: "UPI / QR Code",
    desc: "GPay, PhonePe, Paytm, etc.",
    icon: BsQrCode,
  },
  {
    id: "card",
    label: "Credit / Debit Card",
    desc: "Visa, Mastercard, Rupay",
    icon: BsCreditCard2Front,
  },
];

/* ── Step indicator labels ── */
const getSteps = (hasBuyNow) =>
  hasBuyNow
    ? [
        { n: 0, label: "Configure" },
        { n: 1, label: "Review" },
        { n: 2, label: "Address" },
        { n: 3, label: "Payment" },
      ]
    : [
        { n: 1, label: "Review" },
        { n: 2, label: "Address" },
        { n: 3, label: "Payment" },
      ];

const CheckoutSection = ({
  cartItems,
  all_product,
  getTotalCartAmount,
  placeOrder,
  activeUser,
  addToCart,
  buyNowProduct,
}) => {
  const navigate = useNavigate();
  const hasBuyNow = !!buyNowProduct;

  /* ── product config state (only relevant in buy-now flow) ── */
  const [pickedColor, setPickedColor] = useState(
    buyNowProduct?.selectedColor || buyNowProduct?.colors?.[0]?.name || ""
  );
  const [pickedSize, setPickedSize] = useState(
    buyNowProduct?.selectedSize || buyNowProduct?.sizes?.[0] || ""
  );
  const [addedToCart, setAddedToCart] = useState(false);

  const [shippingInfo, setShippingInfo] = useState({
    name: activeUser?.username || "",
    phone: activeUser?.phone || "",
    address: activeUser?.address || "",
    payment: "cod",
  });
  const [success, setSuccess] = useState(false);
  const [step, setStep] = useState(hasBuyNow ? 0 : 1);

  const steps = getSteps(hasBuyNow);

  /* Re-derive cart products & total after addToCart fires */
  const cartProducts = all_product.filter((p) => cartItems[p.id] > 0);
  const total = getTotalCartAmount();

  /* If user came via Buy Now and has already added to cart, jump to review */
  useEffect(() => {
    if (addedToCart && step === 0) setStep(1);
  }, [addedToCart, step]);

  const handleAddAndContinue = () => {
    if (!pickedColor && buyNowProduct?.colors?.length > 0) {
      alert("Please select a colour.");
      return;
    }
    if (!pickedSize && buyNowProduct?.sizes?.length > 0) {
      alert("Please select a size.");
      return;
    }
    addToCart(buyNowProduct.id);
    setAddedToCart(true);
  };

  const handlePlace = () => {
    if (!activeUser) {
      navigate("/login");
      return;
    }
    // Build per-item metadata (color + size) for the buy-now product
    const itemMeta = {};
    if (hasBuyNow && buyNowProduct) {
      itemMeta[buyNowProduct.id] = { color: pickedColor, size: pickedSize };
    }
    const order = placeOrder(
      {
        ...shippingInfo,
        payment: PAYMENT_METHODS.find((m) => m.id === shippingInfo.payment)?.label,
      },
      itemMeta
    );
    if (order) {
      setSuccess(true);
      setStep(hasBuyNow ? 0 : 1);
      setAddedToCart(false);
      setTimeout(() => setSuccess(false), 4000);
    }
  };

  /* ── success screen ── */
  if (success) {
    return (
      <div className="w-[600px] bg-[var(--card-color)] border border-[var(--border-color)] rounded-3xl p-10 flex flex-col items-center gap-4 shadow-xl mb-8">
        <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center">
          <IoCheckmarkCircleOutline size={48} className="text-green-500" />
        </div>
        <h2 className="text-2xl font-bold text-[var(--text-color)]">Order Placed Successfully!</h2>
        <p className="text-[var(--text-secondary)] text-center">
          Your order has been confirmed. You can track it in My Orders.
        </p>
        <button
          onClick={() => navigate("/orders")}
          className="mt-2 px-8 py-3 bg-[var(--btn-color)] text-white rounded-2xl font-bold hover:shadow-lg transition-all active:scale-95"
        >
          View My Orders
        </button>
      </div>
    );
  }

  return (
    <div className="w-[600px] bg-[var(--card-color)] border border-[var(--border-color)] rounded-3xl shadow-xl mb-8 overflow-hidden">
      {/* ── section title ── */}
      <div className="px-6 pt-5 pb-3 border-b border-[var(--border-color)]">
        <h2 className="text-lg font-bold text-[var(--text-color)] flex items-center gap-2">
          <MdShoppingBag size={20} className="text-[var(--heading-color)]" />
          Checkout
        </h2>
      </div>

      {/* ── progress steps ── */}
      <div className="flex items-center bg-[var(--input-color)] px-6 py-4 gap-0">
        {steps.map(({ n, label }, i, arr) => (
          <div key={n} className="flex items-center flex-1">
            <button
              onClick={() => { if (step > n) setStep(n); }}
              className="flex flex-col items-center gap-1"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all
                  ${step >= n
                    ? "bg-[var(--heading-color)] text-white shadow-lg shadow-[var(--heading-color)]/30"
                    : "bg-[var(--border-color)] text-[var(--text-secondary)]"
                  }`}
              >
                {step > n ? <IoCheckmarkCircleOutline size={18} /> : i + 1}
              </div>
              <span
                className={`text-[10px] font-bold uppercase tracking-wider whitespace-nowrap
                  ${step >= n ? "text-[var(--heading-color)]" : "text-[var(--text-secondary)]"}`}
              >
                {label}
              </span>
            </button>
            {i < arr.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-2 rounded transition-all ${step > n ? "bg-[var(--heading-color)]" : "bg-[var(--border-color)]"}`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="p-6">

        {/* ── STEP 0: Product Configuration (Buy Now only) ── */}
        {step === 0 && hasBuyNow && (
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-[var(--text-color)] text-lg">Configure Your Product</h3>

            {/* Product preview */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--input-color)] border border-[var(--border-color)]">
              <img
                src={buyNowProduct.image}
                alt={buyNowProduct.name}
                className="w-20 h-20 rounded-xl object-cover shrink-0 border border-[var(--border-color)]"
              />
              <div className="flex-1 min-w-0">
                <p className="font-bold text-[var(--text-color)] truncate">{buyNowProduct.name}</p>
                <p className="text-[var(--heading-color)] font-black text-lg">₹{buyNowProduct.price}</p>
              </div>
            </div>

            {/* Color picker */}
            {buyNowProduct.colors && buyNowProduct.colors.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <IoColorPaletteOutline size={18} className="text-[var(--heading-color)]" />
                  <p className="text-sm font-bold text-[var(--text-color)]">
                    Colour:
                    <span className="ml-2 text-[var(--heading-color)]">{pickedColor}</span>
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {buyNowProduct.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setPickedColor(color.name)}
                      title={color.name}
                      className={`w-10 h-10 rounded-xl border-2 transition-all duration-200
                        ${pickedColor === color.name
                          ? "border-[var(--heading-color)] scale-110 shadow-md shadow-[var(--heading-color)]/30"
                          : "border-transparent hover:scale-105"
                        }`}
                    >
                      <div className={`w-full h-full rounded-lg ${color.class}`} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size/Specification picker */}
            {buyNowProduct.sizes && buyNowProduct.sizes.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <IoResizeOutline size={18} className="text-[var(--heading-color)]" />
                  <p className="text-sm font-bold text-[var(--text-color)]">
                    {buyNowProduct.category === "electronics" ? "Specification:" : "Size:"}
                    <span className="ml-2 text-[var(--heading-color)]">{pickedSize}</span>
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {buyNowProduct.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setPickedSize(size)}
                      className={`px-4 py-2 rounded-xl border-2 font-bold text-sm transition-all duration-200
                        ${pickedSize === size
                          ? "border-[var(--heading-color)] bg-[var(--heading-color)] text-white shadow-md"
                          : "border-[var(--border-color)] text-[var(--text-color)] hover:border-[var(--heading-color)]/50"
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Summary row */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-[var(--heading-color)]/5 border border-[var(--heading-color)]/20 text-sm">
              <span className="text-[var(--text-secondary)]">Selected</span>
              <span className="font-bold text-[var(--text-color)]">
                {pickedColor && <span className="mr-2">🎨 {pickedColor}</span>}
                {pickedSize && (
                  <span>
                    {buyNowProduct.category === "electronics" ? "⚙️" : "📐"} {pickedSize}
                  </span>
                )}
              </span>
            </div>

            <button
              onClick={handleAddAndContinue}
              className="w-full py-4 bg-[var(--btn-color)] text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-[var(--btn-color)]/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <MdShoppingBag size={20} />
              Add to Cart & Continue →
            </button>
          </div>
        )}

        {/* ── STEP 1: Review Items ── */}
        {step === 1 && (
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-[var(--text-color)] text-lg">Your Items</h3>

            {cartProducts.length === 0 ? (
              <div className="py-8 text-center text-[var(--text-secondary)]">
                <p>No items in cart yet.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-3 max-h-72 overflow-y-auto pr-1">
                {cartProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-4 p-3 rounded-2xl bg-[var(--input-color)] border border-[var(--border-color)]"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 rounded-xl object-cover shrink-0 border border-[var(--border-color)]"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[var(--text-color)] truncate">{product.name}</p>
                      <p className="text-xs text-[var(--text-secondary)] mt-1">
                        ₹{product.price} × {cartItems[product.id]}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-black text-[var(--heading-color)]">₹{product.price * cartItems[product.id]}</p>
                      <p className="text-xs text-[var(--text-secondary)]">qty: {cartItems[product.id]}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Total bar */}
            <div className="flex justify-between items-center p-4 rounded-2xl bg-[var(--heading-color)]/5 border border-[var(--heading-color)]/20">
              <div>
                <p className="text-xs text-[var(--text-secondary)]">{cartProducts.length} item(s)</p>
                <p className="font-bold text-[var(--text-color)]">Cart Total</p>
              </div>
              <p className="text-2xl font-black text-[var(--heading-color)]">₹{total}</p>
            </div>

            <div className="flex gap-3">
              {hasBuyNow && (
                <button
                  onClick={() => setStep(0)}
                  className="flex-1 py-3.5 border border-[var(--border-color)] text-[var(--text-color)] font-semibold rounded-2xl hover:bg-[var(--input-color)] transition-colors"
                >
                  ← Back
                </button>
              )}
              <button
                onClick={() => setStep(2)}
                disabled={cartProducts.length === 0}
                className="flex-[2] py-4 bg-[var(--btn-color)] text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-[var(--btn-color)]/30 active:scale-[0.98] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue to Address →
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 2: Address ── */}
        {step === 2 && (
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-[var(--text-color)] text-lg">Delivery Address</h3>

            <div className="relative">
              <IoPersonOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={18} />
              <input
                type="text"
                placeholder="Full Name *"
                required
                value={shippingInfo.name}
                onChange={(e) => setShippingInfo((p) => ({ ...p, name: e.target.value }))}
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[var(--input-color)] border border-[var(--border-color)] text-[var(--text-color)] outline-none focus:border-[var(--heading-color)] transition-colors"
              />
            </div>

            <div className="relative">
              <IoCallOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={18} />
              <input
                type="tel"
                placeholder="Phone Number *"
                required
                value={shippingInfo.phone}
                onChange={(e) => setShippingInfo((p) => ({ ...p, phone: e.target.value }))}
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[var(--input-color)] border border-[var(--border-color)] text-[var(--text-color)] outline-none focus:border-[var(--heading-color)] transition-colors"
              />
            </div>

            <div className="relative">
              <IoLocationOutline className="absolute left-4 top-3.5 text-[var(--text-secondary)]" size={18} />
              <textarea
                placeholder="Delivery Address (House No., Street, City, PIN) *"
                required
                rows={4}
                value={shippingInfo.address}
                onChange={(e) => setShippingInfo((p) => ({ ...p, address: e.target.value }))}
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[var(--input-color)] border border-[var(--border-color)] text-[var(--text-color)] outline-none focus:border-[var(--heading-color)] transition-colors resize-none"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 py-3.5 border border-[var(--border-color)] text-[var(--text-color)] font-semibold rounded-2xl hover:bg-[var(--input-color)] transition-colors"
              >
                ← Back
              </button>
              <button
                onClick={() => {
                  if (!shippingInfo.name || !shippingInfo.phone || !shippingInfo.address) {
                    alert("Please fill all address fields.");
                    return;
                  }
                  setStep(3);
                }}
                className="flex-[2] py-3.5 bg-[var(--btn-color)] text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-[var(--btn-color)]/30 active:scale-[0.98] transition-all"
              >
                Continue to Payment →
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 3: Payment ── */}
        {step === 3 && (
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-[var(--text-color)] text-lg">Choose Payment Method</h3>

            {/* Payment options */}
            <div className="flex flex-col gap-3">
              {PAYMENT_METHODS.map((method) => {
                const Icon = method.icon;
                const selected = shippingInfo.payment === method.id;
                return (
                  <button
                    key={method.id}
                    onClick={() => setShippingInfo((p) => ({ ...p, payment: method.id }))}
                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all
                      ${selected
                        ? "border-[var(--heading-color)] bg-[var(--heading-color)]/5 shadow-md shadow-[var(--heading-color)]/10"
                        : "border-[var(--border-color)] bg-[var(--input-color)] hover:border-[var(--heading-color)]/40"
                      }`}
                  >
                    <div
                      className={`p-2.5 rounded-xl ${selected ? "bg-[var(--heading-color)] text-white" : "bg-[var(--card-color)] text-[var(--text-secondary)]"} transition-all`}
                    >
                      <Icon size={22} />
                    </div>
                    <div className="flex-1">
                      <p className={`font-bold ${selected ? "text-[var(--heading-color)]" : "text-[var(--text-color)]"}`}>
                        {method.label}
                      </p>
                      <p className="text-xs text-[var(--text-secondary)]">{method.desc}</p>
                    </div>
                    {selected
                      ? <IoRadioButtonOn size={22} className="text-[var(--heading-color)] shrink-0" />
                      : <IoRadioButtonOff size={22} className="text-[var(--text-secondary)] shrink-0" />
                    }
                  </button>
                );
              })}
            </div>

            {/* Order summary */}
            <div className="bg-[var(--input-color)] rounded-2xl p-4 flex flex-col gap-2 border border-[var(--border-color)]">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)]">Order Summary</p>
              <div className="flex justify-between text-sm text-[var(--text-secondary)]">
                <span>Items ({cartProducts.length})</span>
                <span>₹{total}</span>
              </div>
              <div className="flex justify-between text-sm text-[var(--text-secondary)]">
                <span>Delivery</span>
                <span className="text-green-500 font-bold">FREE</span>
              </div>
              <div className="border-t border-[var(--border-color)] pt-2 flex justify-between font-black text-[var(--text-color)]">
                <span>Total</span>
                <span className="text-[var(--heading-color)]">₹{total}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(2)}
                className="flex-1 py-3.5 border border-[var(--border-color)] text-[var(--text-color)] font-semibold rounded-2xl hover:bg-[var(--input-color)] transition-colors"
              >
                ← Back
              </button>
              <button
                onClick={handlePlace}
                className="flex-[2] py-3.5 bg-[var(--btn-color)] text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-[var(--btn-color)]/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <MdShoppingBag size={20} />
                Place Order · ₹{total}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default CheckoutSection;
