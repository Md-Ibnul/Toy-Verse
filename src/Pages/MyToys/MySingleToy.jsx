import React, { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { AuthContext } from "../../Providers/AuthProvider";

const MySingleToy = ({ toy }) => {
    const {user} = useContext(AuthContext);
  const {
    _id,
    pictureURL,
    toyName,
    subCategory,
    sellerName,
    sellerEmail,
    price,
    rating,
    description,
  } = toy || {};

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

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
          <label htmlFor="my-modal-6"><button className="btn btn-circle btn-outline"><FaEdit className="text-xl" /></button></label>
            
{/* ------------Modal Start ---------------*/}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-center sm:modal-middle">
  <div className="modal-box">
  <form onSubmit={handleSubmit(onSubmit)}>
          <label className="ms-2 font-bold text-lg">Toy Name</label>
          <input
            className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3"
            {...register("toyName", { required: true })}
          />

          <label className="ms-2 font-bold text-lg">Toy PictureURL</label>
          <input
            className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3"
            {...register("pictureURl", { required: true })}
          />

          <label className="ms-2 font-bold text-lg">Seller Name</label>
          <input
            className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3"
            defaultValue={user?.name}
            {...register("sellerName", { required: true })}
          />

          <label className="ms-2 font-bold text-lg">Seller Email</label>
          <input
            className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3"
            value={user?.email}
            {...register("sellerEmail", { required: true })}
          />

          <label className="ms-2 font-bold text-lg">Category</label>
          <select
            className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3"
            {...register("subCategory")}
          >
            <option value="Marvel Superhero">Marvel</option>
            <option value="DC Superhero">DC</option>
            <option value="Other Superhero">Other</option>
          </select>

          <label className="ms-2 font-bold text-lg">Price</label>
          <input
            className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3"
            {...register("price", { required: true })}
          />

          <label className="ms-2 font-bold text-lg">Rating</label>
          <input
            className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3"
            {...register("rating", { required: true })}
          />

          <label className="ms-2 font-bold text-lg">Available Quantity</label>
          <input
            className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3"
            {...register("availableQuantity", { required: true })}
          />

          <label className="ms-2 font-bold text-lg">Description</label>
          <input
            className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3"
            {...register("description", { required: true })}
          />

          {errors.exampleRequired && <span>This field is required</span>}
          <input className="block bg-red-800 text-white font-bold text-lg w-full py-3 rounded cursor-pointer" value="Add" type="submit" />
        </form>
        <label className="btn btn-circle btn-outline" htmlFor="my-modal-6"> X</label>
  </div>
</div>
{/* Modal End */}
            <button className="btn btn-circle btn-outline">
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

{/* The button to open modal */}
{/* <label htmlFor="my-modal-6" className="btn">open modal</label> */}

{/* Put this part before </body> tag */}
{/* <input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
      <label htmlFor="my-modal-6" className="btn">Yay!</label>
    </div>
  </div>
</div> */}
