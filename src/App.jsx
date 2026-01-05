import "./App.css";
import SideBar from "./component/SideBar";
import AppRouter from "./component/AppRouter";
import Navbar from "./component/Navbar";
import ScrollToTop from "./component/ScrollToTop";

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <div className="app-container ">
        <div className="flex relative">
          <SideBar />
          <AppRouter />
        </div>
      </div>
    </>
  );
};

export default App;
