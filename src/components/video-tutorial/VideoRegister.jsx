import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function VideoRegister() {
  const [users, setUsers] = useState([]);
  let navigate = useNavigate();
  const [userError, setUserError] = useState("");
  const [validClass, setValidClass] = useState("");

  const formik = useFormik({
    initialValues: {
      UserId: 0,
      UserName: "",
      Password: "",
      Mobile: 0,
    },
    onSubmit: (user) => {
      axios.post("http://127.0.0.1:4040/register", user).then(() => {
        alert("Registered");
        navigate("/login");
      });
    },
  });

  useEffect(() => {
    axios.get("http://127.0.0.1:4040/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  function VerifyUserId(e) {
    for (var user of users) {
      if (user.UserId === e.target.value) {
        setUserError("UserId Existed");
        setValidClass("text-danger");
        break;
      } else {
        setUserError("UserId Available");
        setValidClass("text-success");
      }
    }
  }

  return (
    <div>
      <form className="w-25" onSubmit={formik.handleSubmit}>
        <h3>UserRegister</h3>
        <dl>
          <dt>UserId</dt>
          <dd>
            <input
              onKeyUp={VerifyUserId}
              className="form-control"
              type="text"
              name="UserId"
              onChange={formik.handleChange}
            />
          </dd>
          <dd className={validClass}>{userError}</dd>
          <dt>UserName</dt>
          <dd>
            <input
              className="form-control"
              type="text"
              name="UserName"
              onChange={formik.handleChange}
            />
          </dd>
          <dt>Password</dt>
          <dd>
            <input
              className="form-control"
              type="password"
              name="Password"
              onChange={formik.handleChange}
            />
          </dd>
          <dt>Mobile</dt>
          <dd>
            <input
              className="form-control"
              type="text"
              name="Mobile"
              onChange={formik.handleChange}
            />
          </dd>
        </dl>
        <button className="btn btn-primary w-100">Register</button>
      </form>
      <p>
        <Link to='/login'>Exsting User? Login</Link>
      </p>
    </div>
  );
}

export default VideoRegister;
