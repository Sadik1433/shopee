import collections from "./Assets/collection";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { IoSparkles } from "react-icons/io5";

const aosAnimations = ["fade-right", "fade-left", "fade-up", "fade-down"];

export default function Collections() {
  return (
    <section
      className="px-4 sm:px-6 pt-6 sm:pt-8 pb-12 sm:pb-16 max-w-[1200px] mx-auto w-full scroll-mt-20"
      id="trending"
    >
      {/* Section Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--heading-color)]/10 text-[var(--heading-color)] text-xs font-bold mb-2">
            <IoSparkles className="text-amber-400" />
            <span>Curated For You</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--heading-color)] tracking-tight">
            Trending Collections
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-1 max-w-xl">
            Click any collection to explore handpicked styles, new arrivals, and category specials.
          </p>
        </div>

        <span className="text-xs sm:text-sm font-semibold text-[var(--text-secondary)]">
          {collections.length} Categories
        </span>
      </div>

      {/* Grid of collections - Each card clicks directly to its exact page */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {collections.map((item, index) => (
          <Link
            key={item.id}
            to={item.link}
            data-aos={aosAnimations[index % aosAnimations.length]}
            className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-[var(--border-color)] bg-[var(--card-color)] block h-[260px] sm:h-[280px]"
            title={`Browse ${item.title}`}
          >
            {/* Background Image with Hover Zoom */}
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent group-hover:from-black/90 transition-colors" />

            {/* Category Pill Badge on Top Right */}
            <div className="absolute top-3 right-3 z-10">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-white/20 text-white backdrop-blur-md border border-white/30 shadow-xs">
                {item.badge || item.categoryName}
              </span>
            </div>

            {/* Content Details on Bottom */}
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex flex-col justify-end">
              <span className="text-xs text-indigo-300 font-semibold uppercase tracking-wider mb-1">
                {item.categoryName}
              </span>
              <h3 className="text-white text-lg sm:text-xl font-bold leading-tight group-hover:text-indigo-200 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm mt-1 line-clamp-1 opacity-90">
                {item.description}
              </p>

              {/* Click to Redirect Pill Button */}
              <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
                <span className="underline underline-offset-4 decoration-indigo-400">View Collection</span>
                <FiArrowUpRight size={16} className="text-indigo-300" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
