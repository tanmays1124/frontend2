// Quiz.js

import React, { useState } from 'react';
import './Quiz.css'
const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'London', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    correctAnswer: 'Mars',
  },
  // Add more questions as needed
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    // Check if an option is selected before moving to the next question
    if (selectedOption !== null) {
      // Reset selected option for the next question
      setSelectedOption(null);
      // Move to the next question
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      alert('Please select an option before moving to the next question.');
    }
  };

  return (
    <center>
        <div className="quizstyle">
        <h2>Question {currentQuestion + 1}</h2>
        <br/>
        <p>{questions[currentQuestion].question}</p>
        <br/>
        <ul>
            {questions[currentQuestion].options.map((option, index) => (
            
            <li key={index} >
                &emsp;
                &emsp;
                <label>
                <input
                    type="radio"
                    name="options"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionSelect(option)}
                />
                {option}
                </label>
            </li>
            ))}
        </ul>
        <br></br>
        <button onClick={handleNextQuestion}>Next Question</button>
        </div>
    </center>
  );
};

export default Quiz;
