import React from "react";
import { Link } from "react-router-dom";

function Invalid() {
  return (
    <div align="left">
      <h3>Invalid Credentials</h3>
      <Link to="/login">Try again</Link>
    </div>
  );
}

export default Invalid;
