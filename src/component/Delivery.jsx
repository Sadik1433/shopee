export default function DeliveryInfo() {
  return (
    <div className="mt-12 sm:mt-16 px-4 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto w-full">
      <div className="p-3 sm:p-4 border border-[var(--border-color)] bg-[var(--card-color)] rounded-2xl text-center shadow-sm">
        <span className="text-2xl">🚚</span>
        <h3 className="font-semibold text-sm sm:text-base text-[var(--text-color)] mt-1">Free Delivery</h3>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)]">Delivered in 3-5 days</p>
      </div>

      <div className="p-3 sm:p-4 border border-[var(--border-color)] bg-[var(--card-color)] rounded-2xl text-center shadow-sm">
        <span className="text-2xl">🔄</span>
        <h3 className="font-semibold text-sm sm:text-base text-[var(--text-color)] mt-1">7 Days Return</h3>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)]">Easy return policy</p>
      </div>

      <div className="p-3 sm:p-4 border border-[var(--border-color)] bg-[var(--card-color)] rounded-2xl text-center shadow-sm">
        <span className="text-2xl">🔒</span>
        <h3 className="font-semibold text-sm sm:text-base text-[var(--text-color)] mt-1">Secure Payment</h3>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)]">100% secure checkout</p>
      </div>
    </div>
  );
}
