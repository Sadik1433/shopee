import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";
import FooterSection from "./FooterSection.jsx";
import ProductTabs from "./ProductTabs.jsx";
import ReviewsSection from "./Reviews.jsx";
import DeliveryInfo from "./Delivery.jsx";
import RelatedProducts from "./RelatedProducts.jsx";
import { IoArrowBack, IoHeart, IoHeartOutline, IoShareSocialOutline, IoStar } from "react-icons/io5";

const Display = () => {
  const { all_product, addToCart, watchlist, toggleWatchlist, activeUser } = useContext(ShopContext);
  const { productId } = useParams();
  const isFavorite = watchlist.includes(Number(productId));
  const product = all_product.find((item) => item.id === Number(productId));
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes && product.sizes.length > 0 ? product.sizes[0] : "");
      setSelectedColor(product.colors && product.colors.length > 0 ? product.colors[0].name : "");
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center gap-4 text-[var(--text-color)] pt-20">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-[var(--btn-color)] text-white rounded-xl font-bold"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  const handleBuyNow = () => {
    if (!activeUser) {
      navigate("/login");
      return;
    }
    navigate("/cart", {
      state: {
        buyNowProduct: {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          category: product.category,
          colors: product.colors || [],
          sizes: product.sizes || [],
          selectedColor,
          selectedSize,
        },
      },
    });
  };

  return (
    <div className="min-h-screen w-full relative top-16 bg-[var(--bg-color)] pb-16">
      {/* Sticky Back Header */}
      <div className="pt-2 px-4 sm:px-6 sticky top-16 z-10 bg-[var(--bg-color)]/95 backdrop-blur-md pb-2">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-xl text-[var(--text-color)] hover:bg-[var(--input-color)] transition-colors cursor-pointer"
          aria-label="Go back"
        >
          <IoArrowBack size={26} />
        </button>
      </div>

      {/* Main Product Section: 2 cols on lg (exact desktop layout), 1 col on mobile/tablet */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 border-t border-[var(--border-color)] pt-6">
        
        {/* Left Column: Thumbnails + Main Image + Actions */}
        <div className="relative flex flex-col-reverse sm:flex-row w-full lg:w-[550px] lg:h-[480px] border-b lg:border-b-0 lg:border-r border-[var(--border-color)] pb-6 lg:pb-0 px-2 gap-3 justify-center items-center sm:items-start mx-auto">
          {/* Thumbnails */}
          <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible shrink-0 mt-3 sm:mt-[30px] max-w-full">
            {[1, 2, 3, 4].map((idx) => (
              <img
                key={idx}
                src={product.image}
                alt={`thumbnail-${idx}`}
                className="object-cover aspect-square rounded-md w-16 h-16 sm:w-20 sm:h-20 lg:w-30 lg:min-h-[100px] border border-[var(--border-color)] shadow-xs"
                loading="lazy"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 flex justify-center items-center w-full max-w-[400px] sm:max-w-none">
            <div className="relative sm:top-6 lg:top-10 px-2 sm:px-5 overflow-hidden rounded-xl">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="max-h-[320px] sm:max-h-[400px] lg:h-[480px] w-auto object-contain rounded-xl drop-shadow-md"
              />
            </div>
          </div>

          {/* Share & Wishlist buttons */}
          <div className="flex sm:flex-col justify-between sm:justify-start gap-3 self-end sm:self-auto shrink-0 sm:ml-2">
            <button
              className="rounded-xl text-gray-600 dark:text-gray-300 p-2.5 hover:bg-[var(--input-color)] transition-colors cursor-pointer"
              aria-label="Share"
            >
              <IoShareSocialOutline className="w-5 h-5" />
            </button>
            <button
              className="rounded-xl text-gray-600 dark:text-gray-300 p-2.5 hover:bg-[var(--input-color)] transition-colors cursor-pointer"
              onClick={() => toggleWatchlist(productId)}
              aria-label="Toggle wishlist"
            >
              {isFavorite ? (
                <IoHeart className="w-5 h-5 text-red-500" />
              ) : (
                <IoHeartOutline className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Details & Actions */}
        <div className="flex flex-col w-full lg:w-[550px] mx-auto">
          <div className="flex justify-between items-start">
            <div className="w-full">
              <p className="text-[var(--text-secondary)] text-xs sm:text-sm mb-2 font-medium">
                Home / {product.category} / {product.name}
              </p>
              <h1 className="text-2xl sm:text-3xl text-[var(--text-color)] font-bold mb-3 tracking-tight">
                {product.name}
              </h1>
              <div className="flex flex-row items-center justify-between w-full mb-3 flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-xl sm:text-2xl font-bold text-[var(--heading-color)]">
                    Rs . {product.price.toFixed(2)}
                  </span>
                  <span className="text-[var(--text-secondary)] text-sm sm:text-base line-through">
                    Rs . {product.actualPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-[var(--input-color)] px-3 py-1 rounded-full text-sm">
                  <IoStar className="text-yellow-400 text-base" />
                  <span className="text-[var(--text-color)] font-bold">
                    {product.rating}
                  </span>
                  <span className="text-[var(--text-secondary)] text-xs">
                    (1,238 Sold)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4 border-t border-[var(--border-color)] border-dashed pt-3">
            <h2 className="text-[var(--text-color)] font-bold mb-2 flex items-center gap-2 text-sm sm:text-base">
              <span className="w-2 h-2 rounded-full bg-[var(--heading-color)]"></span>
              Description
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Boba etiam ut bulla tea est potus electus singulari compositione
              saporum et textuum, quae in Taiwan annis 1980 orta sunt. Boba
              refert ad pitas marnicas tapiocas in fundo potus inventas, quae
              typice lacte tea nigro sapiuntur.
              <button className="text-[var(--heading-color)] font-semibold hover:underline ml-1 cursor-pointer">
                See More...
              </button>
            </p>
          </div>

          {/* Color Selector */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-medium text-xs sm:text-sm text-[var(--text-secondary)]">
                  Color:
                  <span className="text-[var(--text-color)] font-semibold ml-1">
                    {selectedColor}
                  </span>
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-14 sm:w-16 h-8 sm:h-9 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                      selectedColor === color.name
                        ? "border-[#0FABCA] p-0.5 scale-105"
                        : "border-transparent"
                    }`}
                    aria-label={`Select ${color.name} color`}
                  >
                    <div
                      className={`w-full h-full rounded-lg transition-all ${color.class}`}
                    ></div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size Selector */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-medium text-xs sm:text-sm text-[var(--text-secondary)]">
                  {product.category === "electronics" ? "Specification:" : "Size:"}
                  <span className="font-semibold text-[var(--text-color)] ml-1">
                    {selectedSize}
                  </span>
                </h2>
                {product.category !== "electronics" && (
                  <button className="text-xs text-[var(--text-secondary)] underline cursor-pointer">
                    View Size Chart
                  </button>
                )}
              </div>
              <div className="flex w-full flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 min-w-[50px] rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      selectedSize === size
                        ? "border-[#0FABCA] bg-[#0FABCA] text-white shadow-sm"
                        : "border-[var(--border-color)] text-[var(--text-color)] bg-[var(--input-color)] hover:border-[#0FABCA]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-4">
            <button
              onClick={() => addToCart(productId)}
              className="flex-1 py-3 px-6 bg-[#0FABCA] hover:bg-[#0FABCA]/90 rounded-xl text-white font-bold transition-all active:scale-98 shadow-sm cursor-pointer"
            >
              Add To Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 py-3 px-6 bg-[var(--btn-color)] hover:bg-[var(--btn-color)]/90 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-98 shadow-md hover:shadow-lg cursor-pointer"
            >
              🛍️ Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Tabs, Reviews, Delivery & Related Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ProductTabs />
        <ReviewsSection />
        <DeliveryInfo />
        <RelatedProducts heading="Trending" badge="Trending" category={product.category} />
        <RelatedProducts heading="Offers" badge="Offers" category={product.category} />
      </div>
      <FooterSection />
    </div>
  );
};

export default Display;
