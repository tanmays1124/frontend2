import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = ({ token, setToken, user, setUser, setLogged }) => {
  const handleClick = () => {
    console.log("log out");
    setToken("");
    setLogged(false);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary text-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand text-dark" to="/home">
            QuizViz
          </Link>
          <Link className="navbar-brand text-dark" to="/home">
            {user}
          </Link>
          <button
            className="navbar-toggler text-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-dark"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/history">
                  History
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/leaderboard">
                  Leaderboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  to="/login"
                  onClick={handleClick}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
