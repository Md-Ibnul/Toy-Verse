import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useTitle } from "../../hooks/useTitle";
import { Link } from "react-router-dom";
import { FaArrowDown, FaEdit } from "react-icons/fa";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  useTitle("My Toys");
  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/allToys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              const remaining = myToys.filter((toys) => toys._id !== _id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  const handleSort = () => {
    fetch(`http://localhost:5000/myToys/${user?.email}/price`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }

  return (
    <div className="my-container text-center my-16">
      <h2 className="text-4xl font-bold text-slate-900 uppercase relative inline tittle-design tracking-wider">
        All My Toys
      </h2>
      <div className="my-10">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Toy Photo</th>
                <th>Toy Name</th>
                <th>Seller</th>
                <th  onClick={handleSort}><div className="btn btn-info btn-xs">Price<FaArrowDown className="inline ms-1"/></div> </th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {myToys.map((toy, index) => (
                // {/* row 1 */}
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <div className="w-14">
                      <img src={toy.pictureURL} alt="Image" />
                    </div>
                  </td>
                  <td>
                    <div>
                      <h3>{toy.toyName}</h3>
                      <p>{toy.subCategory}</p>
                    </div>
                  </td>
                  <td>
                    <h4>{toy.sellerName}</h4>
                    <p>{toy.sellerEmail}</p>
                  </td>
                  <td>
                    <h4>{toy.price}</h4>
                  </td>
                  <th>
                    <Link to={`/updateToy/${toy._id}`}>
                      <button className="btn btn-warning btn-xs"> <FaEdit />
                        Edit</button>
                    </Link>
                  </th>
                  <th>
                    <button onClick={() => handleDelete(toy._id)} className="btn btn-error text-white btn-xs">delete</button>
                  </th>
                </tr>
              ))}
              ;
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
