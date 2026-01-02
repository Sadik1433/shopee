import displyImage1 from "./Assets/display_new.png";
// import bgImage from "./Assets/bg_1.jpg";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    // <div className="relative overflow-hidden  px-2 bg-white">
    //   {/* style={{ backgroundImage: `url(${bgImage})` }} */}
    //   <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
    //     <div className="relative mx-auto max-w-7xl px-2 sm:static sm:px-6">
    //       <div className="sm:max-w-lg">
    //         <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
    //           Summer styles are finally here
    //         </h1>
    //         <p className="mt-4 text-xl text-gray-500">
    //           This year, our new summer collection will shelter you from the
    //           harsh elements of a world that doesn't care if you live or die.
    //         </p>
    //       </div>
    //       <div>
    //         <div className="mt-10">
    //           <div
    //             aria-hidden="true"
    //             className="pointer-events-none lg:absolute  lg:inset-y-0 lg: lg:w-full lg:max-w-10xl"
    //           >
    //             <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-2 lg:-translate-y-1/2">
    //               <div className="flex ">
    //                 <div>
    //                   <div className="w-80 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
    //                     <img
    //                       alt="display_1"
    //                       src={displyImage1}
    //                       className="size-full object-cover"
    //                     />
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col lg:flex-row">
      <div className="flex items-center justify-center gap-3">
        <div className="relative  gap-4 p-5">
          <div className="absolute top-1/3  -right-4 ">
            <img
              className=" object-cover "
              src="https://i.ibb.co/VL11ck4/Arrow-3.png"
              alt=""
            />
          </div>
          <h1 className="text-5xl text-black justify-start font-[Gilroy] py-2">
            Feel luxurious with premium quality outfits
          </h1>
          <p className="text-black py-4">
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
        // src="https://i.ibb.co/nMDCgHT/Group-37606.png"
        className="h-150"
         alt="" />
      </div>
    </div>
  );
}
