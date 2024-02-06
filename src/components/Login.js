import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import log from "../images/Log.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";

const Login = ({ token, setToken, setUser, setLogged, setUserId }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // const handleTogglePassword = () => {
  //   setShowPassword(!showPassword);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login/",
        formData
      );
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.id);
      localStorage.setItem("username", response.data.username);
      setUser(response.data.username);
      setLogged(true);
      setUserId(response.data.id);
      navigate("/home");
    } catch (err) {
      setErrorMessage("Invalid credentials!");
      console.log(err);
    }
  };

  return (
    <>
    <center>
        <div className="partition">
          {/* <div
            className="partition-image"
            style={{ backgroundImage: `url(${log})` }}
          ></div> */}
          <div className="login-container">
            <div className="title">Login</div>
            <div className="content">
              {errorMessage && (
                <div id="alert" className="error-message">
                  {errorMessage}
                </div>
              )}
              <form action="#" onSubmit={handleSubmit}>
                <div className="user-details">
                  <div className="inputbox">
                    {/* <span className="details">Username</span> */}
                    <input
                      name="username"
                      type="text"
                      placeholder="Username"
                      id="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="inputbox">
                    {/* <span className="details">Password</span> */}
                    <div className="password-input-container">
                      <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        id="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                      />
                      </div>
                  </div>
                </div>
                <div className="button" >
                  <input type="submit" value="Login" />
                </div>
                <Link to="/register"className="register-link">Register?</Link>
                <Link to="http://127.0.0.1:8000/api/forgot_password/" className="forgot">Forgot Password</Link>
              </form>
            </div>
          </div>
        </div>
        </center>
  

{/* <div className="login-wrap">
      <div className="login-html">
        <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
        <label htmlFor="tab-1" className="tab">
          Sign In
        </label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" />
        <label htmlFor="tab-2" className="tab">
          Sign Up
        </label>
        <div className="login-form">
          <div className="sign-in-htm">
            <div className="group">
              <label htmlFor="username" className="label">
                Username
              </label>
              <input
                id="user"
                name="username"
                type="text"
                className="input"
                onChange={handleInputChange}
                value={formData.username}
              />
            </div>
            <div className="group">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                id="pass"
                type={showPassword ? "text" : "password"}
                name="password"
                className="input"
                data-type="password"
                onChange={handleInputChange}
                value={formData.password}
              />
            </div>
            <div className="group">
              <input type="submit" className="button" value="Sign In" onClick={handleSubmit} />
            </div>
            <div className="hr"></div>
            <div className="foot-lnk">
              <Link to="/forgot">Forgot Password?</Link>
            </div>
          </div>
          <div className="sign-up-htm">
            <div className="group">
              <label htmlFor="username" className="label">
                Username
              </label>
              <input id="user" name="username" type="text" className="input" value={formData.username} />
            </div>
            <div className="group">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input id="pass" name="password" type="password" className="input" data-type="password" value={formData.password} />
            </div>
            <div className="group">
              <label htmlFor="email" className="label">
                Email Address
              </label>
              <input id="email" name="email" type="text" className="input" value={formData.email} />
            </div>
            <div className="group">
              <input type="submit" className="button" value="Sign Up" onClick={handleSubmit} />
            </div>
            <div className="hr"></div>
            <div className="foot-lnk">
              <Link to="/login" htmlFor="tab-1">
                Already Member?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default Login;
