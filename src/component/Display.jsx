// import { StarIcon } from '@heroicons/react/20/solid'
import { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "./context/ShopContext.jsx";

// const product = {
//   name: 'Basic Tee 6-Pack',
//   price: '$192',
//   href: '#',
//   breadcrumbs: [
//     { id: 1, name: 'Men', href: '#' },
//     { id: 2, name: 'Clothing', href: '#' },
//   ],
//   images: [
//     {
//       src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
//       alt: 'Two each of gray, white, and black shirts laying flat.',
//     },
//     {
//       src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
//       alt: 'Model wearing plain black basic tee.',
//     },
//     {
//       src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
//       alt: 'Model wearing plain gray basic tee.',
//     },
//     {
//       src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
//       alt: 'Model wearing plain white basic tee.',
//     },
//   ],
//   colors: [
//     { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
//     { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
//     { id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900' },
//   ],
//   sizes: [
//     { name: 'XXS', inStock: false },
//     { name: 'XS', inStock: true },
//     { name: 'S', inStock: true },
//     { name: 'M', inStock: true },
//     { name: 'L', inStock: true },
//     { name: 'XL', inStock: true },
//     { name: '2XL', inStock: true },
//     { name: '3XL', inStock: true },
//   ],
//   description:
//     'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//   highlights: [
//     'Hand cut and sewn locally',
//     'Dyed with our proprietary colors',
//     'Pre-washed & pre-shrunk',
//     'Ultra-soft 100% cotton',
//   ],
//   details:
//     'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// }
// const reviews = { href: '#', average: 4, totalCount: 117 }

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

const thumbnails = [
  "/image.jpg", 
  "/thumb2.jpg",
  "/thumb3.jpg",
  "/thumb4.jpg",
];

const colorOptions = [
  "/color_black.jpg",
  "/color_grey.jpg",
  "/color_maroon.jpg",
  "/color_teal.jpg",
  "/color_white.jpg",
];
const sizes = ["S", "M", "L", "XL", "XXL"];

export default function Display(props) {
  const [selectedImage, setSelectedImage] = useState(thumbnails[0]);
  const [selectedSize, setSelectedSize] = useState("M");
  const { all_product, addToCart } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((item) => item.id === Number(productId));

  return (
    <div className="relative top-15  h-screen min-w-screen bg-blue-100  flex flex-col pb-5">
      {/* Header Spacer */}
      <div className="flex-1 flex flex-row  py-3 pr-20 px-5">
        {/* Left Image Gallery */}
        <div className="flex flex-col min-w-[110px]">
          <div className="flex flex-col items-center gap-2">
            {thumbnails.map((img, idx) => (
              <img
                key={idx}
                src={product.image}
                alt={`Thumbnail ${idx}`}
                className={`w-25 h-25 object-cover rounded border ${
                  selectedImage === product.image
                    ? "ring-2 ring-blue-500"
                    : "hover:ring-2 hover:ring-blue-400"
                } cursor-pointer`}
                onClick={() => setSelectedImage(product.image)}
              />
            ))}
          </div>
        </div>
        {/* Main Section */}
        <div className="flex flex-1 pl-6">
          {/* Large Preview Image */}
          <div>
            <img
              src={product.image}
              alt="Main"
              className="w-[350px] h-[420px] object-cover rounded shadow-md border"
            />
          </div>

          {/* Product Info Section */}
          <div className="flex-1 pl-8 flex flex-col">
            {/* breadcrumbs */}
            <div className="text-xs text-gray-400 pb-2">
              Home &gt; Clothing and... &gt; T-shirts &gt; Men's T-shirts &gt;
              TECHNOSP...
            </div>
            {/* PRODUCT NAME */}
            <div className="font-semibold text-gray-800">TECHNOSPORT</div>
            <div className="text-lg font-medium text-gray-700">
              Men Printed Round Neck Polyester Black T-Shirt
            </div>
            {/* PRICE & RATING */}
            <div className="flex items-center space-x-3 mt-3">
              <span className="text-2xl font-bold text-[#222]">₹399</span>
              <span className="text-xs px-2 py-1 bg-green-100 text-green-700 font-bold rounded">
                4.8★
              </span>
              <span className="text-sm text-gray-500">
                5 ratings and 0 reviews
              </span>
              <span className="ml-1 px-2 bg-blue-100 text-blue-700 text-xs rounded border border-blue-300">
                Assured
              </span>
            </div>
            <div className="mt-1 text-xs text-gray-500">
              Or Pay ₹299 + 100 <span className="text-yellow-500">⚡</span>
            </div>
            {/* COLORS */}
            <div className="mt-5">
              <div className="text-sm font-semibold text-gray-700 mb-1">
                Color
              </div>
              <div className="flex space-x-3">
                {colorOptions.map((image, idx) => (
                  <img
                    key={idx}
                    src={product.image}
                    alt={`Color${idx}`}
                    className="w-12 h-14 object-cover rounded border"
                  />
                ))}
              </div>
            </div>
            {/* SIZES */}
            <div className="mt-4">
              <div className="text-sm font-semibold text-gray-700 mb-1">
                Size
              </div>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`w-10 h-10 border rounded ${
                      selectedSize === size
                        ? "bg-blue-700 text-white border-blue-700"
                        : "bg-white text-black"
                    } font-semibold transition`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
                <a
                  href="#"
                  className="ml-2 text-xs text-blue-600 font-semibold underline"
                >
                  Size Chart
                </a>
              </div>
            </div>
            {/* COUPON & OFFERS */}
            <div className="mt-6">
              <div className="text-sm text-green-700 font-bold">
                <span>Partner Offer</span>
                <span className="text-black font-normal">
                  {" "}
                  Buy this &amp; Get 5% off upto ₹750 on furniture, Only for
                  you!
                </span>
                <a href="#" className="ml-1 text-blue-500">
                  Know More
                </a>
              </div>
              <div className="mt-2 space-y-1 text-sm">
                <div className="flex items-justify-start">
                  <span className="text-green-700 font-extrabold mr-1">●</span>
                  Bank Offer 10% instant discount on SBI Credit Card EMI
                  Transactions, up to 1,500 on orders of ₹5,000 and above
                  {/* <a href="#" className="ml-1 text-blue-500">T&C</a> */}
                </div>
                <div className="flex items-center">
                  <span className="text-green-700 font-extrabold mr-1">●</span>
                  Bank Offer 5% cashback on Axis Bank Flipkart Debit Card up to
                  ₹750
                  <a href="#" className="ml-1 text-blue-500">
                    T&C
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-green-700 font-extrabold mr-1">●</span>
                  Bank Offer 5% cashback on Flipkart SBI Credit Card up to
                  ₹4,000 per calendar quarter
                  <a href="#" className="ml-1 text-blue-500">
                    T&C
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-green-700 font-extrabold mr-1">●</span>
                  +15 more offers
                </div>
              </div>
            </div>
            {/* LOCATION & DELIVERY */}
            <div className="mt-6 flex gap-8 items-center">
              <div>
                <label
                  htmlFor="location"
                  className="text-xs font-medium text-gray-700 mr-1"
                >
                  Deliver to
                </label>
                <select
                  className="border px-2 py-1 rounded text-sm"
                  id="location"
                >
                  <option>Bangalore - 560007</option>
                  <option>Madanapalle - 517325</option>
                  <option>Hyderabad - 500081</option>
                </select>
              </div>
              <div>
                <span className="text-xs text-gray-600">
                  Delivery by 15 Nov, Saturday{" "}
                </span>
                <a href="#" className="text-xs text-blue-500 ml-1">
                  View Details
                </a>
              </div>
              <div className="ml-auto">
                <span className="text-xs text-gray-500">
                  Cash on Delivery available
                </span>
              </div>
            </div>
            {/* BUTTONS */}
            <div className="mt-7 flex gap-2">
              <button onClick={()=> {addToCart(productId)}} className="flex-1 h-12 bg-orange-500 text-white font-bold text-lg rounded shadow hover:bg-orange-600">
                ADD TO CART
              </button>
              <button className="flex-1 h-12 bg-orange-400 text-white font-bold text-lg rounded shadow hover:bg-orange-500">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl pr-8 bg-red-200 mt-2 ">
        <div className="p-5 mt-4">
          <h3 className="text-lg font-bold pb-2 border-b">
            Product Description
          </h3>
          <div className="py-3 text-gray-800">
            <b>TECHNOSPORT Men Printed Round Neck Polyester Black T-Shirt</b>
            <br />
            <br />
            Embrace style and comfort with this TECHNOSPORT men's printed round
            neck t-shirt. Crafted from high-quality polyester fabric for a
            lightweight, moisture-wicking feel, this t-shirt is perfect for
            workouts, sports, and everyday wear. The subtle yet modern print
            adds a fashionable touch while the slim fit and crew neckline
            provide a flattering silhouette. Durable stitching ensures lasting
            quality, and the fabric keeps you cool and dry even on active days.
            Pair it with jeans, joggers, or shorts for versatile styling from
            gym to street.
            <br />
            <br />
            <b>Key Features:</b>
            <ul className="list-disc ml-5 mt-1 text-gray-700">
              <li>Material: Premium breathable polyester</li>
              <li>Fit: Slim fit for athletic silhouette</li>
              <li>Neck: Crew neck, ribbed for comfort</li>
              <li>Design: Stylish all-over print</li>
              <li>
                Activity: Ideal for gym, running, sports, or casual outings
              </li>
              <li>Easy care: Machine-washable, wrinkle-resistant</li>
              <li>Available sizes: S, M, L, XL, XXL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
