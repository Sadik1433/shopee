export default function Footer() {
  return (
    <footer className="mt-16 bg-[var(--bg-color)] border-t border-[var(--border-color)]">
      <div className="text-[var(--text-color)] max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-[var(--heading-color)] mb-3">Shopee</h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Discover premium quality outfits and trending collections
            curated just for you.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[var(--heading-color)] mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
            <li className="hover:text-[var(--heading-color)] transition-colors cursor-pointer">Home</li>
            <li className="hover:text-[var(--heading-color)] transition-colors cursor-pointer">Shop</li>
            <li className="hover:text-[var(--heading-color)] transition-colors cursor-pointer">Categories</li>
            <li className="hover:text-[var(--heading-color)] transition-colors cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[var(--heading-color)] mb-3">
            Customer Service
          </h3>
          <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
            <li className="hover:text-[var(--heading-color)] transition-colors cursor-pointer">FAQ</li>
            <li className="hover:text-[var(--heading-color)] transition-colors cursor-pointer">Returns</li>
            <li className="hover:text-[var(--heading-color)] transition-colors cursor-pointer">Shipping</li>
            <li className="hover:text-[var(--heading-color)] transition-colors cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[var(--heading-color)] mb-3">
            Subscribe
          </h3>
          <p className="text-sm text-[var(--text-secondary)] mb-3">
            Get updates on offers & new arrivals
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="px-3 py-2 rounded-l-xl text-sm bg-[var(--input-color)] border border-[var(--border-color)] text-[var(--text-color)] w-full outline-none focus:border-[var(--heading-color)] transition-colors"
            />
            <button className="bg-green-500 px-4 rounded-r-xl text-white font-semibold text-sm hover:bg-green-600 transition-colors cursor-pointer shrink-0">
              Go
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--border-color)] text-center py-4 text-xs sm:text-sm text-[var(--text-secondary)]">
        © {new Date().getFullYear()} Shopee. All rights reserved.
      </div>
    </footer>
  );
}
