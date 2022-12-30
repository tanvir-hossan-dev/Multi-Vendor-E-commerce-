import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../Redux/features/product/productApi";
import Footer from "../Footer/Footer";
import ReletedProducts from "../ReletedProducts/ReletedProducts";

const ProductDeatils = () => {
  const { id } = useParams();
  const { data } = useGetProductQuery();
  const product = data?.find((item) => item._id === id);
  const { name, price, description, imagesUrl, _id, stock } = product || {};
  return (
    <>
      <div className="w-[1200px] mx-auto mt-8">
        <div className="card lg:card-side bg-base-100 shadow-xl h-[400px]">
          <figure className="w-2/5 ">
            <img src={imagesUrl} alt="img" />
          </figure>
          <div className="card-body w-3/5">
            <h2 className="card-title">
              {name} <div className="badge badge-primary">{stock}</div>
            </h2>
            <h2 className="card-title">{price} tk</h2>

            <h6 className="mb-10">{description}</h6>
            <div className="flex mb-12">
              <button className="btn btn-square btn-outline text-[32px]">-</button>
              <h3 className="mx-[12px] text-[32px]">2</h3>
              <button className="btn btn-square btn-outline text-[32px]">+</button>
            </div>
            <div className="card-actions justify-start mt-6">
              <button className="btn btn-primary">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
      <ReletedProducts />
      <Footer />
    </>
  );
};

export default ProductDeatils;
