import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage.jsx";
import Display from "./Display.jsx";
import Login from "../Pages/Login.jsx";
import ProductCategory from "./ProductCategory.jsx";
import banner_kids from "./Assets/banner_kids.png";
import banner_men from "./Assets/banner_mens.png";
import banner_women from "./Assets/banner_women.png";
import Cart from '../Pages/Cart.jsx'

const AppRouter = () => {
  
  return (
    <div className="relative left-12">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/men"
          element={<ProductCategory category="men" banner={banner_men} />}
        />
        <Route
          path="/women"
          element={<ProductCategory category="women" banner={banner_women} />}
        />
        <Route
          path="/kids"
          element={<ProductCategory category="kids" banner={banner_kids} />}
        />
        <Route
          path="/electro"
          element={<ProductCategory category="electro" banner={banner_kids} />}
        />
        <Route path="/product" element={<Display />}>
          <Route path=":productId" element={<Display />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart  />} />
      </Routes>
    </div>
  );
};
export default AppRouter;
