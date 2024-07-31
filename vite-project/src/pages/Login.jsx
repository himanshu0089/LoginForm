import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  let flag = false;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const validateForm = () => {
    let newErrors = {};
    if (!formValues.username) {
      newErrors.username = "Username is required";
    }
    if (!formValues.password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  console.log(errors);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log("Submitted", formValues);
      navigate("/Home");
    } else {
      console.log("Error");
    }
  };
  return (
    <div>
      <header>
        <div className="head">
          <h2>Login</h2>
          <h4>Sign in to Continue</h4>
        </div>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="content-login">
            <label>UserName:</label>
            <input
              type="text"
              placeholder="Enter UserName"
              name="username"
              value={formValues.username}
              onChange={handleChange}
            />
            {errors.username && <div className="error">{errors.username}</div>}
          </div>
          <div className="content-login">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
        </div>
        <div className="submit-login">
          <button>Login</button>
          <h3>
            Don't have an account ? <Link to="SignUp">Sign Up</Link>
          </h3>
        </div>
      </form>
    </div>
  );
}

export default Login;
