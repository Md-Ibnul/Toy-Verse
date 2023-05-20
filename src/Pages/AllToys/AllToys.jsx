import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { FaEye } from "react-icons/fa";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  useTitle("All Toys");
  useEffect(() => {
    fetch(`http://localhost:5000/allToys`)
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/toySearchByName/${searchText}`)
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  };

  return (
    <div className="my-container text-center my-16">
      <div className="grid md:grid-cols-3 gap-10 md:gap-0">
        <div></div>
        <h2 className="text-4xl font-bold text-slate-900 uppercase relative inline tittle-design tracking-wider">
          Our All Heros
        </h2>
        <div>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-2 border-2 border-e-0 border-slate-900 h-12"
          />
          <button onClick={handleSearch} className="my-btn">
            Search
          </button>
        </div>
      </div>
      <div className="mt-10">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {allToys.map((toy, index) => (
                // {/* row 1 */}
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <h4>{toy?.sellerName}</h4>
                    <p>{toy?.sellerEmail}</p>
                  </td>
                  <td>
                    <div>
                      <h3>{toy?.toyName}</h3>
                      <p>{toy?.subCategory}</p>
                    </div>
                  </td>
                  <td>
                    <h4>{toy?.price}</h4>
                  </td>
                  <td>
                    <h4>{toy?.availableQuantity}</h4>
                  </td>
                  <th>
                    <Link to={`/toyDetails/${toy._id}`}>
                      <button className="btn btn-warning btn-xs">
                        {" "}
                        <FaEye />
                        View Details
                      </button>
                    </Link>
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

export default AllToys;
