import displyImage1 from "./Assets/display-1.png";
import { Link as ScrollLink } from "react-scroll";
import { IoSparkles, IoShieldCheckmark, IoStar } from "react-icons/io5";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <section id="home" className="w-full relative overflow-hidden scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="min-h-[calc(100vh-70px)] pt-20 sm:pt-24 lg:pt-16 pb-12 flex flex-col lg:flex-row justify-center items-center px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 w-full max-w-6xl">
          
          {/* Left / Top: Display Image (Maintained 100% identical and positioned slightly toward the bottom) */}
          <div className="relative flex justify-center items-center w-full max-w-[340px] sm:max-w-[420px] lg:w-[480px] shrink-0 mt-4 sm:mt-6 lg:mt-8 translate-y-3 sm:translate-y-6 lg:translate-y-10">
            {/* Ambient Aura behind the image */}
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-tr from-[var(--heading-color)]/25 via-pink-500/20 to-cyan-400/20 rounded-full blur-3xl -z-10 pointer-events-none" />

            {/* Floating Top Badge */}
            <div className="absolute top-4 left-2 sm:left-6 z-10 px-3.5 py-1.5 bg-[var(--card-color)]/95 backdrop-blur-md border border-[var(--border-color)] rounded-full shadow-lg flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--heading-color)]">
              <span className="text-base">🔥</span>
              <span>Trending Collection</span>
            </div>

            {/* Main Product Image (Unchanged, placed slightly lower towards the bottom) */}
            <img
              src={displyImage1}
              className="h-80 sm:h-[420px] lg:h-[500px] w-auto max-w-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              loading="lazy"
              alt="Premium Quality Outfits Display"
            />

            {/* Floating Bottom Badge */}
            <div className="absolute bottom-2 right-2 sm:right-6 z-10 px-3.5 py-1.5 bg-[var(--card-color)]/95 backdrop-blur-md border border-[var(--border-color)] rounded-full shadow-lg flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--text-color)]">
              <IoShieldCheckmark className="text-green-500 text-base" />
              <span>100% Authentic Quality</span>
            </div>
          </div>

          {/* Right / Bottom: Hero Content */}
          <div className="flex flex-col gap-4 text-center lg:text-left flex-1 max-w-xl">
            {/* Tag Badge */}
            <div className="inline-flex items-center justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--heading-color)]/10 border border-[var(--heading-color)]/25 text-[var(--heading-color)] text-xs sm:text-sm font-bold tracking-wide shadow-xs">
                <IoSparkles className="text-amber-400 text-sm" />
                <span>New Season Arrivals • Exclusive Edition</span>
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[var(--text-color)] font-extrabold tracking-tight leading-tight">
              Feel Luxurious With{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Premium Quality
              </span>{" "}
              Outfits
            </h1>

            {/* Refined and Compelling Description */}
            <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              Crafted for modern elegance and all-day comfort. Explore our newly released
              collections made with breathable fabrics, tailored fits, and timeless designs
              to elevate your everyday style.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <ScrollLink
                to="trending"
                spy={true}
                smooth={true}
                offset={-65}
                duration={500}
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[var(--btn-color)] text-white font-bold hover:shadow-lg hover:shadow-[var(--btn-color)]/30 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base group">
                  <span>Explore Collections</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </ScrollLink>

              <ScrollLink
                to="offer"
                spy={true}
                smooth={true}
                offset={-65}
                duration={500}
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto px-7 py-3.5 rounded-2xl border-2 border-[var(--border-color)] bg-[var(--card-color)] text-[var(--text-color)] font-bold hover:border-[var(--heading-color)] hover:text-[var(--heading-color)] hover:bg-[var(--input-color)] active:scale-95 transition-all cursor-pointer text-sm sm:text-base">
                  Special Offers
                </button>
              </ScrollLink>
            </div>

            {/* Trust Metrics / Social Proof */}
            <div className="pt-4 border-t border-[var(--border-color)] mt-2 grid grid-cols-3 gap-2 sm:gap-4 text-center lg:text-left">
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-1 text-yellow-500 text-sm font-bold">
                  <IoStar />
                  <span className="text-[var(--text-color)] font-extrabold text-base">4.9/5</span>
                </div>
                <p className="text-[11px] sm:text-xs text-[var(--text-secondary)] mt-0.5">15K+ Reviews</p>
              </div>

              <div>
                <p className="font-extrabold text-base text-[var(--text-color)]">50K+</p>
                <p className="text-[11px] sm:text-xs text-[var(--text-secondary)] mt-0.5">Happy Shoppers</p>
              </div>

              <div>
                <p className="font-extrabold text-base text-[var(--heading-color)]">FREE</p>
                <p className="text-[11px] sm:text-xs text-[var(--text-secondary)] mt-0.5">Fast Delivery</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
