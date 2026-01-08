import { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "./context/ShopContext.jsx";
import TrendingCollection from "./TrendingCollections.jsx";
import FooterSection from "./FooterSection.jsx";

export const sizes = ["S", "M", "L", "XL", "XXL"];

export const colors = [
  { name: "Royal Brown", class: "bg-[#654321]" },
  { name: "Light Gray", class: "bg-gray-200" },
  { name: "Steel Blue", class: "bg-[#4682B4]" },
  { name: "Navy", class: "bg-navy-900" },
];

import {
  IoHeart,
  IoHeartOutline,
  IoShareSocialOutline,
  IoStar,
} from "react-icons/io5";

const Display = () => {
  const { all_product, addToCart } = useContext(ShopContext);
  const { productId } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const product = all_product.find((item) => item.id === Number(productId));
  const [selectedSize, setSelectedSize] = useState("8");
  const [selectedColor, setSelectedColor] = useState("Royal Brown");

  return (
    <div className="relative top-16  h-screen py-2 px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
        {/* Image Section */}
        <div className="flex w-[550px] border-r px-2 py-4 ">
          <div className="flex flex-col w-30 mt-7 ">
            <img
              src={product.image}
              alt="image1"
              className="max-w-40px  object-cover aspect-square rounded-md mt-3"
            />
            <img
              src={product.image}
              alt="image1"
              className="max-w-40px  object-cover aspect-square rounded-md mt-3   "
            />
            <img
              src={product.image}
              alt="image1"
              className="max-w-40px  object-cover aspect-square rounded-md mt-3"
            />
            <img
              src={product.image}
              alt="image1"
              className="max-w-40px  object-cover aspect-square rounded-md mt-3  "
            />
          </div>
          <div className="flex">
            <div className="relative top-10  px-5  overflow-hidden rounded-md">
              <img
                src={product.image}
                alt="Product view"
                className="h-[480px] object-cover border-blue-200  rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-[15px] ml-[20px]">
            <div className="flex flex-col gap-[10px]">
              <button className="rounded-md w-max text-gray-600 p-2.5 ">
                <IoShareSocialOutline className="w-5 h-5" />
              </button>
              <button
                className="rounded-md w-max text-gray-600 p-2.5 "
                onClick={() => setIsFavorite(!isFavorite)}
              >
                {isFavorite ? (
                  <IoHeart className="w-5 h-5 text-red-500" />
                ) : (
                  <IoHeartOutline className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col relative right-15 ">
          <div className="flex justify-between items-start">
            <div className="w-full">
              <p className="text-gray-400 dark:text-slate-400 text-[0.9rem]">
                Home / {product.category} / {product.name}
              </p>
              <h1 className="text-[1.6rem] dark:text-[#abc2d3] md:text-[1.8rem] text-gray-800 font-semibold mb-3">
                {product.name}
              </h1>
              <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-1 md:gap-4 mb-4">
                <div className="flex items-center">
                  <span className="text-[1.4rem] font-semibold dark:text-[#abc2d3] text-gray-800">
                    Rs . {product.price.toFixed(2)}
                  </span>
                  <span className="text-gray-400 dark:text-slate-400 text-[1rem] line-through ml-2">
                    Rs . {product.actualPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <IoStar className="text-yellow-400 text-[1.1rem]" />
                  <span className="text-gray-800 dark:text-[#abc2d3] font-semibold">
                    {product.rating}
                  </span>
                  <span className="text-gray-500 dark:text-slate-400">
                    (1,238 Sold)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6 border-t-[2px] dark:border-slate-700 border-gray-200 border-dashed mt-1 pt-6">
            <h2 className="text-gray-700 dark:text-[#abc2d3] font-semibold mb-2">
              Description:
            </h2>
            <p className="text-[0.9rem] dark:text-slate-400 text-gray-600">
              Boba etiam ut bulla tea est potus electus singulari compositione
              saporum et textuum, quae in Taiwan annis 1980 orta sunt. Boba
              refert ad pitas marnicas tapiocas in fundo potus inventas, quae
              typice lacte tea nigro sapiuntur.
              <button className="text-blue-600 hover:underline ml-1">
                See More...
              </button>
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-medium dark:text-[#abc2d3] text-gray-400">
                Color:{" "}
                <span className="text-gray-700 dark:text-slate-400 font-semibold">
                  {selectedColor}
                </span>
              </h2>
            </div>
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={` w-20 h-10 rounded-md border-2 transition-all duration-300 ${
                    selectedColor === color.name
                      ? "border-[#0FABCA] p-1"
                      : "border-transparent"
                  } `}
                  aria-label={`Select ${color.name} color`}
                >
                  <div
                    className={`w-full h-full rounded-md transition-all duration-300 ${color.class}`}
                  ></div>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-medium dark:text-[#abc2d3] text-gray-400">
                Size:{" "}
                <span className="font-semibold dark:text-slate-400 text-gray-700">
                  {selectedSize}
                </span>
              </h2>
              <button className="text-gray-600 text-[0.8rem] dark:text-[#abc2d3] underline">
                View Size Chart
              </button>
            </div>
            <div className="flex w-full flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 max-w-[60px] grow rounded-md border ${
                    selectedSize === size
                      ? "border-[#0FABCA] bg-[#0FABCA] text-white"
                      : "border-gray-200 dark:border-slate-700 dark:text-[#abc2d3] hover:border-[#0FABCA]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-auto">
            <button
              onClick={() => addToCart(productId)}
              className="grow py-3 px-6 bg-[#0FABCA] hover:bg-[#0FABCA]/90 rounded-md text-white"
            >
              Add To Cart
            </button>
            <button className="grow py-3 px-6 border dark:border-slate-700 dark:hover:bg-slate-900 dark:text-[#abc2d3] border-gray-300 text-gray-600 rounded-md">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Display;
