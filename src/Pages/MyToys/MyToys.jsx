import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useTitle } from "../../hooks/useTitle";
import { Link } from "react-router-dom";
import { FaArrowDown, FaEdit, FaTrash, FaTrashAlt } from "react-icons/fa";
import { key } from "localforage";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  useTitle("My Toys");
  useEffect(() => {
    fetch(`https://toys-verse-server-site.vercel.app/myToys/${user?.email}`)
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
        fetch(`https://toys-verse-server-site.vercel.app/allToys/${_id}`, {
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

  const handleSortLow = () => {
    fetch(`https://toys-verse-server-site.vercel.app/myToys/${user?.email}/lowPrice`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  };
  const handleSortHigh = () => {
    fetch(`https://toys-verse-server-site.vercel.app/myToys/${user?.email}/highPrice`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  };

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
                <th>
                <div className="dropdown dropdown-bottom dropdown-start">
                    <label tabIndex={0} className="btn btn-xs btn-info text-white m-1">
                      Sort By Price <FaArrowDown className="ms-2" />
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu shadow bg-cyan-100 rounded-box w-20"
                    >
                      <li className="text-white">
                        <a onClick={handleSortLow}>Low</a>
                      </li>
                      <li className="text-white">
                        <a onClick={handleSortHigh}>High</a>
                      </li>
                    </ul>
                  </div>
                </th>
                <th>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {myToys.map((toy, index) => (
                // {/* row 1 */}
                <tr key={toy._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="w-14">
                      <img src={toy.pictureURL} alt="Image" />
                    </div>
                  </td>
                  <td>
                    <div>
                      <h3 className="font-bold">{toy.toyName}</h3>
                      <p>{toy.subCategory}</p>
                    </div>
                  </td>
                  <td>
                    <h4 className="font-bold">{toy.sellerName}</h4>
                    <p>{toy.sellerEmail}</p>
                  </td>
                  <td>
                    <h4 className="font-bold">{toy.price}</h4>
                  </td>
                  <th>
                    <Link to={`/updateToy/${toy._id}`}>
                      <button className="btn btn-warning btn-xs text-white">
                        <FaEdit className="me-2" />
                        Edit
                      </button>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(toy._id)}
                      className="btn btn-error text-white btn-xs"
                    >
                      delete
                      <FaTrash className="ms-2" />
                    </button>
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
