import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../components/auth/Register";
import SignInWithNumber from "../components/auth/SignInWithNumber";
import Cart from "../components/Cart/Cart";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import ProductDeatils from "../components/ProductDeatils/ProductDeatils";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/signinwithphone" element={<SignInWithNumber />} />
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/productdeatils/:id" element={<ProductDeatils />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
