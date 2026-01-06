import collections from "./Assets/collection";

export default function Collections() {
  return (
    <section className="h-screen px-2  max-w-6xl mx-5" id="trending">
      {/* Heading */}
      <div className="text-left mb-1 ">
        <h2 className="text-2xl font-bold text-green-800 italic">
          Trending Collections
        </h2>
        <p className="text-gray-500 mt-1 ml-6">
          Explore our most popular collections
        </p>
      </div>

      {/* Collection Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
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
