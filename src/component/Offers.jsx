import offers from "./Assets/offer_zone";
import girlImage from "./Assets/display_4.png";

export default function Offers() {
  return (
    <section id="offer"
      className="h-screen px-0 py-2 "
    >
      <h2 className="text-4xl font-bold mb-8 text-blue-700 ml-9 ">Special Offers</h2>
      <div className="flex">
        <div>
          <img src={girlImage} alt="display" className="w-[400px]" />
        </div>
        <div className="flex gap-4 items-center overflow-x-scroll md:overflow-visible ">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`${offer.bg}   max-w-[190px] h-[280px] text-white rounded-2xl p-6 shadow-lg flex flex-col justify-between `}
            >
              <div>
                <h3 className="text-xl font-semibold">{offer.title}</h3>
                <p className="text-2xl font-bold mt-2">{offer.discount}</p>
                <p className="text-sm mt-2 opacity-90">{offer.desc}</p>
              </div>

              <button className="mt-6 bg-white text-gray-900 px-5 py-2 rounded-full font-semibold w-fit hover:scale-105 transition">
                Shop Now →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
