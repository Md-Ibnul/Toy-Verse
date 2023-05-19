import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowRight,  } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
  const [error, setError] = useState('');
    const {signIn, googleLogIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from =location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    console.log(email, password);

    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      navigate(from, {replace: true});
    })
    .catch(error => setError(error))
  };

  const handleGoogleLogin = () => {
    googleLogIn()
    .then(result => {
      const user = result.user;
    })
    .catch(error => setError(error))
  }
    return (
        <div className="my-container my-20">
      <div className="divide divide-y divide-slate-900 mb-20">
        <h2 className="text-4xl font-thin text-slate-900 uppercase pb-5">CUSTOMER LOGIN</h2>
        <hr />
      </div>
      <div className="w-2/5 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="ms-2 font-bold text-lg">Email</label>
          <input className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3" {...register("email", { required: true })} />

          <label className="ms-2 font-bold text-lg">Password</label>
          <input className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3" {...register("password", { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}
          <p className='text-red-500 text-xl my-5'>{error}</p>
          <div className="flex justify-between items-center">
            <div className="w-2/5"><input className="block bg-red-800 text-white font-bold text-lg w-full py-3 rounder cursor-pointer" type="submit" value="Login"/></div>
            <div>
                <h4>New Customer? <Link to='/register' className="hover:text-red-700">Register <FaArrowRight className="inline" /></Link></h4></div>
          </div>
        </form>
      <div className="mt-8 text-center">
        <h4 className="divide-current divide-x-2 divide-slate-800">Or Login With</h4>
        <button onClick={handleGoogleLogin} className="btn bg-red-800 btn-circle text-white font-bold text-xl mt-5"> <h3>G</h3>
</button>
      </div>
      </div>
    </div>
    );
};

export default Login;