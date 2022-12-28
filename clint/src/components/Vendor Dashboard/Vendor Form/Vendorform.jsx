import { Button, Input } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddProductMutation } from "../../../Redux/features/product/productApi";

const Vendorform = () => {
  const initialState = {
    name: "",
    description: "",
    price: "",
    imagesUrl: "",
    category: "",
    stock: "",
  };

  const [err, setErr] = useState("");
  const [inputs, setInputs] = useState({ ...initialState });
  const navigate = useNavigate();

  const [addProduct, { data, isError, isSuccess }] = useAddProductMutation();

  const handleOnChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, description, category, imagesUrl, price, stock } = inputs;
    if (!name || !description || !category || !imagesUrl || !price || !stock) {
      setErr("Please fullfill all input");
    } else {
      addProduct({ ...inputs });
      setErr("");
    }
  };

  useEffect(() => {
    if (isSuccess && !isError && !err) {
      setInputs({ ...initialState });
    }
    if (isSuccess) {
      setTimeout(() => {
        navigate("/vendordashboard");
      }, 2000);
    }
  }, [isSuccess, isError, err]);

  return (
    <div className="w-[40%]  mx-auto mt-8 bg-[#f1f1f1] py-4 px-8 rounded-md ">
      <h2 className="text-[30px] pb-[15px] text-center">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex w-full items-end my-4 gap-4">
          <Input label="Product Name" type="text" name="name" onChange={handleOnChange} value={inputs.name} />
        </div>
        <div className="flex w-full items-end my-4 gap-4">
          <Input
            label="Product Description"
            type="text"
            name="description"
            onChange={handleOnChange}
            value={inputs.description}
          />
        </div>
        <div className="flex w-full items-end my-4 gap-4">
          <Input label="Price" type="number" name="price" onChange={handleOnChange} value={inputs.price} />
        </div>
        <div className="flex w-full items-end my-4 gap-4">
          <Input label="Image" type="text" name="imagesUrl" onChange={handleOnChange} value={inputs.imagesUrl} />
        </div>
        <div className="flex w-full items-end my-4 gap-4">
          <Input
            label="Product Category"
            type="text"
            name="category"
            onChange={handleOnChange}
            value={inputs.category}
          />
        </div>
        <div className="flex w-full items-end my-4 gap-4">
          <Input label="Product Stock" type="number" name="stock" onChange={handleOnChange} value={inputs.stock} />
        </div>
        <div>
          <Button type="submit" className=" my-4 w-full py-[10px] ">
            Submit
          </Button>
        </div>
      </form>
      {err && (
        <div className="alert alert-error shadow-lg">
          <div>
            <span>{err}</span>
          </div>
        </div>
      )}
      {isSuccess && (
        <div className="alert alert-success  shadow-lg">
          <div>
            <span>{data?.message}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vendorform;
