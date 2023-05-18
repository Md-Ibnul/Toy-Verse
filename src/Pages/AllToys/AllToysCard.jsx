import React from 'react';

const AllToysCard = ({toy}) => {
    const {_id, pictureURL, sellerName, toyName, subCategory, price, availableQuantity} = toy || {};
    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl mb-5">
  <figure><img src={pictureURL} alt="Image" /></figure>
  <div className="card-body text-start">
    <h2 className="card-title font-bold text-slate-900 uppercase font-serif mb-1">{toyName}</h2>
    <p className='font-semibold font-mono opacity-60'>{sellerName}</p>
    <p className='font-semibold font-mono opacity-80'>{subCategory}</p>
    <p className='font-semibold font-mono'>Available: {availableQuantity}</p>
    <p className='font-semibold font-mono'>Price: ${price}</p>
    <button  className='my-btn rounded-md'>View Details</button>
  </div>
</div>
    );
};

export default AllToysCard;