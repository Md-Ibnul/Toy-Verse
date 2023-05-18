import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  const {
    _id,
    pictureURL,
    toyName,
    subCategory,
    sellerName,
    price,
    rating,
    description,
  } = toy || {};
  return (
    <div className="my-container my-8">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img
            src={pictureURL}
            className="w-1/2 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-bold uppercase font-mono">{toyName}</h1>
            <hr className="mt-3 bg-slate-900"/>
            <p className="mt-3 font-bold text-lg font-mono">{subCategory}</p>
            <p className="font-bold font-sans opacity-70">{sellerName}</p>
            <p className="mt-3 font-bold text-2xl font-mono mb-6">Price: ${price}</p>
            <div className="flex gap-8">
                <button className="text-white btn btn-error w-2/4">Add to curt</button>
                <button className="text-white btn btn-outline btn-error w-2/4">Buy Now</button>
            </div>
            <hr className="mt-3 bg-slate-900"/>
            <p className="font-bold text-lg mt-5 font-sans">Ratting: {rating}</p>
            <p className="font-thin text-lg mt-5 font-serif">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
