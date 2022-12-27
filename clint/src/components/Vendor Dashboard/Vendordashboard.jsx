import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Vendordashboard = () => {
  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user?._id) navigate("/");
  }, [navigate, user]);
  return (
    <div className="w-[94%]  mx-auto mt-8">
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Category</th>
              <th>Edit</th>
              <th>Delete</th>
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
              <td>Blue</td>
              <td>Blue</td>
              <td>
                <div className="badge badge-secondary  p-4 cursor-pointer">Edit</div>
              </td>
              <td>
                <div className="badge badge-error p-4 cursor-pointer">Delete</div>
              </td>
            </tr>
            {/* <!-- row 2 --> */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>Delete</td>
              <td>Delete</td>
              <td>Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vendordashboard;
