import React from "react";
import { Helmet } from "react-helmet-async";
import { useGetProductQuery } from "../../Redux/features/product/productApi";
import Footer from "../Footer/Footer";
import Categorie from "./Categorie/Categorie";

const Categories = () => {
  const { data } = useGetProductQuery();

  return (
    <>
      <Helmet>
        <title>Categories</title>
      </Helmet>
      {data?.length > 0 && (
        <div className="w-[94%] mx-auto mt-8">
          <h2 className="text-[42px] font-bold border-b-[3px]  border-solid border-gray-500">All Categories</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-4">
            {data?.map((item) => (
              <Categorie product={item} />
            ))}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Categories;
