import React, { useEffect, useState } from "react";
import AllToysCard from "./AllToysCard";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState("");

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
      <div className="grid md:grid-cols-3">
        <div>
          <div className="dropdown dropdown-right">
            <label tabIndex={0} className="btn m-1">
              Sort By Price
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>From Lowest</a>
              </li>
              <li>
                <a>From Highest</a>
              </li>
            </ul>
          </div>
        </div>
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
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
        {allToys.map((toy) => (
          <AllToysCard key={toy._id} toy={toy}></AllToysCard>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
