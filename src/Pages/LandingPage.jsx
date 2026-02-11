import FooterSection from "../component/FooterSection";
import Home from "../component/Home";
import Offers from "../component/Offers";
import About from "../component/About";
import Collections from "../component/Collections";
import RelatedProducts from "../component/RelatedProducts";

const LandingPage = () => {

  return (
    <div className="min-h-screen w-full pt-16 pr-2   overflow-x-hidden">
      <Home />
      <Offers />
      <Collections />
      <RelatedProducts heading="Recommended for You" />
      <About />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
