import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

const Home = ({isAuthenticated}) => {
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated}/>
      <Outlet/>
      <Newsletter/>
      <Footer/>
    </>
  );
};

export default Home;
