import React from "react";
import Footer from "../Footer/Footer";

const Cart = () => {
  return (
    <>
      <div className="w-[94%] flex mx-auto mt-8">
        <div className="overflow-x-auto w-2/3">
          <table className="table table-zebra w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Quantiy</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>
                  <h3 className="  text-[22px]">2</h3>
                </td>
                {/* <div className="flex">
                <button className="btn w-[25px] h-[25px] btn-square btn-outline text-[22px]">-</button>
                <h3 className="mx-[12px]  text-[32px]">2</h3>
                <button className="btn w-[25px] btn-square btn-outline text-[22px]">+</button>
              </div> */}
                <td>Blue</td>
                <td>Delete</td>
              </tr>
              {/* <!-- row 2 --> */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
                <td>Delete</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-1/3">
          <div class="bg-white py-4 px-4 shadow-md rounded-lg mb-4 mx-4">
            <div class="flex justify-center items-center text-center">
              <div class="text-xl font-semibold">
                <p>Total Item</p>
                <p class="text-5xl">
                  {/* {cards.reduce((accumulator, current) => {
                  return accumulator + current.quantity;
                }, 0)} */}
                  0
                </p>
              </div>
            </div>
          </div>
          <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            <div class="flex justify-center items-center text-center">
              <div class="text-xl font-semibold">
                <p>Total Price</p>
                <p class="text-5xl">
                  {/* {cards.reduce((accumulator, current) => {
                  return accumulator + current.quantity * current.price;
                }, 0)} */}
                  0
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
