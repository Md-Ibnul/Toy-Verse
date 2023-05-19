import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MySingleToy from './MySingleToy';

const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMyToys(data);
        })
    }, [user])

    return (
        <div className="my-container text-center my-16">
      <h2 className="text-4xl font-bold text-slate-900 uppercase relative inline tittle-design tracking-wider">
        All My Toy
      </h2>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-16'>
        {
            myToys.map(toy => <MySingleToy
            key={toy._id}
            toy={toy}
            ></MySingleToy>)
        }
      </div>
        </div>
    );
};

export default MyToys;