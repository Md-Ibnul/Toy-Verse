import React from 'react';
import Banner from './Components/Banner/Banner';
import Other from './Components/Other';
import Gallery from './Components/Gallery/Gallery';
import Category from './Components/Category/Category';
import Sponsor from './Sponsor';

const Home = () => {
    return (
        <>
            <Banner />
            <Other />
            <Gallery />
            <Category />
            <Sponsor />
        </>
    );
};

export default Home;