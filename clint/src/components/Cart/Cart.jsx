import React from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../Redux/features/product/productSlice";
import Footer from "../Footer/Footer";

const Cart = () => {
  const dispatch = useDispatch();
  const { card } = useSelector((state) => state.product);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <div className="w-[94%] flex mx-auto mt-8">
        <div className="overflow-x-auto w-2/3">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            {card?.length > 0 ? (
              <tbody>
                {card?.map((product, index) => (
                  <tr key={product?._id}>
                    <th>{index + 1}</th>
                    <td>{product.name}</td>
                    <td>
                      <h3 className="  text-[22px]">{product.price} tk</h3>
                    </td>

                    <td>{product.quantity}</td>
                    <td onClick={() => handleDelete(product._id)}>
                      <div className="alert w-[80px] alert-error shadow-lg text-center">Delete</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <div className="alert alert-error w-full shadow-lg text-center">
                <span>There are no porduct!</span>
              </div>
            )}
          </table>
        </div>
        <div className="w-1/3">
          <div className="bg-white py-4 px-4 shadow-md rounded-lg mb-4 mx-4">
            <div className="flex justify-center items-center text-center">
              <div className="text-xs md:text-xl font-semibold">
                <p>Total Item</p>
                <p className="">
                  {card?.reduce((acc, cur) => {
                    return acc + cur.quantity;
                  }, 0)}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            <div className="flex justify-center items-center text-center">
              <div className="text-xs md:text-xl font-semibold">
                <p>Total Price</p>
                <p className="">
                  {card?.reduce((acc, cur) => {
                    return acc + cur.quantity * cur.price;
                  }, 0)}{" "}
                  tk
                </p>
              </div>
            </div>
          </div>
          <div className="py-4 px-4 w-full">
            <button className="btn  btn-active w-full btn-primary">Confirm Order</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
