import React from "react";
import { Link } from "react-router-dom";

function VideoInvalid() {
  return (
    <div>
      <h3 className="text-danger">Invalid Credentials</h3>
      <Link to="/login">Try Again..</Link>
    </div>
  );
}

export default VideoInvalid;
