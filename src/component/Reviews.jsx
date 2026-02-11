export default function Reviews() {
  return (
    <div className="mr-16  px-4">
      <h2 className="text-2xl font-semibold mb-6">Customer Reviews</h2>

      <div className="p-6 rounded-xl shadow-sm">
        <div className="flex items-center gap-3">
          <span className="text-yellow-500 text-xl">★★★★★</span>
          <span className="font-medium">4.8 out of 5</span>
        </div>

        <p className="mt-4 text-gray-600">
          Very comfortable and good quality fabric. Worth the price!
        </p>

        <p className="text-sm text-gray-400 mt-2">- Rahul Kumar</p>
      </div>
    </div>
  );
}
