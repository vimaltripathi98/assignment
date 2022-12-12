import React, { useState } from "react";
import "./Login.css";
import users from "../json/users.json";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const initialField = {
    email: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(initialField);
  const { email, password } = loginData;
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  let regPassword =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

  const validation = () => {
    let error = {};
    if (regEmail.test(email) === false) {
      error.email = "Please fill valid email";
    }
    if (regPassword.test(password) === false) {
      error.password = "Please fill valid password";
    }
    setErrors(error);
  };

  const navigate = useNavigate();

  const submitClick = (e) => {
    validation();
    e.preventDefault();
    let userAuth = users.users.find(
      (item, index) => email === item.email && password === item.password
    );
    userAuth.password = window.btoa(userAuth.password);
    localStorage.setItem("datakey", JSON.stringify(userAuth));
    setLoginData(userAuth);
    navigate("/userlist");
  };

  return (
    <div className="mainContainer">
      <div className="inputCenter">
        <form className="loginForm">
          <h1 className="loginText">Login</h1>
          <input
            placeholder="Please Enter Your Email"
            className="inputField"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <div style={{ color: "red", width: "37%" }}>{errors.email}</div>
          <input
            value={password}
            name="password"
            type="password"
            placeholder="Please Enter Your assword"
            className="inputField"
            onChange={handleChange}
          />
          <div style={{ color: "red", width: "37%" }}>{errors.password}</div>
          <button onClick={submitClick}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
