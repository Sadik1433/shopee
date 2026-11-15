import { useState } from "react";

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
    review:
      "Good product, but the color is slightly different from the picture.",
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
    review:
      "Decent for the price, but stitching could be improved in some areas.",
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
    review:
      "Very happy with the purchase. It fits perfectly and looks premium.",
  },
];

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);

  const displayedReviews = showAll ? reviewsData : reviewsData.slice(0, 3);

  return (
    <div className="w-full max-w-4xl px-2 sm:px-4 my-8">
      <h2 className="text-2xl sm:text-3xl text-[var(--heading-color)] font-bold mb-6">
        Customer Reviews
      </h2>

      <div className="space-y-3">
        {displayedReviews.map((review) => (
          <div
            key={review.id}
            className="p-3 sm:p-4 rounded-2xl bg-[var(--card-color)] border border-[var(--border-color)] shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 sm:gap-3">
              <h3 className="text-[var(--accent-color)] font-bold text-sm sm:text-base">
                <span className="mr-1">{review.id}.</span> {review.name}
              </h3>

              <div className="flex items-center gap-2">
                <span className="text-yellow-500 text-base sm:text-lg">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </span>
                <span className="text-xs sm:text-sm font-medium text-[var(--text-secondary)]">
                  {review.rating} out of 5
                </span>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] italic leading-relaxed">
                "{review.review}"
              </p>
            </div>
          </div>
        ))}
      </div>

      {!showAll && reviewsData.length > 3 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2.5 bg-[var(--heading-color)] text-white rounded-full font-bold hover:opacity-90 transition-all shadow-md active:scale-95 cursor-pointer text-sm"
          >
            Show More
          </button>
        </div>
      )}

      {showAll && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => {
              setShowAll(false);
              window.scrollTo({ top: 300, behavior: "smooth" });
            }}
            className="px-6 py-2.5 border-2 border-[var(--heading-color)] text-[var(--heading-color)] rounded-full font-bold hover:bg-[var(--heading-color)] hover:text-white transition-all active:scale-95 cursor-pointer text-sm"
          >
            Show Less
          </button>
        </div>
      )}
    </div>
  );
}
