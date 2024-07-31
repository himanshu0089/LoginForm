import React from "react";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const initilValues = {
    name: "",
    username: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
  };
  const [formValues, setFormValues] = useState(initilValues);
  const [errors, setErrors] = useState({});

  const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };
  const isValidName = (name) => {
    const nameRegex = /^[a-zA-Z][a-zA-Z\s]+$/;
    return nameRegex.test(name);
  };
  const isValidUserName = (username) => {
    const usernameRegex = /^[a-zA-Z0-9!@#$&()\\-`.+,/\"]*$/;
    return usernameRegex.test(username);
  };
  const isValidPhoneNo = (phoneNo) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNo);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const validateForm = () => {
    let newErrors = {};
    if (!formValues.name) {
      newErrors.name = "Name is required";
    } else if (!isValidName(formValues.name)) {
      newErrors.name = "The name should only contain alphabets";
    }

    if (!formValues.username) {
      newErrors.username = "Username is required";
    } else if (!isValidUserName(formValues.username)) {
      newErrors.username =
        "The alphanumeic and special charaters are allowed only";
    }
    if (!formValues.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formValues.email)) {
      newErrors.email = "Invalid Email Format";
    } else if (formValues.password === formValues.username) {
      newErrors.password = "Username and Password can not be same";
    }
    if (!formValues.phoneNo) {
      newErrors.phoneNo = "PhoneNo is required";
    } else if (!isValidPhoneNo(formValues.phoneNo)) {
      newErrors.phoneNo = "Phone No must be 10 digits:";
    }

    if (!formValues.password) {
      newErrors.password = "Password is required";
    }else if(formValues.password.length<4){
      newErrors.password = "Password should contain atleast 4 characters";
    }
    else if(formValues.password.length>10){
      newErrors.password = "Password should not exceed more than 4 characters";
    }

    if (!formValues.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formValues.password != formValues.confirmPassword) {
      newErrors.confirmPassword = "Passwords should match";
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
      navigate("/");
    } else {
      console.log("Error");
    }
  };

  return (
    <div>
      <header>
        <div className="head">
          <h2>Create New Account</h2>
        </div>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="left">
            <div className="content">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
              />

              {errors.name && <div className="error">{errors.name}</div>}
            </div>

            <div className="content">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>

            <div className="content">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
              {errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </div>
          </div>
          <div className="right">
            <div className="content">
              <input
                type="text"
                placeholder="UserName"
                name="username"
                value={formValues.username}
                onChange={handleChange}
              />
              {errors.username && (
                <div className="error">{errors.username}</div>
              )}
            </div>

            <div className="content">
              <input
                type="Number"
                placeholder="Phone No."
                name="phoneNo"
                value={formValues.phoneNo}
                onChange={handleChange}
              />
              {errors.phoneNo && <div className="error">{errors.phoneNo}</div>}
            </div>

            <div className="content">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <div className="error">{errors.confirmPassword}</div>
              )}
            </div>
          </div>
         
        </div>
        <div className="submit">
            <button>Sign Up</button>
          </div>
      </form>
    </div>
  );
}

export default SignUp;
