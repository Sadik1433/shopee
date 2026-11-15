import display5 from "./Assets/display_5.png";
import {
  IoSparkles,
  IoShieldCheckmarkOutline,
  IoRocketOutline,
  IoHeartOutline,
  IoRibbonOutline,
  IoCheckmarkCircle,
} from "react-icons/io5";

export default function About() {
  const highlights = [
    {
      icon: <IoHeartOutline className="text-pink-500 text-xl" />,
      bg: "bg-pink-500/10",
      title: "Who We Are",
      desc: "A customer-first fashion destination bringing you premium outfits, trending designs, and authentic lifestyle goods.",
    },
    {
      icon: <IoSparkles className="text-amber-500 text-xl" />,
      bg: "bg-amber-500/10",
      title: "What We Offer",
      desc: "Carefully curated collections across Men, Women, Kids, and Tech Accessories tailored to match modern lifestyle and budget.",
    },
    {
      icon: <IoShieldCheckmarkOutline className="text-indigo-500 text-xl" />,
      bg: "bg-indigo-500/10",
      title: "Why Choose Us",
      desc: "Express doorstep delivery, guaranteed 7-day easy returns, and 100% secure encrypted payment channels.",
    },
    {
      icon: <IoRibbonOutline className="text-emerald-500 text-xl" />,
      bg: "bg-emerald-500/10",
      title: "Our Vision",
      desc: "To deliver unmatched online shopping experiences with uncompromising quality, fair prices, and exceptional customer joy.",
    },
  ];

  return (
    <section className="text-[var(--text-color)] px-4 sm:px-6 pt-6 sm:pt-8 pb-16 sm:pb-20 flex items-center justify-center w-full relative overflow-hidden scroll-mt-20" id="about">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl w-full mx-auto">
        
        {/* Left: Image with Decorative Floating Badges */}
        <div className="w-full max-w-[320px] sm:max-w-[400px] lg:w-[440px] shrink-0 flex justify-center relative">
          {/* Ambient Glow behind Image */}
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-tr from-[var(--heading-color)]/25 via-pink-500/15 to-transparent rounded-full blur-3xl -z-10" />

          {/* Floating Top Badge */}
          <div className="absolute top-2 left-2 sm:left-4 z-10 px-3.5 py-1.5 bg-[var(--card-color)]/95 backdrop-blur-md border border-[var(--border-color)] rounded-2xl shadow-xl flex items-center gap-2 text-xs font-bold text-[var(--heading-color)]">
            <IoCheckmarkCircle className="text-green-500 text-sm" />
            <span>Verified Platform</span>
          </div>

          <img
            src={display5}
            className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            alt="About Shopee"
            loading="lazy"
          />

          {/* Floating Bottom Badge */}
          <div className="absolute bottom-2 right-2 sm:right-4 z-10 px-3.5 py-1.5 bg-[var(--card-color)]/95 backdrop-blur-md border border-[var(--border-color)] rounded-2xl shadow-xl flex items-center gap-2 text-xs font-bold text-[var(--text-color)]">
            <IoRocketOutline className="text-indigo-500 text-sm" />
            <span>Fast Growing Brand</span>
          </div>
        </div>

        {/* Right: Modern Content & Feature Grid */}
        <div className="flex flex-col gap-6 flex-1 w-full">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[var(--heading-color)]/10 text-[var(--heading-color)] text-xs font-bold mb-2">
              <IoSparkles className="text-amber-400" />
              <span>Our Story & Mission</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--heading-color)] tracking-tight">
              About Shopee E-Commerce
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2 leading-relaxed">
              We are a modern lifestyle marketplace dedicated to bringing premium quality apparel,
              trending accessories, and seamless retail experiences right to your fingertips.
            </p>
          </div>

          {/* 2x2 Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-[var(--card-color)] border border-[var(--border-color)] hover:border-[var(--heading-color)]/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-2.5"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${item.bg}`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-base text-[var(--text-color)]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Stat metrics */}
          <div className="pt-4 border-t border-[var(--border-color)] grid grid-cols-3 gap-2 sm:gap-4 text-center">
            <div className="p-2">
              <p className="text-xl sm:text-2xl font-black text-[var(--heading-color)]">100K+</p>
              <p className="text-[11px] sm:text-xs text-[var(--text-secondary)] mt-0.5">Happy Shoppers</p>
            </div>
            <div className="p-2">
              <p className="text-xl sm:text-2xl font-black text-[var(--text-color)]">500+</p>
              <p className="text-[11px] sm:text-xs text-[var(--text-secondary)] mt-0.5">Quality Products</p>
            </div>
            <div className="p-2">
              <p className="text-xl sm:text-2xl font-black text-green-500">99.4%</p>
              <p className="text-[11px] sm:text-xs text-[var(--text-secondary)] mt-0.5">Satisfaction Rate</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
