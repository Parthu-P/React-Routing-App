import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");

  let navigate = useNavigate();

  function handleUsernameChange(e) {
    setUserName(e.target.value);
  }

  function handleLoginButton() {
    if (userName === "admin") {
      navigate(`/success/${userName}`);
    } else {
      navigate("/invalid");
    }
  }
  return (
    <div align="left">
      <h3>Login</h3>
      Username: <input type="text" onChange={handleUsernameChange} />
      <button onClick={handleLoginButton}>Login</button>
    </div>
  );
}

export default Login;
