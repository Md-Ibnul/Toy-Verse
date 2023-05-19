import React from "react";
import Banner from "./Components/Banner/Banner";
import Other from "./Components/Other";
import Gallery from "./Components/Gallery/Gallery";
import Category from "./Components/Category/Category";
import Sponsor from "./Sponsor";
import { ScrollRestoration } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import Upcoming from "./Components/Upcoming/Upcoming";

const Home = () => {
  useTitle("Home")
  return (
    <>
      <Banner />
      <Other />
      <Gallery />
      <Category />
      <Sponsor />
      <Upcoming />
      <ScrollRestoration />
    </>
  );
};

export default Home;
