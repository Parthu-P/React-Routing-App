import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Details from "./Details";
import Login from "./Login";
import Invalid from "./Invalid";
import Success from "./Success";

function ShopperIndex() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <h1>Shopper Index</h1>
          
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products/:category" element={<Products />}>
            <Route path="details/:id" element={<Details />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="invalid" element={<Invalid />} />
          <Route path="success/:uname" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default ShopperIndex;
