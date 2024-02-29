import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Details() {
  let params = useParams();

  const [product, setProduct] = useState({
    id: 0,
    price: 0,
    title: "",
    image: "",
    category: "",
    description: "",
    rating: { rate: 0, count: 0 },
  });

  useEffect(() => {
    axios
      .get(`http://fakestoreapi.com/products/${params.id}`)
      .then((response) => {
        setProduct(response.data);
      });
  }, [params.id]);

  return (
    <div align="left">
      <h3>Details</h3>
      <img src={product.image} width="200" height="200" />
      <dl>
        <dt>Title</dt>
        <dd>{product.title}</dd>
        <dt>Price</dt>
        <dd>{product.price}</dd>
      </dl>
    </div>
  );
}

export default Details;
