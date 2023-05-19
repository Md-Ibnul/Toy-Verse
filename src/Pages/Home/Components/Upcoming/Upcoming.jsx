import React, { useEffect, useState } from 'react';
import UpcomingCard from './UpcomingCard';

const Upcoming = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/upcoming')
        .then(res => res.json())
        .then(data => {
            setToys(data);
        });
    }, [])
    return (
        <div className='my-container text-center my-16'>
            <hr />
            <h2 className='text-2xl md:text-4xl font-bold text-slate-900 uppercase relative inline tittle-design tracking-wider'>Upcoming</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-5 mt-20 px-5 md:px-0'>
                {
                    toys.map(toy => <UpcomingCard
                    key={toy._id}
                    toy={toy}
                    ></UpcomingCard>)
                }
            </div>
        </div>
    );
};

export default Upcoming;