import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";
import { Helmet } from "react-helmet-async";

const Home = ({ search }) => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <Products search={search} />
      <Footer />
    </div>
  );
};

export default Home;
