import React, { useState, useEffect } from 'react';

// import './Quiz.css';

const Quiz = ({ questions, setQuestions, answers, setAnswers, options, setOptions }) => {
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [currQuestion, setCurrQuestion] = useState('');
  const [currOptions, setCurrOptions] = useState([]);
  const [currAnswer, setCurrAnswer] = useState('');

  useEffect(() => {
    setCurrQuestion(questions[currQuestionIndex]);
    setCurrOptions(options[currQuestionIndex]);
    setCurrAnswer(answers[currQuestionIndex]);
  }, [questions, options, answers, currQuestionIndex])

  const handleOptionClick = (index) => {
    if (index==currAnswer){
      console.log('correct')
    }
    else{
      console.log('incorrect');
    }
  };

  const handleNextQuestion = () => {

    if (currQuestionIndex < questions.length - 1) {
      setCurrQuestionIndex(currQuestionIndex + 1);
    }
  };

  return (
    <div className="quiz-card">
      <h2 className="question">{currQuestion}</h2>
      <div className="options">
        {currOptions.map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionClick(index)}
          >
            {option}
          </div>
        ))}
      </div>
      <button onClick={handleNextQuestion}>Next Question</button>
    </div>
  );
};

export default Quiz;
