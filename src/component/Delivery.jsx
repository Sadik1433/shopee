export default function DeliveryInfo() {
  return (
    <div className="mt-16 px-4 grid grid-cols-3 gap-2">
      <div className="max-w-[300px] h-[80px] border rounded-xl text-center">
        🚚
        <h3 className="font-semibold mt-2">Free Delivery</h3>
        <p className="text-sm text-gray-500">Delivered in 3-5 days</p>
      </div>

      <div className="max-w-[300px] h-[80px] border rounded-xl text-center">
        🔄
        <h3 className="font-semibold mt-2">7 Days Return</h3>
        <p className="text-sm text-gray-500">Easy return policy</p>
      </div>

      <div className="max-w-[300px] h-[80px] border rounded-xl text-center">
        🔒
        <h3 className="font-semibold mt-2">Secure Payment</h3>
        <p className="text-sm text-gray-500">100% secure checkout</p>
      </div>
    </div>
  );
}
