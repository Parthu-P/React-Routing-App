import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

function VideoLogin() {
  const [cookies, setCookies, removeCookies] = useCookies(["uname"]);

  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      UserName: "",
      Password: 0,
    },
    onSubmit: (user) => {
      axios.get("http://127.0.0.1:4040/users").then((response) => {
        var userDetails = response.data.find(
          (item) => item.UserName === user.UserName
        );
        if (
          userDetails.UserName === user.UserName &&
          userDetails.Password === user.Password
        ) {
          setCookies("uname", user.UserName,[{expires:new Date('2024-3-2')}]);
          navigate("/videos");
        } else {
          navigate("/invalid");
        }
      });
    },
  });

  return (
    <div>
      <form className="w-25" onSubmit={formik.handleSubmit}>
        <h3>User Login</h3>
        <dl>
          <dt>UserName</dt>
          <dd>
            <input
              type="text"
              onChange={formik.handleChange}
              className="form-control"
              name="UserName"
            />
          </dd>
          <dt>Password</dt>
          <dd>
            <input
              type="password"
              onChange={formik.handleChange}
              className="form-control"
              name="Password"
            />
          </dd>
        </dl>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
      <p>
        <Link to="/register">New User Register</Link>
      </p>
    </div>
  );
}

export default VideoLogin;
