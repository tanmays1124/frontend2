// import react from 'react';
import "./Home.css";
import linux from "../images/linux.jpg";
import sql from "../images/sql.jpg";
import ml from "../images/ml.jpg";
import html from "../images/html.jpg";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Loading from "./Loading";
import axios from "axios";

// import Select from "react-dropdown-select";

const Cards = (props) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [options, setOptions] = useState([]);
  const [allUpdated, setAllUpdated] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleBeginNowClick = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get("http://127.0.0.1:8000/api/questions/", {
        params: {
          category: "Linux",
          difficulty: "medium",
          num_questions: 2,
        },
      });

      let que = [];
      let ans = [];
      let opt = [];
      function myFunction(item) {
        let op = [];
        op.push(item.option_a);
        op.push(item.option_b);
        op.push(item.option_c);
        op.push(item.option_d);

        que.push(item.question);
        ans.push(item.answer);

        opt.push(op);
      }
      response.data.forEach(myFunction);
      setAnswers(ans);
      setQuestions(que);
      setOptions(opt);
    } catch (err) {
      console.log("Error hai bhai" + err);
    }
  };

  useEffect(() => {
    if (loading) {
      setLoading(false);
    }

    // Check if all three states have been updated
    if (questions.length > 0 && options.length > 0 && answers.length > 0) {
      setAllUpdated(true);
    }
  }, [questions, options, answers]);

  useEffect(() => {
    if (allUpdated) {
      // Perform rendering logic or other actions here
      console.log("All three states are updated:", questions, options, answers);
    }
  }, [allUpdated]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="card">
            <img src={props.image} className="card-img-top" alt="title" />
            <div className="card-body">
              <h5 className="card-title">
                <a href="#" onClick={handleBeginNowClick}>
                  {props.title}
                </a>
              </h5>
              <p className="card-text">{props.content}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Home = ({ user, setUser, token, setToken, setLogged }) => {
  return (
    <>
      <Navbar
        user={user}
        setUser={user}
        token={token}
        setToken={setToken}
        setLogged={setLogged}
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossorigin="anonymous"
      />
      <div className="container">
        <div className="row">
          <Cards
            title={"Linux"}
            image={linux}
            content={
              "Click to begin attempt on Linux and it's sub-domain topics."
            }
          />
          <Cards
            title={"SQL"}
            image={sql}
            content={
              "Click to begin attempt on SQL and it's sub-domain topics."
            }
          />
          <Cards
            title={"AI/ML"}
            image={ml}
            content={
              "Click to begin attempt on AI/ML and it's sub-domain topics."
            }
          />
          <Cards
            title={"HTML"}
            image={html}
            content={
              "Click to begin attempt on HTML and it's sub-domain topics."
            }
          />
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"
      ></script>
    </>
  );
};

export default Home;
