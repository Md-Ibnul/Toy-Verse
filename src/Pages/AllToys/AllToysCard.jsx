import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const AllToysCard = ({toy}) => {
    const {_id, pictureURL, sellerName, toyName, subCategory, price, availableQuantity} = toy || {};
    useEffect(() => {
      AOS.init({duration: 2500});
    },[]);
    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl mb-5" data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
  <figure><img src={pictureURL} alt="Image" /></figure>
  <div className="card-body text-start">
    <h2 className="card-title font-bold text-slate-900 uppercase font-serif mb-1">{toyName}</h2>
    <p className='font-semibold font-mono opacity-60'>{sellerName}</p>
    <p className='font-semibold font-mono opacity-80'>{subCategory}</p>
    <p className='font-semibold font-mono'>Available: {availableQuantity}</p>
    <p className='font-semibold font-mono'>Price: ${price}</p>
    <Link to={`/toyDetails/${_id}`} className='my-btn rounded-md'>View Details</Link>
  </div>
</div>
    );
};

export default AllToysCard;