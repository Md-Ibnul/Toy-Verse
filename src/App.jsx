import React from 'react';
import ToysNav from './Layouts/ToysNav';
import { Outlet } from 'react-router-dom';
import Footer from './Layouts/Footer';

const App = () => {
  return (
    <>
      <ToysNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;