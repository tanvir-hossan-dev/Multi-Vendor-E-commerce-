import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../../Redux/features/product/productApi";
import Footer from "../../Footer/Footer";
import Product from "../../Products/Product/Product";

const Categoryproducts = () => {
  const { data } = useGetProductQuery();
  const { slug } = useParams();

  const products = data?.filter((item) => item.category === slug);

  return (
    <>
      <div>
        {" "}
        {products?.length > 0 ? (
          <div className="w-[94%] mx-auto mt-[50px] ">
            <h1 className="text-[42px] font-bold mb-4">{slug} Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
              {products?.map((product) => (
                <Product product={product} />
              ))}
            </div>
          </div>
        ) : (
          <div className="alert alert-error shadow-lg w-[94%] mx-auto mt-[100px]">
            <div>
              <span>Product not found!</span>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Categoryproducts;
