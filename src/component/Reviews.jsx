import { useState, useEffect } from "react";

const reviewsData = [
  {
    id: 1,
    name: "Sadik",
    rating: 5,
    review: "Very comfortable and good quality fabric. Worth the price!",
  },
  {
    id: 2,
    name: "Nayantara",
    rating: 4,
    review: "Good product, but the color is slightly different from the picture.",
  },
  {
    id: 3,
    name: "Haleema",
    rating: 5,
    review: "Excellent quality and fast delivery. Highly recommended!",
  },
  {
    id: 4,
    name: "Umar",
    rating: 4,
    review: "Perfect fit and very stylish. I love the texture of the material.",
  },
  {
    id: 5,
    name: "Rayan",
    rating: 5,
    review: "The design is state-of-the-art. Best purchase I've made recently.",
  },
  {
    id: 6,
    name: "Adnan",
    rating: 3,
    review: "Decent for the price, but stitching could be improved in some areas.",
  },
  {
    id: 7,
    name: "Sadiya",
    rating: 5,
    review: "Absolutely fantastic! The premium feel is real. Will buy again.",
  },
  {
    id: 8,
    name: "Samreen",
    rating: 4,
    review: "Great value for money. The packaging was also very secure.",
  },
  {
    id: 9,
    name: "Ali",
    rating: 5,
    review: "Top-notch quality. It feels very durable and looks great.",
  },
  {
    id: 10,
    name: "Asif",
    rating: 4,
    review: "Very happy with the purchase. It fits perfectly and looks premium.",
  },
];

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);

  const displayedReviews = showAll ? reviewsData : reviewsData.slice(0, 3);

  return (
    <div className="mr-16 px-4">
      <h2 className="text-2xl font-semibold mb-6">Customer Reviews</h2>

      <div className="space-y-3">
        {displayedReviews.map((review) => (
          <div key={review.id} className="p-2 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-yellow-500 text-xl">
                {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
              </span>
              <span className="font-medium">{review.rating} out of 5</span>
            </div>

            <p className="mt-1 text-gray-600 italic">
              "{review.review}"
            </p>

            <p className="text-sm text-gray-400 mt-1 font-medium">- {review.name}</p>
          </div>
        ))}
      </div>

      {!showAll && reviewsData.length > 3 && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="px-4 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg hover:scale-105 transform duration-200"
          >
            Show More
          </button>
        </div>
      )}

      {showAll && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => {
              setShowAll(false);
              window.scrollTo(0, 0)
            }}

            className="px-4 py-2 border-2 border-black text-white rounded-full font-medium hover:bg-black hover:text-white transition-all duration-200"
          >
            Show Less
          </button>
        </div>
      )
      }
    </div >
  );
}

