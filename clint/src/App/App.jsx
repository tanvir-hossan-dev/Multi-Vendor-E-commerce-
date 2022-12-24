import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
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
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/productdeatils/:id" element={<ProductDeatils />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
