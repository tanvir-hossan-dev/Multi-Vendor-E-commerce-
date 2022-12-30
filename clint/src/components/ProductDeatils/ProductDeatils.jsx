import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../Redux/features/product/productApi";
import { addProduct } from "../../Redux/features/product/productSlice";
import Footer from "../Footer/Footer";
import ReletedProducts from "../ReletedProducts/ReletedProducts";

const ProductDeatils = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useGetProductQuery();
  const { user } = useSelector((state) => state.user);
  const [quan, setQuan] = useState(1);
  const [loading, setLoading] = useState(false);
  const product = data?.find((item) => item._id === id);
  const { name, price, description, imagesUrl, _id, stock, quantity } = product || {};

  const products = useSelector((state) => state.product);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (user?._id) {
      dispatch(addProduct({ ...product, quantity: quan }));
      setLoading(true);
      setTimeout(() => {
        navigate("/cart");
      }, 1500);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Helmet>
        <title>ProductDeatils</title>
      </Helmet>
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
              <button
                disabled={quan === 1}
                className="btn btn-square btn-outline text-[22px]"
                onClick={() => setQuan(quan - 1)}
              >
                -
              </button>
              <h3 className="mx-[12px] mt-2 text-[22px]">{quan}</h3>
              <button
                disabled={stock === quan}
                className="btn btn-square btn-outline text-[22px]"
                onClick={() => setQuan(quan + 1)}
              >
                +
              </button>
            </div>
            <div className="card-actions justify-start mt-6">
              <button className="btn btn-primary" onClick={handleSubmit}>
                {loading ? "Submit" : "Add To Cart"}
              </button>
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
