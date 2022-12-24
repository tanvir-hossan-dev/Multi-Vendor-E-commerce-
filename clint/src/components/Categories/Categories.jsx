import React from "react";
import Footer from "../Footer/Footer";
import Categorie from "./Categorie/Categorie";

const Categories = () => {
  return (
    <>
      <div className="w-[1200px] mx-auto mt-8">
        <h2 className="text-[42px] font-bold border-b-[3px]  border-solid border-gray-500">All Categories</h2>
        <div className="mt-8 grid grid-cols-5 gap-5">
          <Categorie />
        </div>
      </div>
    </>
  );
};

export default Categories;
