import collections from "./Assets/collection";

export default function Collections() {
  return (
    <section className="px-5 py-5 max-w-[1200px] mx-auto relative left-1 " id="trending">
      <div className="mb-2">
        <h2 className="text-3xl font-bold mb-4 text-[var(--heading-color)] italic">
          Trending Collections
        </h2>
        <p className="text-[var(--text-color)] text-lg">
          Explore our most popular collections
        </p>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {collections.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              decoding="async"
              loading="lazy"
              className="h-100 w-full object-cover transform group-hover:scale-110 transition duration-500"
            />

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
