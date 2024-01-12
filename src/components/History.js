import React, { useState, useEffect } from "react";
import axios from "axios";
import './History.css'
import bg1 from "../images/history.jpg";
import Navbar from "./Navbar";

const History = ({ userId, setUserId }) => {
  const styles = {
    background: {
      backgroundImage: `url(${bg1})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "50vh", // Adjust the height to make the image smaller
      width: "50vw",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      textAlign: "center",
      fontSize: "24px",
      opacity: "0.7",
    },

    contained: {
      width: "100vw",
      height: "100vh",
      display: "grid",
      placeItems: "center",
      alignItems: "center",
    },
    text: {
      fontSize: "larger",
      color: "rgb(194 194 194)",
      marginBottom: "-100px",
    },
  };

  const [questionHistory, setQuestionHistory] = useState([]);
  const [domain, setDomain] = useState([]);
  const [difficultyLevel, setDifficultyLevel] = useState([]);
  const [score, setScore] = useState();
  const [attemptedQuestion, setAttemptedQuestion] = useState([]);
  const [submissionTime, setSubmissionTime] = useState([]);

  const fetchUserQuestionHistory = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/questionhistoryget/?user_id=${userId}`
        // "http://127.0.0.1:8000/api/questionhistoryget/?user_id=1"

      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setQuestionHistory(data);
      setDomain(data.map((item) => item.domain));
      setDifficultyLevel(data.map((item) => item.difficulty_level));
      setScore(data.map((item) => item.score));
      setAttemptedQuestion(data.map((item) => item.attempted_questions));
      setSubmissionTime(data.map((item) => item.submission_time));
      console.log(questionHistory)
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserQuestionHistory();
  }, []);

  useEffect(()=>{
    // const orderedDictData = questionHistory.map((item) => item.attempted_questions)
    // const formattedData = orderedDictData.map(item => {
    //   const parsedDict = JSON.parse(item.slice(2, -2)); // Remove brackets and parse as JSON
    //   return {
    //     q_text: `question: ${parsedDict.get('q_text')}`,
    //     is_correct: parsedDict.get('is_correct') === 'True', // Convert string 'True' to boolean true
    //   };
    // });
    
    // console.log(formattedData);
    // const orderedDictData = questionHistory.map((item) => item.attempted_questions);

    
    // console.log(orderedDictData);
        
// setAttemptedQuestion(formattedData)
// const orderedDictData = questionHistory.map((item) => item.attempted_questions);

// const parseOrderedDict = (item) => {
//   try {
//     // Extract the content within OrderedDict([...])
//     const content = item.match(/\[.*\]/)[0];

//     // Replace single quotes with double quotes
//     const cleanedContent = content.replace(/'/g, '"');

//     // Parse the cleaned content as JSON
//     const parsedArray = eval(cleanedContent); // Using eval to convert string to array

//     // Convert the array of key-value pairs to an object
//     const parsedDict = Object.fromEntries(parsedArray);

//     return parsedDict;
//   } catch (error) {
//     console.error('Error parsing JSON:', error);
//     return null;
//   }
// };

// const formattedData = orderedDictData.map((item) => {
//   const parsedDict = parseOrderedDict(item);

//   if (parsedDict) {
//     return {
//       q_text: `question: ${parsedDict.q_text}`,
//       is_correct: parsedDict.is_correct === 'True', // Convert string 'True' to boolean true
//     };
//   } else {
//     return {
//       q_text: 'Error parsing question',
//       is_correct: false,
//     };
//   }
// });

// console.log(attemptedQuestion);


  },[questionHistory,domain,difficultyLevel,score,attemptedQuestion])


// useEffect(()=>{
//   console.log(attemptedQuestion)
// },[attemptedQuestion])

  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleQuizClick = (quiz) => {
    setSelectedQuiz(quiz);
  };

function conversion(timestamp)
{

  const date = new Date(timestamp);

  // Extract date components
  const year = date.getUTCFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
  const day = date.getUTCDate().toString().padStart(2, '0');
  
  // Create the formatted date string
  const formattedDate = `${day}-${month}-${year}`;
  
  return formattedDate  // Output: 11-01-2024
}

  //   const data = JSON.stringify(questionHistory, null)
  return (
    <>
      <Navbar page={"History"} />
      {questionHistory.length == 0 ? (
        <div className="contained" style={styles.contained}>
          <div className="text" style={styles.text}>
            No history
          </div>

          <div className="background" style={styles.background}></div>
        </div>
      ) : (
        <div className="quiz-history-container">
      <div className="quiz-history">
        <center>
          {/* <h2>Quiz History</h2> */}
        </center>
        <ul className="quiz-list">
          {questionHistory.map((quiz) => (
            <li
              key={quiz.id}
              className={`quiz-card ${selectedQuiz === quiz ? 'selected' : ''}`}
              onClick={() => handleQuizClick(quiz)}
            >
              <div className="quiz-header">
                <span>{quiz.domain}</span>
              </div>
              <div className="quiz-details">
                <p>Score: {quiz.score}</p>
                {/* <p>Questions: {quiz.questions}</p> */}
                <p>Difficulty: {quiz.difficulty_level}</p>
                <p>Time: {conversion(quiz.submission_time)}</p>
              </div>
              {/* {selectedQuiz === quiz && (
                <div className="answers">
                  {quiz.attempted_questions.map((attempt, index) => (
                    <div
                      key={index}
                      className={`answer ${attempt.isCorrect ? 'correct' : 'wrong'}`}
                    >
                     {attempt.q_text}  <span class="with-space">&nbsp;</span>{attempt.is_correct ? 'Correct' : 'Wrong'}
                    </div>
                  ))}
                </div>
              )} */}
            </li>
          ))}
        </ul>
      </div>
    </div>
      )}


    
    </>
  );
};

export default History;
