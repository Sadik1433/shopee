import displyImage1 from "./Assets/display-1.png";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <section id="home">
      <div className="min-h-screen flex flex-row justify-center items-center">
        <div className="flex items-center justify-center gap-3">
          <div className="flex justify-center items-center w-[450px]">
            <img
              src={displyImage1}
              className="h-120 w-80 object-contain opacity-100"
              loading="lazy"
              alt="display-image"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl text-[var(--heading-color)] justify-start font-bold py-2 tracking-tight">
              Feel luxurious with premium quality outfits
            </h1>
            <p className="text-[var(--text-secondary)] py-4 text-lg max-w-lg">
              With so much demand for a style of board where every aspect of it
              flews, we created a new series
            </p>
            <div className="flex flex-row justify-items-start">
              <button className="btn flex flex-row rounded-xl text-white border-none ">
                Explore Now <FaArrowRight className=" text-2xl p-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
