import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";
import './category.css'
import { Link } from "react-router-dom";

const Category = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/toys`)
        .then(res => res.json())
        .then(data => {
            setToys(data);
        })
    }, []);

  return (
    <div className="my-container my-10 text-center">
      <h2 className="text-4xl font-bold text-slate-800 uppercase tittle-design relative inline tittle-design tracking-wider">
        Shop By Category
      </h2>
      <div className="mt-14 mb-10">
        <Tabs selectedTabClassName="bg-red-800 text-xl text-white font-bold font-mono rounded-tl-lg rounded-tr-lg">
          <TabList>
            <Tab>Marvel Heros</Tab>
            <Tab>DC Heros</Tab>
            <Tab>Other Heros</Tab>
          </TabList>

          <TabPanel>
            {
                toys.filter(toy => toy.subCategory == 'Marvel Superhero').map(toy => <CategoryCard
                    key={toy._id}
                    toy={toy}
                    ></CategoryCard>)
            }
          </TabPanel>
          <TabPanel>
          {
                toys.filter(toy => toy.subCategory == 'DC Superhero').map(toy => <CategoryCard
                    key={toy._id}
                    toy={toy}
                    ></CategoryCard>)
            }
          </TabPanel>
          <TabPanel>
          {
                toys.filter(toy => toy.subCategory == 'Other Superhero').map(toy => <CategoryCard
                    key={toy._id}
                    toy={toy}
                    ></CategoryCard>)
            }
          </TabPanel>
        </Tabs>
      </div>
      <Link to="/allToys" className="my-btn rounded mt-8">See All Toys</Link>
    </div>
  );
};

export default Category;

{/* <div className="mt-20">
        <Tabs>
          <TabList>
            <Tab>Marvel Heros</Tab>
            <Tab>DC Heros</Tab>
            <Tab>Other Heros</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </Tabs>
      </div> */}
