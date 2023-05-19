import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const GalleryImage = ({ toy }) => {
  useEffect(() => {
    AOS.init({duration: 2500});
  },[]);
  return (
    <div className="relative mb-10" data-aos="fade-up"
data-aos-anchor-placement="bottom-bottom">
      <div className="opacity-80 transition-opacity duration-500 hover:opacity-100">
        <img
          className="object-cover ease-in-out duration-500 hover:-rotate-6 hover:scale-125 mb-10"
          src={toy?.pictureURL}
          alt="Image"
        />
      </div>
      <p className="w-full -bottom-5 bg-red-800 text-white font-bold py-2 px-6 rounded-md absolute z-50">
        {toy?.toyName}
      </p>
    </div>
  );
};

export default GalleryImage;
