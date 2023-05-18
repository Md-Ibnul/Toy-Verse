import React from "react";

const GalleryImage = ({ toy }) => {
  return (
    <div className="relative mb-10">
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
