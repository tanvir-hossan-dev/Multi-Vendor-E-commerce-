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
import Vendordashboard from "../components/Vendor Dashboard/Vendordashboard";
import Admindashboard from "../components/Admin Dashboard/Admindashboard";
import Vendorform from "../components/Vendor Dashboard/Vendor Form/Vendorform";
import VendorEditForm from "../components/Vendor Dashboard/Vendor Form/VendorEditForm";
import Adminaddform from "../components/Admin Dashboard/Admin Form/Adminaddform";
import Admineditform from "../components/Admin Dashboard/Admin Form/Admineditform";
import Categoryproducts from "../components/Categories/Categoryproducts/Categoryproducts";
import { useState } from "react";

function App() {
  const authChecked = useAuthCheck();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

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
      <Navbar search={search} searchFun={handleSearch} />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signinwithphone" element={<SignInWithNumber />} />
        <Route path="/" element={<Home search={search} />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/productdeatils/:id" element={<ProductDeatils search={search} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/vendordashboard" element={<Vendordashboard />} />
        <Route path="/vendoreditform/:id" element={<VendorEditForm />} />
        <Route path="/vendorform" element={<Vendorform />} /> <Route path="/adminaddform" element={<Adminaddform />} />
        <Route path="/admindashboard" element={<Admindashboard />} />
        <Route path="/admineditform/:id" element={<Admineditform />} />
        <Route path="/categoryproducts/:slug" element={<Categoryproducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
