import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({toy}) => {
    const{_id, pictureURL, toyName, price, rating} = toy || {};
    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl mb-5">
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