import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Announcement from "../components/Announcement";

const Home = () => {
  return (
    <>
      <Navbar />
      <Announcement/>
      <Outlet/>
      <Newsletter/>
      <Footer/>
    </>
  );
};

export default Home;
