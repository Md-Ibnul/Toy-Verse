import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight,  } from 'react-icons/fa';
import { AuthContext } from "../../Providers/AuthProvider";



const Register = () => {
  const {createUser, googleLogIn, updateUserProfile , loading} = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const photo = data.photo;
    const password = data.password;
    console.log(name, email, photo, password);

    setError("");

    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
    }
    createUser(email, password)
    .then(result => {
      const user = result.user;
      updateUserProfile(name, photo)
      .then(() => {
        navigate('/');
      })
      .catch(error => setError(error.message));
      console.log(user);
    })
    .catch(error => setError(error.message))
  };

  const handleGoogleLogin = () => {
    googleLogIn()
    .then(result => {
      const user = result.user;
      navigate('/');
    })
    .catch(error => setError(error))
  }
    
  return (
    <div className="my-container my-20">
      <div className="divide divide-y divide-slate-900 mb-20">
        <h2 className="text-4xl font-thin text-slate-900 uppercase pb-5">CREATE ACCOUNT</h2>
        <hr />
      </div>
      <div className="w-2/5 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className="ms-2 font-bold text-lg">Name</label>
          <input className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3" {...register("name", { required: true })} />

          <label className="ms-2 font-bold text-lg">Email</label>
          <input className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3" {...register("email", { required: true })} />

          <label className="ms-2 font-bold text-lg">PhotoURL</label>
          <input className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3" {...register("photo", { required: true })} />

          <label className="ms-2 font-bold text-lg">Password</label>
          <input className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3" {...register("password", { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}
          <p className="ms-2 text-red-500 mb-3">{error}</p>
          <div className="flex justify-between items-center">
            <div className="w-2/5"><input className="block bg-red-800 text-white font-bold text-lg w-full py-3 rounded cursor-pointer" type="submit" value="Register"/></div>
            <div>
                <h4>Returning Customer? <Link to='/login'  className="hover:text-red-700">Login <FaArrowRight className="inline" /></Link></h4></div>
          </div>
        </form>
      <div className="mt-8 text-center">
        <h4 className="divide divide-x-2 divide-slate-800">Or Login With</h4>
        <button onClick={handleGoogleLogin} className="btn bg-red-800 btn-circle text-white font-bold text-xl mt-5"> <h3>G</h3>
</button>
      </div>
      </div>
    </div>
  );
};

export default Register;
