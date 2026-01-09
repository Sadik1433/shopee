import FooterSection from "../component/FooterSection";
import Home from "../component/Home";
import Offers from "../component/Offers";
import About from "../component/About";
import Collections from "../component/Collections";

const LandingPage = () => {

  return (
    <div className="min-h-screen w-full pt-16 pr-2  text-gray-200 overflow-x-hidden">
      <Home />
      <Offers />
      <Collections />
      <About />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
