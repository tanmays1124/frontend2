// import react from 'react';
import "./Home.css";
import linux from "../images/linux.jpg";
import sql from "../images/sql.jpg";
import ml from "../images/ml.jpg";
import html from "../images/html.jpg";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Loading from "./Loading";
import Quiz from "./Quiz";
import axios from "axios";

const Modal = (props) => {
  const [selectedValues, setSelectedValues] = useState({
    select1: '',
    select2: '',
    select3: '',
  });

  const handleDropdownChange = (selectName, event) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [selectName]: event.target.value,
    }));
  };

  const handleStart = () => {
    console.log('Selected value:', selectedValues.select1);
    console.log('Selected value:', selectedValues.select2);
    console.log('Selected value:', selectedValues.select3);
    console.log('Selected value:', props.category);
  };

  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {props.category}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body container">
              <div className="row">
                <div className="col" style={{ marginBottom: "20px" }}>
                  <select
                    className="form-select "
                    aria-label="Default select example"
                    onChange={(e) => handleDropdownChange('select1', e)}
                    value={selectedValues.select1}
                  >
                    <option defaultValue>Select Difficulty Level</option>
                    <option value="1">Easy</option>
                    <option value="2">Medium</option>
                    <option value="3">Hard</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col" style={{ marginBottom: "20px" }}>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => handleDropdownChange('select2', e)}
                    value={selectedValues.select2}
                  >
                    <option defaultValue>Select Type of questions</option>
                    <option value="1">One Word</option>
                    <option value="2">MCQ</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col" style={{ marginBottom: "20px" }}>
                  <select
                    className="form-select col"
                    aria-label="Default select example"
                    onChange={(e) => handleDropdownChange('select3', e)}
                    value={selectedValues.select2}
                  >
                    <option defaultValue>select Number of Questions</option>
                    <option value="1">10</option>
                    <option value="2">15</option>
                    <option value="3">20</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleStart}
              >
                Start Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Cards = (props) => {
  const [allUpdated, setAllUpdated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleModal = (title) => {
    props.setCategory(title);
  };

  const handleBeginNowClick = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get("http://127.0.0.1:8000/api/questions/", {
        params: {
          category: props.category,
          difficulty: "easy",
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
      props.setAnswers(ans);
      props.setQuestions(que);
      props.setOptions(opt);
      console.log(
        "All three states are updated:",
        props.questions,
        props.options,
        props.answers
      );
      navigate("/quiz");
    } catch (err) {
      console.log("Error hai bhai" + err);
    }
  };

  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
    if (
      props.questions &&
      props.questions.length > 0 &&
      props.options &&
      props.options.length > 0 &&
      props.answers &&
      props.answers.length > 0
    ) {
      setAllUpdated(true);
      navigate("/quiz");
    }
  }, [props.questions, props.options, props.answers]);

  useEffect(() => {
    if (allUpdated) {
      navigate("/quiz");

      console.log(
        "All three states are updated:",
        props.questions,
        props.options,
        props.answers
      );
    }
  }, [allUpdated]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div
          className="col-lg-3 col-md-4 col-sm-6"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          onClick={() => handleModal(props.title)}
        >
          <div className="card">
            <img src={props.image} className="card-img-top" alt="title" />
            <div className="card-body">
              <h5 className="card-title">
                <Link to="#">{props.title}</Link>
              </h5>
              <p className="card-text">{props.content}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Home = ({
  user,
  setUser,
  token,
  setToken,
  setLogged,
  questions,
  setQuestions,
  options,
  setOptions,
  answers,
  setAnswers,
}) => {
  const [category, setCategory] = useState("");

  return (
    <>
      <Navbar
        user={user}
        setUser={user}
        token={token}
        setToken={setToken}
        setLogged={setLogged}
        page ={'Home'}
      />

      <div className="container">
        <div className="row">
          <Cards
            title={"Linux"}
            image={linux}
            content={
              "Click to begin attempt on Linux and it's sub-domain topics."
            }
            questions={questions}
            setQuestions={setQuestions}
            answers={answers}
            setAnswers={setAnswers}
            options={options}
            setOptions={setOptions}
            category={category}
            setCategory={setCategory}
          />
          <Cards
            title={"MongoDB"}
            image={sql}
            content={
              "Click to begin attempt on SQL and it's sub-domain topics."
            }
            questions={questions}
            setQuestions={setQuestions}
            answers={answers}
            setAnswers={setAnswers}
            options={options}
            setOptions={setOptions}
            category={category}
            setCategory={setCategory}
          />
          <Cards
            title={"AI/ML"}
            image={ml}
            content={
              "Click to begin attempt on AI/ML and it's sub-domain topics."
            }
            questions={questions}
            setQuestions={setQuestions}
            answers={answers}
            setAnswers={setAnswers}
            options={options}
            setOptions={setOptions}
            category={category}
            setCategory={setCategory}
          />
          <Cards
            title={"HTML"}
            image={html}
            content={
              "Click to begin attempt on HTML and it's sub-domain topics."
            }
            questions={questions}
            setQuestions={setQuestions}
            answers={answers}
            setAnswers={setAnswers}
            options={options}
            setOptions={setOptions}
            category={category}
            setCategory={setCategory}
          />
        </div>
      </div>
      <Modal category={category} setCategory={setCategory} />
    </>
  );
};

export default Home;
