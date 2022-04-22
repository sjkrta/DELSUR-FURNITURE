import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Newsletter/>
      <Footer/>
    </>
  );
};

export default Home;
