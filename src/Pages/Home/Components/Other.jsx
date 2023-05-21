import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import original from '../../../assets/original.png'
import offer from '../../../assets/offer.jpg'
import delivery from '../../../assets/delivery.png'
import customer from '../../../assets/customer support.jpg'

const Other = () => {
    useEffect(() => {
        AOS.init({duration: 2500});
      },[]);
    return (
        <div className='my-container my-16 md:my-24'>
            <div className='md:flex'>
                <div className='w-fit mx-auto md:w-1/4 mb-10 md:mb-0' data-aos="fade-right">
                    <img className='w-60 md:mt-10' src={original} alt="" />
                </div>
                <div className='w-fit mx-auto md:w-1/4 mb-10 md:mb-0' data-aos="fade-down-right">
                    <img className='w-64 md:mt-14' src={offer} alt="" />
                </div>
                <div className='w-fit mx-auto md:w-1/4 mb-20 md:mb-0' data-aos="fade-down-left">
                    <img className='w-64 md:mt-16' src={delivery} alt="" />
                </div>
                <div className='w-fit mx-auto md:w-1/4' data-aos="fade-left">
                    <img className='w-64' src={customer} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Other;