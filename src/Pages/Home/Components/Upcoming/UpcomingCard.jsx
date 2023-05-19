import React from 'react';

const UpcomingCard = ({toy}) => {
    const {_id, pictureURL, toyName, subCategory, rating} = toy || {};
    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl mb-5">
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