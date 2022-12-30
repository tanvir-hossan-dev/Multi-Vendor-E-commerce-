import { Button, Input } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEditProductMutation, useGetProductQuery } from "../../../Redux/features/product/productApi";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Admineditform = () => {
  const { data: getProduct } = useGetProductQuery();

  const { id } = useParams();

  const currentProduct = getProduct?.length > 0 && getProduct?.find((item) => item._id === id);

  const initialState = {
    name: currentProduct?.name || "",
    description: currentProduct?.description || "",
    price: currentProduct?.price || "",
    category: currentProduct?.category || "",
    stock: currentProduct?.stock || "",
  };

  const [err, setErr] = useState("");
  const [inputs, setInputs] = useState({ ...initialState });
  const api_key = import.meta.env.VITE_IMGBB_API_KEY;
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [editProduct, { data, isSuccess }] = useEditProductMutation();

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
    const id = currentProduct?._id;
    if (!name || !description || !category || !image || !price || !stock) {
      setErr("Please fullfill all input");
    } else {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", image);
      const url = `https://api.imgbb.com/1/upload?key=${api_key}`;
      axios.post(url, formData).then((res) => {
        if (res?.data?.data?.display_url) {
          editProduct({ data: { ...inputs, imagesUrl: res?.data?.data?.display_url }, id });
          setErr("");
        }
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        navigate("/admindashboard");
      }, 2000);
    }
  }, [isSuccess]);

  return (
    <div className="w-[40%]  mx-auto mt-8 bg-[#f1f1f1] py-4 px-8 rounded-md ">
      <Helmet>
        <title>Admineditform</title>
      </Helmet>
      <h2 className="text-[30px] pb-[15px] text-center">Update Product</h2>
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
            {loading ? "Loading.." : "Submit"}
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

export default Admineditform;
