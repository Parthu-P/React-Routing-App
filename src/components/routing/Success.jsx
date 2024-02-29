import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Success() {
  let params = useParams();
  return (
    <div>
      <h3 align="left">Login Success..{params.uname}</h3>
    </div>
  );
}

export default Success;
