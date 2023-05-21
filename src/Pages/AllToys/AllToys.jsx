import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { FaEye } from "react-icons/fa";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  useTitle("All Toys");
  useEffect(() => {
    fetch(`https://toys-verse-server-site.vercel.app/allToys`)
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  const handleSearch = () => {
    fetch(
      `https://toys-verse-server-site.vercel.app/toySearchByName/${searchText}`
    )
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
              {allToys?.map((toy, index) => (
                // {/* row 1 */}
                <tr key={toy?._id}>
                  <th>{index + 1}</th>
                  <td>
                    <>
                      <h4 className="font-bold text-lg">{toy?.sellerName}</h4>
                      <p>{toy?.sellerEmail}</p>
                    </>
                  </td>
                  <td>
                    <>
                      <h4 className="font-bold">{toy?.toyName}</h4>
                      <p>{toy?.subCategory}</p>
                    </>
                  </td>
                  <td>
                    <h4b className="font-bold">{toy?.price}</h4b>
                  </td>
                  <td>
                    <h4 className="font-bold">{toy?.availableQuantity}</h4>
                  </td>
                  <th>
                    <Link to={`/toyDetails/${toy._id}`}>
                      <button className="btn btn-warning btn-xs text-white">
                        <FaEye className="me-2 inline" />
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
