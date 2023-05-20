import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'
import { useTitle } from '../../hooks/useTitle';

const UpdateToy = () => {
    const toy = useLoaderData();
    console.log(toy);
    const {
        _id,
        pictureURL,
        toyName,
        subCategory,
        sellerName,
        sellerEmail,
        price,
        rating,
        availableQuantity,
        description,
      } = toy || {};
useTitle("Update Toys");
      const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{ 
    console.log(data);
    fetch(`https://toys-verse-server-site.vercel.app/allToys/${_id}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount >0){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your toy has been updated.',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
};

    return (
        <div className="my-container text-center my-16">
      <h2 className="text-4xl font-bold text-slate-900 uppercase relative inline tittle-design tracking-wider">
        Update Toy
      </h2>
      <div className=" w-4/5 md:w-2/5 mx-auto text-start mt-14">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label className="ms-2 font-bold text-lg">Toy Name</label>
                  <input
                    className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3"
                    defaultValue={toyName}
                    {...register("toyName", { required: true })}
                  />

                  <label className="ms-2 font-bold text-lg">
                    Toy PictureURL
                  </label>
                  <input
                    className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3"
                    defaultValue={pictureURL}
                    {...register("pictureURL", { required: true })}
                  />

                  <label className="ms-2 font-bold text-lg">Seller Name</label>
                  <input
                    className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3"
                    defaultValue={sellerName}
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
                    defaultValue={subCategory}
                    {...register("subCategory")}
                  >
                    <option value="Marvel Superhero">Marvel</option>
                    <option value="DC Superhero">DC</option>
                    <option value="Other Superhero">Other</option>
                  </select>

                  <label className="ms-2 font-bold text-lg">Price</label>
                  <input
                    className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3"
                    defaultValue={price}
                    {...register("price", { required: true })}
                  />

                  <label className="ms-2 font-bold text-lg">Rating</label>
                  <input
                    className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3"
                    defaultValue={rating}
                    {...register("rating", { required: true })}
                  />

                  <label className="ms-2 font-bold text-lg">
                    Available Quantity
                  </label>
                  <input
                    className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3"
                    defaultValue={availableQuantity}
                    {...register("availableQuantity", { required: true })}
                  />

                  <label className="ms-2 font-bold text-lg">Description</label>
                  <textarea
                    className="border border-slate-900 block rounded w-full h-28 mb-12 ps-3"
                    defaultValue={description}
                    {...register("description", { required: true })}
                  />

                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                  <input
                    className="block bg-red-800 text-white font-bold text-lg w-full py-3 rounded cursor-pointer"
                    value="Update Toy"
                    type="submit"
                  />
                </form>
              </div>
            </div>
    );
};

export default UpdateToy;