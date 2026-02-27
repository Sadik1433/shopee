import offers from "./Assets/offer_zone";
import Image from "./Assets/profile_bg-1.png";

export default function Offers() {
  return (
    <section id="offer" className="px-0 py-4">
      <h2 className="text-4xl font-bold mb-5 text-[var(--heading-color)] ml-9">
        Special Offers
      </h2>
      <div className="flex justify-evenly">
        <div className="flex flex-col gap-4 mx-auto overflow-visible ">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`${offer.bg} min-w-[600px]  text-[var(--text-color)] rounded-2xl px-5 py-2 border-1 shadow-lg flex flex-col hover:scale-y-80`}
            >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-italic text-[var(--heading-secondary)]">
                    {offer.title}
                  </h3>
                  <p className="text-1xl font-bold  ml-3 text-[var(--accent-color)] ">
                    {offer.discount}
                  </p>
                </div>
                <div>
                  <p className="text-sm mt-2 opacity-50">{offer.desc}</p>
                </div>
              </div>
          ))}
        </div>
        <div>
          <img src={Image} alt="display" className="w-[350px]" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
