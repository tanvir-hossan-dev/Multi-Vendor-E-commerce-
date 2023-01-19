import React from "react";
import Product from "../Products/Product/Product";
import { useGetProductQuery } from "../../Redux/features/product/productApi";
const ReletedProducts = ({ search }) => {
  const { data } = useGetProductQuery();

  return data?.length > 0 ? (
    <div className="w-[94%] mx-auto mt-[100px] ">
      <h1 className="text-[42px] font-bold mb-4">Releted Product</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
        {data
          ?.slice(0, 4)
          ?.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
          ?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
      </div>
    </div>
  ) : (
    <div className="alert alert-error shadow-lg w-[94%] mx-auto mt-[100px]">
      <div>
        <span>Product not found!</span>
      </div>
    </div>
  );
};

export default ReletedProducts;
