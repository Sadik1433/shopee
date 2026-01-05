export default function Footer() {
  return (
    <footer className="bg-[#0f1e4d] text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Shopee</h2>
          <p className="text-sm leading-relaxed">
            Discover premium quality outfits and trending collections
            curated just for you.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
            <li className="hover:text-white cursor-pointer">Categories</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Customer Service
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
            <li className="hover:text-white cursor-pointer">Shipping</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Subscribe
          </h3>
          <p className="text-sm mb-3">
            Get updates on offers & new arrivals
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="px-3 py-2 rounded-l-md text-gray-900 w-full outline-none"
            />
            <button className="bg-green-500 px-4 rounded-r-md text-white font-semibold hover:bg-green-600">
              Go
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 text-center py-4 text-sm">
        © {new Date().getFullYear()} Shopee. All rights reserved.
      </div>
    </footer>
  );
}
