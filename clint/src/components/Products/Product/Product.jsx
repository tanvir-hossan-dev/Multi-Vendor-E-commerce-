import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { name, price, description, imagesUrl, _id, stock } = product || {};

  return (
    <Link to={`/productdeatils/${_id}`}>
      <div key={_id} className="card  bg-base-100 shadow-xl overflow-hidden">
        <figure className="h-[220px]">
          <img src={imagesUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name} <div className="badge badge-primary">{stock}</div>
          </h2>
          <h2 className="card-title">{price} tk</h2>
          <p>{description.substring(0, 100)}...</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
