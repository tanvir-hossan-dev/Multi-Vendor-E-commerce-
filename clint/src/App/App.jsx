import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Categories from "../components/Categories/Categories";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
