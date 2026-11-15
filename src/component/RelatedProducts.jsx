import { useContext, useMemo, useRef } from "react";
import { ShopContext } from "../context/ShopContext";
import Item from "./Item.jsx";
import { IoChevronBack, IoChevronForward, IoSparkles } from "react-icons/io5";

export default function RelatedProducts({ badge, category, heading }) {
  const { all_product } = useContext(ShopContext);
  const scrollRef = useRef(null);

  const displayProducts = useMemo(() => {
    if (badge && category) {
      return all_product.filter(
        (item) => item.badge === badge && item.category === category
      );
    } else {
      return [...all_product]
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);
    }
  }, [all_product, badge, category]);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollDistance = container.clientWidth > 640 ? 480 : 240;
      container.scrollBy({
        left: direction === "left" ? -scrollDistance : scrollDistance,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-[1200px] mt-10 sm:mt-16 px-3 sm:px-6 mx-auto w-full overflow-hidden">
      {/* Section Header with Title and Subtitle */}
      <div className="border-b border-[var(--border-color)] pb-3 px-2 mb-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--heading-color)]/10 text-[var(--heading-color)] text-xs font-bold mb-2 transition-transform duration-300 hover:scale-105">
          <IoSparkles className="text-amber-400" />
          <span>Top Picks & Suggestions</span>
        </div>
        <div className="flex justify-between items-end flex-wrap gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[var(--heading-color)] tracking-tight">
              {heading || "Discover Related Products"}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
              Top trending pieces hand-selected to elevate your everyday looks.
            </p>
          </div>
          <span className="text-xs font-semibold text-[var(--text-secondary)] hidden sm:inline">
            Swipe or use arrows to explore
          </span>
        </div>
      </div>

      {/* Carousel container with small, sleek overlay arrows */}
      <div className="relative group/carousel my-2">
        {/* Left Carousel Arrow (Small, sleek glass pill) */}
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[var(--card-color)]/90 hover:bg-[var(--heading-color)] text-[var(--heading-color)] hover:text-white backdrop-blur-md border border-[var(--border-color)] shadow-md hover:shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center drop-shadow-sm opacity-85 group-hover/carousel:opacity-100"
          title="Previous product"
          aria-label="Scroll left to previous product"
        >
          <IoChevronBack size={16} />
        </button>

        {/* Scrollable Products List with Hidden Scrollbars and Smooth Behavior */}
        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-5 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth pb-4 sm:pb-6 px-1 sm:px-2 py-3"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {displayProducts.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              description={item.description}
              price={item.price}
              actual={item.actualPrice}
              rating={item.rating}
              badge={item.badge}
              className="min-w-[175px] sm:min-w-[210px] max-w-[210px] shrink-0"
            />
          ))}
        </div>

        {/* Right Carousel Arrow (Small, sleek glass pill) */}
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[var(--card-color)]/90 hover:bg-[var(--heading-color)] text-[var(--heading-color)] hover:text-white backdrop-blur-md border border-[var(--border-color)] shadow-md hover:shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center drop-shadow-sm opacity-85 group-hover/carousel:opacity-100"
          title="Next product"
          aria-label="Scroll right to next product"
        >
          <IoChevronForward size={16} />
        </button>
      </div>
    </div>
  );
}
