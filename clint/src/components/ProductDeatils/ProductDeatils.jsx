import React from "react";
import ReletedProducts from "../ReletedProducts/ReletedProducts";

const ProductDeatils = () => {
  return (
    <>
      <div className="w-[1200px] mx-auto mt-8">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="w-2/5">
            <img src="https://placeimg.com/400/400/arch" alt="Album" />
          </figure>
          <div className="card-body w-3/5">
            <h2 className="card-title">Title</h2>
            <h2 className="card-title">Price</h2>
            <h2 className="card-title">New album is released!</h2>
            <h6>Rating</h6>
            <h6 className="mb-8">Deatils</h6>
            <div className="flex mb-12">
              <button className="btn btn-square btn-outline text-[32px]">-</button>
              <h3 className="mx-[12px] text-[32px]">2</h3>
              <button className="btn btn-square btn-outline text-[32px]">+</button>
            </div>
            <div className="card-actions justify-start">
              <button className="btn btn-primary">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
      <ReletedProducts />
    </>
  );
};

export default ProductDeatils;
