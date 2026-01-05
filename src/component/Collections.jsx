import collections from "./Assets/collection";

export default function Collections() {
  return (
    <section className="h-screen px-2 py-12 max-w-6xl mx-auto" id="trending">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">
          Trending Collections
        </h2>
        <p className="text-gray-500 mt-2">
          Explore our most popular collections
        </p>
      </div>

      {/* Collection Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {collections.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="h-64 w-full object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">
                {item.title}
              </h3>
              <p className="text-gray-200 text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
