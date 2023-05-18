import React, { useEffect, useState } from 'react';
import GalleryImage from './GalleryImage';

const Gallery = () => {
    const[toys, setToys] = useState([]);
    useEffect(() => {
        fetch('toys.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setToys(data);
        })
    },[])
    return (
        <div className='my-container text-center my-16'>
            <h2 className='text-4xl font-bold text-slate-900 uppercase relative inline tittle-design'>Gallery Of Our Shop</h2>
            <div className='grid grid-cols-4 gap-10 mt-20'>
                {
                    toys.slice(0,8).map(toy =><GalleryImage
                    key={toy._id}
                    toy={toy}
                    ></GalleryImage>)
                }
            </div>
        </div>
    );
};

export default Gallery;