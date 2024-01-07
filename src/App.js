// import react from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
import Home from "./components/Home";
// import Navbar from './components/Navbar'
import History from "./components/History";
import Registration from "./components/Registeration";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Quiz from "./components/Quiz";
import Dashboard from "./components/Dashboard";
import Leaderboard from "./components/Leaderboard";

import { useState } from "react";

const App = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [options, setOptions] = useState([]);
  const [logged, setLogged] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Landing />} />

        <Route path="/register" exact element={<Registration />} />

        <Route
          path="/login"
          exact
          element={
            <Login
              token={token}
              setToken={setToken}
              user={user}
              setUser={setUser}
              setLogged={setLogged}
            />
          }
        />

        <Route
          path="/home"
          element={
            <Home
              token={token}
              setToken={setToken}
              user={user}
              setUser={setUser}
              setLogged={setLogged}
              questions={questions}
              setQuestions={setQuestions}
              answers={answers}
              setAnswers={setAnswers}
              options={options}
              setOptions={setOptions}
            />
          }
        />

        <Route
          path="/history"
          exact
          element={<History user={user} setUser={setUser} />}
        />

        <Route path="/dashboard" exact element={<Dashboard />} />

        <Route path="/leaderboard" exact element={<Leaderboard />} />

        <Route
          path="/quiz"
          exact
          element={
            <Quiz
              questions={questions}
              setQuestions={setQuestions}
              answers={answers}
              setAnswers={setAnswers}
              options={options}
              setOptions={setOptions}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
