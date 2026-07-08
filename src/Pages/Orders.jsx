import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";
import {
  IoArrowBack,
  IoTimeOutline,
  IoLocationOutline,
  IoCallOutline,
  IoPersonOutline,
  IoCartOutline,
  IoChevronDown,
  IoChevronUp,
  IoCloseCircleOutline,
  IoTrashOutline,
  IoColorPaletteOutline,
  IoResizeOutline,
  IoClose,
} from "react-icons/io5";
import { MdShoppingBag, MdPayment, MdDeleteSweep } from "react-icons/md";

/* ─────────────────────────────────────────── helpers ── */

const STATUS_CONFIG = {
  Processing: { color: "text-yellow-500", bg: "bg-yellow-500/10", dot: "bg-yellow-400" },
  Shipped:    { color: "text-blue-500",   bg: "bg-blue-500/10",   dot: "bg-blue-400"   },
  Delivered:  { color: "text-green-500",  bg: "bg-green-500/10",  dot: "bg-green-400"  },
  Cancelled:  { color: "text-red-500",    bg: "bg-red-500/10",    dot: "bg-red-400"    },
};

const CANCELLABLE_STATUSES = ["Processing", "Shipped"];

const formatDate = (iso) => {
  const d = new Date(iso);
  return d.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

/* ────────────────────── Item Detail Panel (right side) ── */

const ItemDetailPanel = ({ item, onClose }) => {
  if (!item) return null;
  return (
    <div className="w-[340px] shrink-0 sticky top-24 self-start">
      <div className="bg-[var(--card-color)] border border-[var(--border-color)] rounded-3xl overflow-hidden shadow-xl">
        {/* header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border-color)]">
          <h3 className="font-bold text-[var(--text-color)] text-base">Item Details</h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-[var(--input-color)] transition-colors text-[var(--text-secondary)]"
          >
            <IoClose size={18} />
          </button>
        </div>

        {/* product image */}
        <div className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-52 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* product info */}
        <div className="p-5 flex flex-col gap-4">
          <div>
            <h4 className="font-bold text-[var(--text-color)] text-lg leading-tight">{item.name}</h4>
          </div>

          {/* price row */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-[var(--heading-color)]/5 border border-[var(--heading-color)]/20">
            <span className="text-sm text-[var(--text-secondary)] font-medium">Unit Price</span>
            <span className="text-xl font-black text-[var(--heading-color)]">₹{item.price}</span>
          </div>

          {/* color */}
          {item.color && (
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-[var(--input-color)] border border-[var(--border-color)]">
              <IoColorPaletteOutline size={18} className="text-[var(--heading-color)] shrink-0" />
              <div className="flex-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)]">Colour</p>
                <p className="text-sm font-semibold text-[var(--text-color)] mt-0.5">{item.color}</p>
              </div>
            </div>
          )}

          {/* size */}
          {item.size && (
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-[var(--input-color)] border border-[var(--border-color)]">
              <IoResizeOutline size={18} className="text-[var(--heading-color)] shrink-0" />
              <div className="flex-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)]">
                  {item.category === "electronics" ? "Specification" : "Size"}
                </p>
                <p className="text-sm font-semibold text-[var(--text-color)] mt-0.5">{item.size}</p>
              </div>
            </div>
          )}

          {/* qty + subtotal */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-2xl bg-[var(--input-color)] border border-[var(--border-color)] text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)]">Quantity</p>
              <p className="text-xl font-black text-[var(--text-color)] mt-1">{item.quantity}</p>
            </div>
            <div className="p-3 rounded-2xl bg-[var(--input-color)] border border-[var(--border-color)] text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)]">Subtotal</p>
              <p className="text-xl font-black text-[var(--heading-color)] mt-1">₹{item.subtotal}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────── OrderCard component ── */

const OrderCard = ({ order, onCancel, onDelete, onSelectItem, selectedItem }) => {
  const [expanded, setExpanded] = useState(false);
  const [confirmCancel, setConfirmCancel] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const cfg = STATUS_CONFIG[order.status] || STATUS_CONFIG.Processing;
  const canCancel = CANCELLABLE_STATUSES.includes(order.status);

  return (
    <div className="bg-[var(--card-color)] border border-[var(--border-color)] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      {/* card header */}
      <div className="p-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-bold text-[var(--heading-color)] bg-[var(--heading-color)]/10 px-3 py-1 rounded-full">
              {order.orderId}
            </span>
            <span className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${cfg.color} ${cfg.bg}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot} inline-block`} />
              {order.status}
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2 text-[var(--text-secondary)] text-xs">
            <IoTimeOutline size={13} />
            <span>{formatDate(order.placedAt)}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 flex-wrap justify-end">
          <div className="text-right">
            <p className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider">Total</p>
            <p className="text-xl font-black text-[var(--heading-color)]">₹{order.total}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider">Items</p>
            <p className="text-xl font-black text-[var(--text-color)]">{order.items.length}</p>
          </div>

          {/* Cancel Button */}
          {canCancel && (
            <button
              onClick={() => setConfirmCancel(true)}
              className="flex items-center gap-1 px-3 py-2 rounded-2xl border border-red-400/50 text-red-500 text-xs font-bold hover:bg-red-500/10 transition-colors"
            >
              <IoCloseCircleOutline size={15} />
              Cancel
            </button>
          )}

          {/* Delete Button */}
          <button
            onClick={() => setConfirmDelete(true)}
            className="flex items-center gap-1 px-3 py-2 rounded-2xl border border-[var(--border-color)] text-[var(--text-secondary)] text-xs font-bold hover:bg-red-500/10 hover:text-red-500 hover:border-red-400/50 transition-colors"
          >
            <IoTrashOutline size={15} />
            Delete
          </button>

          <button
            onClick={() => setExpanded((p) => !p)}
            className="p-2.5 rounded-2xl border border-[var(--border-color)] hover:bg-[var(--input-color)] transition-colors text-[var(--text-color)]"
          >
            {expanded ? <IoChevronUp size={18} /> : <IoChevronDown size={18} />}
          </button>
        </div>
      </div>

      {/* Cancel confirmation */}
      {confirmCancel && (
        <div className="border-t border-red-400/30 bg-red-500/5 px-5 py-4 flex flex-col sm:flex-row items-center gap-3">
          <div className="flex-1">
            <p className="font-bold text-red-500 text-sm">Cancel this order?</p>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">
              This cannot be undone. Order {order.orderId} will be marked as cancelled.
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => setConfirmCancel(false)}
              className="px-4 py-2 rounded-xl border border-[var(--border-color)] text-[var(--text-color)] text-sm font-semibold hover:bg-[var(--input-color)] transition-colors"
            >
              Keep Order
            </button>
            <button
              onClick={() => { onCancel(order.orderId); setConfirmCancel(false); }}
              className="px-4 py-2 rounded-xl bg-red-500 text-white text-sm font-bold hover:bg-red-600 transition-colors"
            >
              Yes, Cancel
            </button>
          </div>
        </div>
      )}

      {/* Delete confirmation */}
      {confirmDelete && (
        <div className="border-t border-orange-400/30 bg-orange-500/5 px-5 py-4 flex flex-col sm:flex-row items-center gap-3">
          <div className="flex-1">
            <p className="font-bold text-orange-500 text-sm">Remove from history?</p>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">
              Order {order.orderId} will be permanently removed from your history.
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => setConfirmDelete(false)}
              className="px-4 py-2 rounded-xl border border-[var(--border-color)] text-[var(--text-color)] text-sm font-semibold hover:bg-[var(--input-color)] transition-colors"
            >
              Keep
            </button>
            <button
              onClick={() => { onDelete(order.orderId); setConfirmDelete(false); }}
              className="px-4 py-2 rounded-xl bg-orange-500 text-white text-sm font-bold hover:bg-orange-600 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      )}

      {/* expanded body */}
      {expanded && (
        <div className="border-t border-[var(--border-color)] p-5 flex flex-col gap-5">
          {/* products — clickable to show detail */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-3">
              Products Ordered
              <span className="ml-2 normal-case font-normal opacity-70">(click an item to view details)</span>
            </p>
            <div className="flex flex-col gap-2">
              {order.items.map((item, idx) => {
                const isSelected = selectedItem?.productId === item.productId && selectedItem?.orderId === order.orderId;
                return (
                  <button
                    key={idx}
                    onClick={() => onSelectItem(isSelected ? null : { ...item, orderId: order.orderId })}
                    className={`flex items-center gap-4 p-3 rounded-2xl text-left transition-all border
                      ${isSelected
                        ? "border-[var(--heading-color)] bg-[var(--heading-color)]/5 shadow-md"
                        : "border-transparent bg-[var(--input-color)] hover:border-[var(--heading-color)]/30 hover:bg-[var(--heading-color)]/5"
                      }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-xl object-cover border border-[var(--border-color)] shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-[var(--text-color)] text-sm truncate">{item.name}</h4>
                      <div className="flex items-center gap-3 mt-1 flex-wrap">
                        <p className="text-xs text-[var(--text-secondary)]">
                          ₹{item.price} × {item.quantity}
                        </p>
                        {item.color && (
                          <span className="text-xs text-[var(--text-secondary)] flex items-center gap-1">
                            🎨 {item.color}
                          </span>
                        )}
                        {item.size && (
                          <span className="text-xs text-[var(--text-secondary)] flex items-center gap-1">
                            📐 {item.size}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="font-black text-[var(--heading-color)] shrink-0">₹{item.subtotal}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* shipping info */}
          {order.shippingInfo && (
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-3">
                Shipping Info
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {order.shippingInfo.name && (
                  <div className="flex gap-2 p-3 rounded-2xl bg-[var(--input-color)]">
                    <IoPersonOutline className="text-[var(--heading-color)] mt-0.5 shrink-0" size={15} />
                    <div>
                      <p className="text-[10px] text-[var(--text-secondary)]">Name</p>
                      <p className="text-sm font-semibold text-[var(--text-color)]">{order.shippingInfo.name}</p>
                    </div>
                  </div>
                )}
                {order.shippingInfo.phone && (
                  <div className="flex gap-2 p-3 rounded-2xl bg-[var(--input-color)]">
                    <IoCallOutline className="text-[var(--heading-color)] mt-0.5 shrink-0" size={15} />
                    <div>
                      <p className="text-[10px] text-[var(--text-secondary)]">Phone</p>
                      <p className="text-sm font-semibold text-[var(--text-color)]">{order.shippingInfo.phone}</p>
                    </div>
                  </div>
                )}
                {order.shippingInfo.address && (
                  <div className="flex gap-2 p-3 rounded-2xl bg-[var(--input-color)] sm:col-span-2">
                    <IoLocationOutline className="text-[var(--heading-color)] mt-0.5 shrink-0" size={15} />
                    <div>
                      <p className="text-[10px] text-[var(--text-secondary)]">Address</p>
                      <p className="text-sm font-semibold text-[var(--text-color)]">{order.shippingInfo.address}</p>
                    </div>
                  </div>
                )}
                {order.shippingInfo.payment && (
                  <div className="flex gap-2 p-3 rounded-2xl bg-[var(--input-color)]">
                    <MdPayment className="text-[var(--heading-color)] mt-0.5 shrink-0" size={15} />
                    <div>
                      <p className="text-[10px] text-[var(--text-secondary)]">Payment</p>
                      <p className="text-sm font-semibold text-[var(--text-color)]">{order.shippingInfo.payment}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* total */}
          <div className="flex justify-between items-center p-4 rounded-2xl bg-[var(--heading-color)]/5 border border-[var(--heading-color)]/20">
            <span className="font-bold text-[var(--text-color)]">Order Total</span>
            <span className="text-xl font-black text-[var(--heading-color)]">₹{order.total}</span>
          </div>
        </div>
      )}
    </div>
  );
};

/* ─────────────────────────────────── Main Orders page ── */

const Orders = () => {
  const { orders, activeUser, cancelOrder, deleteOrder, clearOrderHistory } = useContext(ShopContext);
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const [confirmClearAll, setConfirmClearAll] = useState(false);

  const userOrders = activeUser
    ? orders.filter((o) => o.userEmail === activeUser.email)
    : [];

  if (!activeUser) {
    return (
      <div className="min-h-screen w-full bg-[var(--bg-color)] flex flex-col items-center justify-center gap-6 px-4">
        <MdShoppingBag size={80} className="text-[var(--heading-color)] opacity-30" />
        <h2 className="text-2xl font-bold text-[var(--text-color)]">Please log in to continue</h2>
        <p className="text-[var(--text-secondary)]">You need an account to view your order history.</p>
        <Link
          to="/login"
          className="px-8 py-3 bg-[var(--btn-color)] text-white rounded-2xl font-bold hover:shadow-lg transition-all active:scale-95"
        >
          Login / Sign Up
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[var(--bg-color)] px-6 py-24">

      {/* ── page header ── */}
      <div className="flex items-center gap-4 mb-8 max-w-[1200px] mx-auto flex-wrap">
        <button
          onClick={() => navigate(-1)}
          className="p-3 bg-[var(--card-color)] border border-[var(--border-color)] rounded-2xl text-[var(--text-color)] hover:shadow-md transition-all active:scale-95"
        >
          <IoArrowBack size={22} />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-[var(--heading-color)]">My Orders</h1>
          <p className="text-[var(--text-secondary)] text-sm mt-1">
            {userOrders.length} {userOrders.length === 1 ? "order" : "orders"} placed
          </p>
        </div>

        <div className="ml-auto flex items-center gap-3 flex-wrap">
          {/* Clear all history */}
          {userOrders.length > 0 && (
            <button
              onClick={() => setConfirmClearAll(true)}
              className="flex items-center gap-2 px-4 py-2.5 border border-red-400/40 text-red-500 text-sm font-bold rounded-2xl hover:bg-red-500/10 transition-colors"
            >
              <MdDeleteSweep size={18} />
              Clear History
            </button>
          )}
          {/* Cart link */}
          <Link
            to="/cart"
            className="flex items-center gap-2 px-5 py-2.5 bg-[var(--btn-color)] text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-[var(--btn-color)]/30 transition-all active:scale-95 text-sm"
          >
            <MdShoppingBag size={18} />
            Go to Cart
          </Link>
        </div>
      </div>

      {/* ── clear-all confirmation banner ── */}
      {confirmClearAll && (
        <div className="max-w-[1200px] mx-auto mb-6 px-6 py-4 rounded-2xl bg-red-500/10 border border-red-400/30 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1">
            <p className="font-bold text-red-500">Clear entire order history?</p>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">
              All {userOrders.length} orders will be permanently removed. This cannot be undone.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => setConfirmClearAll(false)}
              className="px-5 py-2 rounded-xl border border-[var(--border-color)] text-[var(--text-color)] font-semibold hover:bg-[var(--input-color)] transition-colors text-sm"
            >
              Keep All
            </button>
            <button
              onClick={() => { clearOrderHistory(); setConfirmClearAll(false); setSelectedItem(null); }}
              className="px-5 py-2 rounded-xl bg-red-500 text-white font-bold hover:bg-red-600 transition-colors text-sm"
            >
              Yes, Clear All
            </button>
          </div>
        </div>
      )}

      {/* ── two-column: order list + detail panel ── */}
      <div className="max-w-[1200px] mx-auto flex gap-6 items-start">

        {/* orders list */}
        <div className="flex-1 min-w-0">
          {userOrders.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 gap-4 bg-[var(--card-color)] border border-[var(--border-color)] rounded-3xl">
              <IoCartOutline size={64} className="text-[var(--heading-color)] opacity-25" />
              <h3 className="text-xl font-bold text-[var(--text-color)]">No orders yet</h3>
              <p className="text-[var(--text-secondary)] text-sm text-center px-6">
                Your order history will appear here after you place an order.
              </p>
              <Link
                to="/"
                className="mt-2 px-8 py-3 bg-[var(--btn-color)] text-white rounded-2xl font-bold hover:shadow-lg transition-all active:scale-95"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {/* stats bar */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Total Orders", value: userOrders.length, icon: "📦" },
                  { label: "Total Spent", value: `₹${userOrders.filter(o => o.status !== "Cancelled").reduce((s, o) => s + o.total, 0)}`, icon: "💰" },
                  {
                    label: "Items Bought",
                    value: userOrders.filter(o => o.status !== "Cancelled").reduce((s, o) => s + o.items.reduce((a, i) => a + i.quantity, 0), 0),
                    icon: "🛍️",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[var(--card-color)] border border-[var(--border-color)] rounded-2xl p-4 text-center shadow-sm"
                  >
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <p className="text-xl font-black text-[var(--heading-color)]">{stat.value}</p>
                    <p className="text-[10px] text-[var(--text-secondary)] font-medium uppercase tracking-wide">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* order cards */}
              {userOrders.map((order) => (
                <OrderCard
                  key={order.orderId}
                  order={order}
                  onCancel={cancelOrder}
                  onDelete={deleteOrder}
                  onSelectItem={setSelectedItem}
                  selectedItem={selectedItem}
                />
              ))}
            </div>
          )}
        </div>

        {/* item detail panel */}
        {selectedItem && (
          <ItemDetailPanel
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}

      </div>
    </div>
  );
};

export default Orders;
