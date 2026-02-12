import offers from "./Assets/offer_zone";
import Image from "./Assets/profile_bg-1.png";

export default function Offers() {
  return (
    <section id="offer"
      className="h-screen px-0 py-12"
    >
      <h2 className="text-4xl font-bold mb-5 text-[var(--heading-color)] ml-9">Special Offers</h2>
      <div className="flex justify-evenly">
        <div className="flex gap-4 items-center overflow-visible ">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`${offer.bg}   max-w-[190px] h-[280px] text-white rounded-2xl p-6 shadow-lg flex flex-col justify-between `}
            >
              <div>
                <h3 className="text-xl font-semibold">{offer.title}</h3>
                <p className="text-2xl  font-bold mt-2">{offer.discount}</p>
                <p className="text-sm mt-2 opacity-90">{offer.desc}</p>
              </div>

              <button className="mt-6 bg-white text-gray-900 px-5 py-2 rounded-full font-semibold w-fit hover:scale-105 transition">
                Shop Now →
              </button>
            </div>
          ))}
        </div>
        <div>
          <img src={Image} alt="display" className="w-[350px]" />
        </div>
      </div>
    </section>
  );
}
