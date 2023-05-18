import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Logo.png'
import { AuthContext } from '../Providers/AuthProvider';

const ToysNav = () => {
  const{user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then()
    .catch(error => console.log(error))
  }

    return (
        <div className="navbar bg-base-100 my-container">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <Link to='/'>
    <img className='w-52 mt-2' src={logo} alt="Logo" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex relative">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink className={({ isActive }) => (isActive ? "active" : "default")} to='/'>Home</NavLink></li>
      <li><NavLink className={({ isActive }) => (isActive ? "active" : "default")} to='/allToys'>All Toys</NavLink></li>
      <li><NavLink className={({ isActive }) => (isActive ? "active" : "default")} to='/myToys'>My Toys</NavLink></li>
      <li><NavLink className={({ isActive }) => (isActive ? "active" : "default")} to='/addToy'>Add Toys</NavLink></li>
      <li><NavLink className={({ isActive }) => (isActive ? "active" : "default")} to='/blog'>Blog</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    {
      user &&
      <div className="tooltip hover:tooltip-open tooltip-bottom" data-tip={user.displayName}>
  <img className='w-12 rounded-full' src={user.photoURL} alt="" />
</div>
    }
    { user ?
      <Link onClick={handleLogOut} className="btn my-btn text-white ms-5">Log Out</Link> :
      <Link to='/login' className="btn my-btn text-white ms-5">Login</Link>
    }
  </div>
</div>
    );
};

export default ToysNav;