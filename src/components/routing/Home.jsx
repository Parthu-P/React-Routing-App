import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`http://fakestoreapi.com/products/categories`)
      .then((response) => {
        setCategories(response.data);
      });
  }, []);
  return (
    <div className="container-fluid">
      <h3 align="left">
        <Link to="login">Login</Link>
      </h3>
      <h2 align="left">Categories Home</h2>
      <ol>
        {categories.map((category) => (
          <li align="left" key={category}>
            <Link to={`products/${category}`}>{category.toUpperCase()}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Home;
