import React, { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const MySingleToy = ({ toy, handleDelete }) => {
  const { _id, pictureURL, toyName, sellerName, sellerEmail } = toy || {};

  

  return (
    <div>
      <div className="card card-compact w-72 bg-base-100 shadow-xl">
        <figure>
          <img src={pictureURL} alt="Image" />
        </figure>
        <div className="card-body text-start">
          <h2 className="card-title">{toyName}</h2>
          <p>{sellerName}</p>
          <p>{sellerEmail}</p>
          <div className="card-actions justify-between">
            <Link
              to={`/updateToy/${_id}`}
              className="btn btn-circle btn-outline"
            >
              <FaEdit className="text-xl" />
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySingleToy;
