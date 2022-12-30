import { Button, Input } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddProductMutation } from "../../../Redux/features/product/productApi";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Vendorform = () => {
  const initialState = {
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
  };

  const api_key = import.meta.env.VITE_IMGBB_API_KEY;

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

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

  const handleImg = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, description, category, price, stock } = inputs;
    if (!name || !description || !category || !price || !stock || !image) {
      setErr("Please fullfill all input");
    } else {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", image);
      const url = `https://api.imgbb.com/1/upload?key=${api_key}`;
      axios.post(url, formData).then((res) => {
        if (res?.data?.data?.display_url) {
          addProduct({ ...inputs, imagesUrl: res?.data?.data?.display_url });
          setErr("");
        }
      });
    }
  };

  useEffect(() => {
    if (isSuccess && !isError && !err) {
      setInputs({ ...initialState });
    }
    if (isSuccess) {
      setTimeout(() => {
        navigate("/admindashboard");
      }, 2000);
    }
  }, [isSuccess, isError, err]);

  return (
    <div className="w-[40%]  mx-auto mt-8 bg-[#f1f1f1] py-4 px-8 rounded-md ">
      <Helmet>
        <title>Vendorform</title>
      </Helmet>
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
          <Input label="Image" type="file" name="imagesUrl" onChange={handleImg} />
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
            {loading ? "Loading..." : "Submit"}
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
