import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Profile({isAuthenticated}) {
  return (
    <>
    <Navbar isAuthenticated={isAuthenticated}/>
    <h1>Profile</h1>
    <Footer/>
  </>
  )
}
