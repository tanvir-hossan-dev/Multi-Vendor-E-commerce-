import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import SignInWithNumber from "../components/auth/SignInWithNumber";
import Cart from "../components/Cart/Cart";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import ProductDeatils from "../components/ProductDeatils/ProductDeatils";
import useAuthCheck from "../hooks/useAuthCheck";
import { ColorRing } from "react-loader-spinner";
import { useSelector } from "react-redux";

function App() {
  const authChecked = useAuthCheck();

  const { user, accessToken } = useSelector((state) => state.user);

  return !authChecked ? (
    <div className="w-screen h-screen flex justify-center items-center">
      <ColorRing
        visible={true}
        height="180"
        width="180"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  ) : (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signinwithphone" element={<SignInWithNumber />} />
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/productdeatils/:id" element={<ProductDeatils />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
