import displyImage1 from "./Assets/display_new.png";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <section id="home">
      <div className="flex flex-col lg:flex-row ">
        <div className="flex items-center justify-center gap-3">
          <div className="relative  gap-4 p-5">
            <div className="absolute top-1/3  -right-4 ">
              <img
                className=" object-cover "
                src="https://i.ibb.co/VL11ck4/Arrow-3.png"
                alt=""
              />
            </div>
            <h1 className="text-5xl text-[#B6F500] justify-start font-[Gilroy] py-2">
              Feel luxurious with premium quality outfits
            </h1>
            <p className="text-[#B1F0F7] py-4">
              With so much demand for a style of board where every aspect of it
              flews, we created a new series
            </p>
            <button className="btn flex flex-row justify-items-start  bg-[#33644A] px-4 py-4 rounded-xl text-white ">
              Explore Now <FaArrowRight className=" text-2xl p-1" />
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={displyImage1}
            className="h-150"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
