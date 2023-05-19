import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='my-container'>
            <div className='banner-bg relative'>
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 text-center tracking-wider pb-6 md:w-3/5'>
                    <h2 className='text-5xl text-white font-bold pb-6 uppercase font-sans leading-snug'>Grow Your Toy Collection With Our Toys.</h2>
                    <button className='btn my-btn'>Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;