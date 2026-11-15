import { useState } from "react";
import offers from "./Assets/offer_zone";
import Image from "./Assets/display_1.png";
import { Link } from "react-router-dom";
import { IoFlame, IoCopyOutline, IoCheckmark, IoTicketOutline } from "react-icons/io5";
import { FiArrowRight } from "react-icons/fi";

export default function Offers() {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code, e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section id="offer" className="pt-4 sm:pt-6 pb-12 sm:pb-16 w-full px-4 sm:px-6 overflow-hidden relative scroll-mt-20">
      {/* Ambient background blur */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        
        {/* Left Column: Interactive Offer Cards */}
        <div className="flex flex-col gap-4 w-full max-w-[620px]" data-aos="fade-right">
          <div className="mb-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-bold mb-2">
              <IoFlame className="text-red-500 text-sm" />
              <span>Special Offer Zone</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--heading-color)] tracking-tight">
              Exclusive Flash Deals & Discounts
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-1">
              Apply coupon codes at checkout or click any offer to browse qualifying items.
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            {offers.map((offer, index) => (
              <Link
                key={index}
                to={offer.link}
                className="group relative bg-[var(--card-color)] border border-[var(--border-color)] hover:border-[var(--heading-color)]/60 text-[var(--text-color)] rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:-translate-y-0.5"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[var(--heading-color)]/10 text-[var(--heading-color)]">
                      {offer.tag}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[var(--text-color)] group-hover:text-[var(--heading-color)] transition-colors">
                      {offer.title}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] line-clamp-1">
                    {offer.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[var(--border-color)]/60">
                  {/* Coupon Copy Button */}
                  <button
                    onClick={(e) => handleCopy(offer.code, e)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-dashed border-[var(--heading-color)] bg-[var(--heading-color)]/5 hover:bg-[var(--heading-color)]/10 text-[var(--heading-color)] text-xs font-mono font-bold transition-colors cursor-pointer"
                    title="Click to copy coupon code"
                  >
                    <IoTicketOutline size={14} />
                    <span>{offer.code}</span>
                    {copiedCode === offer.code ? (
                      <IoCheckmark size={14} className="text-green-500" />
                    ) : (
                      <IoCopyOutline size={13} className="opacity-70" />
                    )}
                  </button>

                  {/* Discount Callout */}
                  <span className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-extrabold text-xs sm:text-sm shadow-sm">
                    {offer.discount}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Column: Display Image with Floating Elements */}
        <div data-aos="fade-left" className="shrink-0 flex flex-col items-center justify-center relative">
          {/* Ambient Glow */}
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl -z-10" />

          {/* Floating Top Badge */}
          <div className="absolute -top-3 sm:top-2 -right-2 sm:right-0 z-10 px-3.5 py-1.5 bg-[var(--card-color)]/95 backdrop-blur-md border border-[var(--border-color)] rounded-2xl shadow-xl flex items-center gap-2 text-xs font-bold text-[var(--heading-color)]">
            <span className="text-sm">⚡</span>
            <span>Limited Stock Deals</span>
          </div>

          <img
            src={Image}
            alt="Shopee Special Offers"
            className="w-56 sm:w-72 lg:w-[360px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          <Link
            to="/women"
            className="mt-4 px-6 py-2.5 rounded-full bg-[var(--btn-color)] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center gap-2"
          >
            <span>Claim Best Offers</span>
            <FiArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
}
