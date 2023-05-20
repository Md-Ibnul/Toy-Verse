import React, { useEffect, useState } from 'react';
import GalleryImage from './GalleryImage';

const Gallery = () => {
    const[toys, setToys] = useState([]);
    useEffect(() => {
        fetch('https://toys-verse-server-site.vercel.app/toys')
        .then(res => res.json())
        .then(data => {
            setToys(data);
        })
    },[])
    return (
        <div className='my-container text-center my-16'>
            <hr />
            <h2 className='text-2xl md:text-4xl font-bold text-slate-900 uppercase relative inline tittle-design tracking-wider'>Gallery Of Our Shop</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 mt-20 px-5 md:px-0'>
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