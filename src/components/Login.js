import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import './Login.css'
import axios from "axios";

// import styles from './Login.module.css';

const Login = ({ token, setToken, user, setUser, setLogged, userId, setUserId }) => {
  const [formData, setFormData] = useState({
  
    username: "",
    password: "",  
  });
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login/",
        formData
      );

      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.id);
      localStorage.setItem('username',response.data.username)

      setUser(response.data.username);
      console.log("token is " + token + " u -" + user);
      setLogged(true);
      setUserId(response.data.id)
      console.log(response.data)

      navigate("/home");


    } catch (err) {
      setMessage("Wrong credentials !");
      document.getElementById("alert").style.display = "block";
      console.log(err);
    }
  };

  return (
    <>
        {/* <style jsx="true">
          {`
            *,
            *:before,
            *:after {
              padding: 0;
              margin: 0;
              box-sizing: border-box;
            }
            body {
              background-color: #343483e8;
            }
            .background {
              width: 430px;
              height: 520px;
              position: absolute;
              transform: translate(-50%, -50%);
              left: 50%;
              top: 50%;
            }
            .background .shape {
              height: 200px;
              width: 200px;
              position: absolute;
              border-radius: 50%;
            }
            .shape:first-child {
              background: linear-gradient(#1845ad, #23a2f6);
              left: -80px;
              top: -80px;
            }
            .shape:last-child {
              background: linear-gradient(to right, #ff512f, #f09819);
              right: -30px;
              bottom: -80px;
            }
            form {
              height: 520px;
              width: 400px;
              background-color: rgba(255, 255, 255, 0.13);
              position: absolute;
              transform: translate(-50%, -50%);
              top: 50%;
              left: 50%;
              border-radius: 10px;
              backdrop-filter: blur(10px);
              border: 2px solid rgba(255, 255, 255, 0.1);
              box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
              padding: 50px 35px;
            }
            form * {
              font-family: "Poppins", sans-serif;
              color: #ffffff;
              letter-spacing: 0.5px;
              outline: none;
              border: none;
            }
            form h3 {
              font-size: 32px;
              font-weight: 500;
              line-height: 42px;
              text-align: center;
            }

            label {
              display: block;
              margin-top: 30px;
              font-size: 16px;
              font-weight: 500;
            }
            input {
              display: block;
              height: 50px;
              width: 100%;
              background-color: rgba(255, 255, 255, 0.07);
              border-radius: 3px;
              padding: 0 10px;
              margin-top: 8px;
              font-size: 14px;
              font-weight: 300;
            }
            ::placeholder {
              color: #e5e5e5;
            }
            button {
              margin-top: 50px;
              width: 100%;
              background-color: #ffffff;
              color: #080710;
              padding: 15px 0;
              font-size: 18px;
              font-weight: 600;
              border-radius: 5px;
              cursor: pointer;
            }
            .social {
              margin-top: 30px;
              display: flex;
            }
            .social div {
              background: red;
              width: 150px;
              border-radius: 3px;
              padding: 5px 10px 10px 5px;
              background-color: rgba(255, 255, 255, 0.27);
              color: #eaf0fb;
              text-align: center;
            }
            .social div:hover {
              background-color: rgba(255, 255, 255, 0.47);
            }
            .social .fb {
              margin-left: 25px;
            }
            .social i {
              margin-right: 4px;
            }
            #alert {
              display: none;
              z-index: 2;
            }
          `}
        </style>
        <div className="alert alert-warning" role="alert" id="alert">
          {message}
        </div>
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <h3>Login Here</h3>

          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            placeholder="Username"
            id="username"
            value={formData.username}
            onChange={handleInputChange}
          />

          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            id="password"   
            value={formData.password}
            onChange={handleInputChange}
          />

          <button type="submit">Log In</button>
          <Link to="/register">Register?</Link>
        </form> */}



<center>
        <div className="login-container">
    <div className="title">Registration</div>
    <div className="content">
      <form action="#" onSubmit={handleSubmit}>
        <div className="user-details">
        
          <div className="input-box">
            <span className="details">Username</span>
            <input name ="username" type="text" placeholder="Username" id="username" value={formData.username} onChange={handleInputChange} required/>
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input name ="password" type="password" placeholder="Password" id="password" value={formData.password} onChange={handleInputChange} required/>
          </div>

        </div>


        <div className="button">
          <input type="submit" value="Login"/>
        </div>
        <Link to="/register">Register?</Link>
      </form>
    </div>
  </div>



</center>

        
    </>
  );
};

export default Login;
