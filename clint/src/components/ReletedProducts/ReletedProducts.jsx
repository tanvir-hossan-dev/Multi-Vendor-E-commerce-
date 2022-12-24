import React from "react";
import Product from "../Products/Product/Product";

const ReletedProducts = () => {
  return (
    <div className="w-[94%] mx-auto mt-[100px] ">
      <h1 className="text-[42px] font-bold mb-4">RELETED PRODUCTS</h1>
      <div className="grid grid-cols-4 gap-4">
        <Product />
      </div>
    </div>
  );
};

export default ReletedProducts;
