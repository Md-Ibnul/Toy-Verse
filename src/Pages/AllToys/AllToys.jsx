import React, { useEffect, useState } from "react";
import AllToysCard from "./AllToysCard";
import { Link } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState("");
useTitle("All Toys")
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

  const handleLowest = () => {
    console.log(clicked);
    fetch('http://localhost:5000//toys/lowPrice')
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  };

  const handleHighest = () => {
    console.log(clicked);
    fetch('http://localhost:5000//toys/highPrice')
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  };

  return (
    <div className="my-container text-center my-16">
      <div className="grid md:grid-cols-3 gap-10 md:gap-0">
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
                <Link onClick={handleLowest}>From Lowest</Link>
              </li>
              <li>
                <Link onClick={handleHighest}>From Highest</Link>
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
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 ms-16 md:ms-0">
        {allToys.map((toy) => (
          <AllToysCard key={toy._id} toy={toy}></AllToysCard>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
