import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import axios from "axios";
import { useState, useEffect } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import Checkout from "./pages/Checkout";
import Carousel from "./components/Carousel";
import Profile from "./pages/Profile";

const App = () => {
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [slides, setSlides] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // const url = "http://127.0.0.1:8000/";
  const url = "http://delsur-furniture.herokuapp.com/";
  const apiUrl = `${url}api/`;
  const sliderUrl = `${url}api/slider/`;
  const productUrl = `${url}api/product/`;
  const categoryUrl = `${url}api/category/`;
  const usersUrl = `${url}api/users/`;
  const authUrl = `${url}auth/`;

  const PrivateWrapper = ({ isAuthenticated }) => {
    return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
  };

  useEffect(
    () =>
      axios.get(sliderUrl).then((res) => {
        setSlides(res.data);
      }),
    []
  );

  useEffect(
    () =>
      axios.get(productUrl).then((res) => {
        setProduct(res.data);
      }),
    []
  );

  useEffect(
    () =>
      axios.get(categoryUrl).then((res) => {
        setCategory(res.data);
      }),
    []
  );

  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateWrapper isAuthenticated={isAuthenticated} />}>
            <Route
              path="login"
              element={<Login usersUrl={usersUrl} authUrl={authUrl} />}
            />
            <Route
              path="register"
              element={<Register usersUrl={usersUrl} apiUrl={apiUrl} />}
            />
            <Route path="reset" element={<Reset usersUrl={usersUrl} />} />
          </Route>
          <Route element={<Home isAuthenticated={isAuthenticated} />}>
            <Route
              path="/"
              element={
                <Dashboard
                  product={product}
                  category={category}
                  slides={slides}
                />
              }
            />
            <Route path="carousel" element={<Carousel />} />
            <Route path="product" element={<ProductList product={product} />} />
            <Route
              path="product/:productId/"
              element={<Product productUrl={productUrl} />}
            />
            <Route path="cart" element={<Cart />} />
            <Route
              element={<PrivateWrapper isAuthenticated={!isAuthenticated} />}
            >
              <Route path="checkout" element={<Checkout />} />
            </Route>
          </Route>
          <Route
              element={<PrivateWrapper isAuthenticated={!isAuthenticated} />}
            >
              <Route path="profile" element={<Profile />} />
            </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
