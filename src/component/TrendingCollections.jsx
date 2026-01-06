import all_product from "./Assets/all_product.js";
import { Link } from "react-router-dom";

const TrendingCollection = () => {
  const trending_products = [...all_product]
    .sort(() => Math.random() - 0.5) // shuffle randomly
    .slice(0, 10); // pick first 10

  return (
    <div className="h-screen   mr-10">
      <div className="container py-2">
        <div className="">
          <h1 className="text-4xl font-bold p-4">Trending Collection</h1>
        </div>
        <ul className="bg-slate-50 flex gap-4 overflow-x-auto  p-4 scrollbar-hide">
          {trending_products.map((card, i) => (
            <Link to={`/${card.category}`}>
              <li
                key={i}
                className="min-w-[250px] border-6 border-blue-900 rounded p-1"
              >
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-80 object-cover rounded"
                />
                <div className="bg-blue-600">{card.rating}</div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrendingCollection;
