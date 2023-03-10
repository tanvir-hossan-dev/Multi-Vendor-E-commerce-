import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useDeleteProductMutation, useGetProductQuery } from "../../Redux/features/product/productApi";

const Vendordashboard = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const { data, isSuccess, isError, error } = useGetProductQuery();
  const [deleteProduct, {}] = useDeleteProductMutation();

  const products = data?.length > 0 && data?.filter((item) => item.userId === user?._id);

  const handleDelete = (id) => {
    deleteProduct(id);
  };

  useEffect(() => {
    if (!user?._id) navigate("/");
  }, [navigate, user]);

  return (
    <div className="w-[94%]  mx-auto my-8">
      <Helmet>
        <title>Vendordashboard</title>
      </Helmet>
      <div className="flex justify-end mb-4">
        <Link to="/vendorform" className="btn btn-primary mr-0">
          Add Product
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table  w-full">
          {products?.length > 0 && (
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
          )}
          <tbody>
            {products?.length > 0 ? (
              products.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>
                    <h3 className="  text-[22px]">{item.price}</h3>
                  </td>
                  <td>{item.stock}</td>
                  <td>{item.category}</td>
                  <td>
                    <div className="badge badge-secondary  p-4 cursor-pointer">
                      <Link to={`/vendoreditform/${item._id}`}>Edit</Link>{" "}
                    </div>
                  </td>
                  <td onClick={() => handleDelete(item._id)}>
                    <div className="badge badge-error p-4 cursor-pointer">Delete</div>
                  </td>
                </tr>
              ))
            ) : (
              <div className="alert alert-error w-full shadow-lg text-center">
                <span>Product not found!</span>
              </div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vendordashboard;
