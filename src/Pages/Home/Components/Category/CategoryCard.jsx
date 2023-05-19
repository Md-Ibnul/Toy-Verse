import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const CategoryCard = ({toy}) => {
    const{_id, pictureURL, toyName, price, rating} = toy || {};
    useEffect(() => {
      AOS.init({duration: 1500});
    },[]);
    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl mb-5" data-aos="fade-down"
        data-aos-easing="linear">
  <figure><img src={pictureURL} alt="Image" /></figure>
  <div className="card-body text-start">
    <h2 className="card-title font-bold text-slate-900 uppercase font-serif">{toyName}</h2>
    <p className='font-semibold font-mono'>Price: ${price}</p>
    <p className='font-semibold font-mono'>Ratings: {rating}</p>
    <Link to={`/toyDetails/${_id}`} className='my-btn rounded-md'>View Details</Link>
  </div>
</div>
    );
};

export default CategoryCard;