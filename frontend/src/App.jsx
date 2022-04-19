import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const url = "http://127.0.0.1:8000/api/";

  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [slider, setSlider] = useState(null);

  const sliderUrl = `${url}slider/`;
  const productUrl = `${url}product/`;
  const categoryUrl = `${url}category/`;

  useEffect(
    () =>
      axios.get(sliderUrl).then((res) => {
        setSlider(res.data);
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
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/" element={<Home />}>
            <Route
              path="/"
              element={<Dashboard product={product} category={category} slider={slider}/>}
            />
            <Route path="product" element={<ProductList product={product} />} />
            <Route
              path="product/:productId/"
              element={<Product productUrl={productUrl}/>}
            />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
