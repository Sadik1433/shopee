import { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";
import FooterSection from "./FooterSection.jsx";
import ProductTabs from "./ProductTabs.jsx";
import ReviewsSection from "./Reviews.jsx";
import DeliveryInfo from "./Delivery.jsx";
import RelatedProducts from "./RelatedProducts.jsx";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";


import {
  IoHeart,
  IoHeartOutline,
  IoShareSocialOutline,
  IoStar,
} from "react-icons/io5";

const Display = () => {
  const { all_product, addToCart, watchlist, toggleWatchlist } = useContext(ShopContext);
  const { productId } = useParams();
  const isFavorite = watchlist.includes(Number(productId));
  const product = all_product.find((item) => item.id === Number(productId));
  const [selectedSize, setSelectedSize] = useState("8");
  const [selectedColor, setSelectedColor] = useState("Royal Brown");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full relative left-1 top-16 bg-[var(--bg-color)] ">
      <div className="pt-2 sticky top-16 z-10 ">
        <button
          onClick={() => navigate('/')}
          className="p-2"
        >
          <IoArrowBack size={30} />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-1 border-t-1 border-[var(--border-color)]">
        <div className="relative flex w-[550px] h-[480px] border-r px-2">
          <div className="flex flex-col h-full mt-[30px]  ">
            <img
              src=  {product.image}
              alt="image1"
              className="object-cover aspect-square rounded-md mt-3 w-30 min-h-[110px]"
              loading="lazy"
            />
            <img
              src={product.image}
              alt="image1"
              className="object-cover aspect-square rounded-md mt-3 w-30 min-h-[110px]"
              loading="lazy"
            />
            <img
              src={product.image}
              alt="image1"
              loading="lazy"
              className="object-cover aspect-square rounded-md mt-3 w-30 min-h-[110px]"
            />
            <img
              src={product.image}
              alt="image1"
              loading="lazy"
              className=" object-cover aspect-square rounded-md mt-3 w-30 min-h-[110px]"
            />
          </div>
          <div className="flex">
            <div className="relative top-10  px-5  overflow-hidden rounded-md">
              <img
                src={product.image}
                alt="Product view"
                loading="lazy"
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
                onClick={() => toggleWatchlist(productId)}
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

        <div className="flex flex-col w-[550px]">
          <div className="flex justify-between items-start">
            <div className="w-full">
              <p className="text-[var(--text-secondary)] text-[0.9rem] mb-2 font-medium">
                Home / {product.category} / {product.name}
              </p>
              <h1 className="text-3xl text-[var(--text-color)] font-bold mb-4 tracking-tight">
                {product.name}
              </h1>
              <div className="flex flex-row items-center justify-between w-full mb-1">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-[var(--heading-color)]">
                    Rs . {product.price.toFixed(2)}
                  </span>
                  <span className="text-[var(--text-secondary)] text-lg line-through">
                    Rs . {product.actualPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-[var(--input-color)] px-3 py-1 rounded-full">
                  <IoStar className="text-yellow-400 text-lg" />
                  <span className="text-[var(--text-color)] font-bold">
                    {product.rating}
                  </span>
                  <span className="text-[var(--text-secondary)] text-sm">
                    (1,238 Sold)
                  </span>
                </div>
              </div>
            </div>
          </div>  

          <div className="mb-3 border-t border-[var(--border-color)] border-dashed pt-3">
            <h2 className="text-[var(--text-color)] font-bold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 text-bold rounded-full bg-[var(--heading-color)]"></span>
              Description
            </h2>
            <p className="text-[0.95rem] text-[var(--text-secondary)] leading-relaxed">   
              Boba etiam ut bulla tea est potus electus singulari compositione
              saporum et textuum, quae in Taiwan annis 1980 orta sunt. Boba
              refert ad pitas marnicas tapiocas in fundo potus inventas, quae
              typice lacte tea nigro sapiuntur.
              <button className="text-[var(--heading-color)] font-semibold hover:underline ml-2">
                See More...
              </button>
            </p>
          </div>

          {product.colors && product.colors.length > 0 && (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-medium dark:text-[#abc2d3] text-gray-400">
                  Color:
                  <span className="text-gray-700 dark:text-slate-400 font-semibold">
                    {selectedColor}
                  </span>
                </h2>
              </div>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={` w-20 h-10 rounded-md border-2 transition-all duration-300 ${selectedColor === color.name
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
          )}

          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-10">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-medium dark:text-[#abc2d3] text-gray-400">
                  Size:
                  <span className="font-semibold dark:text-slate-400 text-gray-700">
                    {selectedSize}
                  </span>
                </h2>
                <button className="text-gray-600 text-[0.8rem] dark:text-[#abc2d3] underline">
                  View Size Chart
                </button>
              </div>
              <div className="flex w-full flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 max-w-[60px] grow rounded-md border ${selectedSize === size
                      ? "border-[#0FABCA] bg-[#0FABCA] text-white"
                      : "border-gray-200 dark:border-slate-700 dark:text-[#abc2d3] hover:border-[#0FABCA]"
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-row gap-4 mt-auto">
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
      <ProductTabs />
      <ReviewsSection />
      <DeliveryInfo />
      <RelatedProducts heading="Trending" badge="Trending" category={product.category} />
      <RelatedProducts heading="Offers" badge="Offers" category={product.category} />
      <FooterSection />
    </div>
  );
};

export default Display;
