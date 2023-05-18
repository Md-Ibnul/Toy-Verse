import React from 'react';

const GalleryImage = ({toy}) => {
    return (
        <div className='opacity-80 transition-opacity duration-500 hover:opacity-100'>
            <img className='object-cover ease-in-out duration-500 hover:-rotate-3 hover:scale-110' src={toy?.pictureURL} alt="Image" />
            <p className='w-full bottom-0 left-0 bg-red-800 text-white font-bold py-2 px-6 rounded-md z-50'>{toy?.toyName}</p>
        </div>
    );
};

export default GalleryImage;