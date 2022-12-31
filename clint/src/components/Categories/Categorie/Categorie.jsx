import React from "react";
import { Link } from "react-router-dom";

const Categorie = ({ product }) => {
  const { imagesUrl, category } = product || {};

  return (
    <Link to={`/categoryproducts/${category}`}>
      <div className="card h-[200px] card-compact  bg-base-100 shadow-xl">
        <figure>
          <img src={imagesUrl} alt="Shoes" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title justify-center">{category}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Categorie;
