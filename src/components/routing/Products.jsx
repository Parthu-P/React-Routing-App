import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  let params = useParams();

  useEffect(() => {
    axios
      .get(`http://fakestoreapi.com/products/category/${params.category}`)
      .then((response) => {
        setProducts(response.data);
      });
  });
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "6fr 6fr" }}>
        <div>
          <h3 align="left">{params.category.toUpperCase()}- Products</h3>
          {products.map((product) => (
            <Link
              key={product.id}
              to={`details/${product.id}`}
              style={{ width: "20px" }}
            >
              <img
                src={product.image}
                width="100"
                height="100"
                style={{ margin: "20px", display: "flex" }}
              />
            </Link>
          ))}
        </div>
        <div>
            <Outlet></Outlet>
        </div>
      </div>
      <p align="left">
        <Link to="/">Back to categories</Link>
      </p>
    </div>
  );
}

export default Products;
