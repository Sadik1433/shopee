import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";
import SideBar from "./component/SideBar";
import AppRouter from "./component/AppRouter";
import Navbar from "./component/Navbar";
import ScrollToTop from "./component/ScrollToTop";

const App = () => {
   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      mirror: true,
    });
  }, []);
  return (
    <>
      <Navbar />
      <ScrollToTop />
        <div className="flex relative">
          <SideBar />
          <AppRouter />
        </div>
    </>
  );
};

export default App;
