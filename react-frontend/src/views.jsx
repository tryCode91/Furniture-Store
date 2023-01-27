import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./Components/signup";
import Signin from "./Components/signin";
import Dashboard from "./Components/auth/dashboard";
import HomePortal from "./Components/portal/homeportal";
import PrivateRoutes from "./Components/PrivateRoute";
import Shop from "./Components/auth/Shop";
import Header from "./Components/header";
import FourOhFour from "./Components/404";
import ShoppingCart from "./Components/auth/ShoppingCart";
import Detail from "./Components/auth/detail";
import Furniture from "./Components/auth/furniture";

const Views = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* protected routes */}
        <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            <Route path="/furniture" element={<Furniture />} />
            <Route path="/detail" element={<Detail />} />
        </Route>
        {/* unprotected routes */}
        <Route path="/" element={<HomePortal />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
    </>
  );
};
export default Views;
