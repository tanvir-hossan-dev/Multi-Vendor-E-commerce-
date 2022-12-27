import React from "react";
import { useGetProductQuery } from "../../Redux/features/product/productApi";
import Product from "./Product/Product";

const Products = () => {
  const { data, error } = useGetProductQuery();
  console.log(data);
  console.log(error);
  return (
    <div className="w-[94%] mx-auto mt-[100px] ">
      <h1 className="text-[42px] font-bold mb-4">FLASH SELL</h1>
      <div className="grid grid-cols-4 gap-4">
        <Product />
      </div>
    </div>
  );
};

export default Products;
