import Home from "./Home";
import Login from "./Login";

import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

const ProtectedRoute = (
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
  userId,
  setUserId,
  difficultyLevel,
  setDifficultyLevel,
  typeOfQuestion,
  setTypeOfquestion,
  number,
  setNumber,
  category,
  setCategory
) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    // Check if the token is valid (You might want to verify it on the server side)
    setAuthenticated(!!token);
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
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
            quiz={quiz}
            setQuiz={setQuiz}
            userId={userId}
            setUserId={setUserId}
            difficultyLevel={difficultyLevel}
            setDifficultyLevel={setDifficultyLevel}
            typeOfQuestion={typeOfQuestion}
            setTypeOfquestion={setTypeOfquestion}
            number={number}
            setNumber={setNumber}
            category={category}
            setCategory={setCategory}
          />
        ) : (
          <Login to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
