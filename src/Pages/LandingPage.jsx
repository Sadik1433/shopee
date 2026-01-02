import Home from "../component/Home";
import TrendingCollection from "../component/TrendingCollections";
// import NewProducts from "../component/NewProducts";


const LandingPage = () => {
  return (
    <div className="min-h-100 w-screen relative top-16 pr-2">
      <Home />
      {/* <NewProducts /> */}
      <TrendingCollection />
    </div>
  );
};

export default LandingPage;
