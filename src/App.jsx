import React, { useContext } from 'react';
import ToysNav from './Layouts/ToysNav';
import { Outlet } from 'react-router-dom';
import Footer from './Layouts/Footer';
import { AuthContext } from './Providers/AuthProvider';
import Loader from './Layouts/Loader';

const App = () => {
  const {loading} = useContext(AuthContext);
  if(loading){
    return <Loader />
  }
  return (
    <>
      <ToysNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;