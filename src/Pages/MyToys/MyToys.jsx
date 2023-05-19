import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MySingleToy from './MySingleToy';
import Swal from 'sweetalert2'

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

    const handleDelete = _id => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/allToys/${_id}`, {
            method: "DELETE",
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if(data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your toy has been deleted.',
                'success'
              )
              const remaining = myToys.filter(toys => toys._id !== _id );
              setMyToys(remaining);
            }
          })
        }
      })
    }

    return (
        <div className="my-container text-center my-16">
      <h2 className="text-4xl font-bold text-slate-900 uppercase relative inline tittle-design tracking-wider">
        All My Toys
      </h2>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20'>
        {
            myToys.map(toy => <MySingleToy
            key={toy._id}
            toy={toy}
            handleDelete={handleDelete}
            ></MySingleToy>)
        }
      </div>
        </div>
    );
};

export default MyToys;