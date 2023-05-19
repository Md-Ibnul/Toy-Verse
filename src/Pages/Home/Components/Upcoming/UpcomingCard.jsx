import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const UpcomingCard = ({toy}) => {
    const {_id, pictureURL, toyName, subCategory, rating} = toy || {};
    useEffect(() => {
        AOS.init({duration: 2500});
      },[]);
    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl mb-5" data-aos="flip-left">
  <figure><img src={pictureURL} alt="Image" /></figure>
  <div className="card-body text-center">
    <h2 className="card-title text-center font-bold text-slate-900 uppercase font-mono mb-1">{toyName}</h2>
    <p className='font-semibold font-mono opacity-80'>{subCategory}</p>
    <p className='font-semibold font-mono opacity-80'> Rating: {rating}</p>
  </div>
</div>
    );
};

export default UpcomingCard;