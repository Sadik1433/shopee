export default function About() {
  return (
    <section className="h-screen bg-sky-50 px-6 py-12 flex items-center" id="about">
      <div className="max-w-7xl mx-auto w-full">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            About Shopee
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We are a modern e-commerce platform bringing you quality products,
            trending collections, and a seamless shopping experience.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Who We Are
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Shopee is a customer-focused e-commerce platform dedicated to
              delivering stylish and affordable products for everyone.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              What We Offer
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              From fashion and accessories to trending collections, we curate
              products that match your lifestyle and budget.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Why Choose Us
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Easy shopping, secure payments, fast delivery, and dedicated
              support make us a trusted choice for online shoppers.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our vision is to become a one-stop destination for quality
              products while delivering exceptional customer experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
