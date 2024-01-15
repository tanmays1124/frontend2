import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = (props) => {
  const styles = {
    body: {
      width: "100",
      height: "100vh",
      display: "flex",
      justifyContent: "center",

      overflowY: "hidden",
    },

    card: {
      height: "50%",
      width: "50%",
    },

    question: {
      textAlign: "center",
    },

    options: {
      marginTop: "30px",
    },
  };

  const [currIndex, setCurrIndex] = useState(0);
  const [currQuestion, setCurrQuestion] = useState(props.questions[0]);
  const [currAnswer, setCurrAnswer] = useState(props.answers[0]);
  const [currOptions, setCurrOptions] = useState(props.options[0]);

  const [attempted, setAttempted] = useState([]);
  const [isCorrect, setIsCorrect] = useState([]);

  const [score,setScore] = useState(0);
  const navigate = useNavigate()





  const handleSelect = (event) => {

    const val = event.target.textContent;

    if (val === currOptions[currAnswer]) {
      console.log("correct");
      console.log(currQuestion)
      setAttempted((prevAttempted) => [...prevAttempted, currQuestion]);
      setIsCorrect((prevIsCorrect) => [...prevIsCorrect, true]);
      setScore(score+1)
      console.log(score);


    } else {
      console.log("Incorrect");
      console.log(currQuestion)
      setAttempted((prevAttempted) => [...prevAttempted, currQuestion]);
      setIsCorrect((prevIsCorrect) => [...prevIsCorrect, false]);
    }
  };

  const handleNext = () => {
    if (currIndex < props.questions.length - 1) {
      setCurrIndex((prevIndex) => prevIndex + 1);
      setCurrAnswer(props.answers[currIndex + 1]);
      setCurrQuestion(props.questions[currIndex + 1]);
      setCurrOptions(props.options[currIndex + 1]);
    } 
    else{
      console.log(attempted)
      console.log(isCorrect)
      console.log(props.userId)
      const userid =  localStorage.getItem('userId');

      const postData = async () => {
        const url = 'http://127.0.0.1:8000/api/questionhistorycreate/';
      
        const newQuestionHistory = {
          user: userid,
          domain: props.category,
          difficulty_level: props.difficultyLevel,
          score: score,
          attempted_questions: attempted.map((q_text, index) => ({
            q_text,
            is_correct: isCorrect[index],
          }))
          

          
        };
      
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newQuestionHistory),
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const responseData = await response.json();
          console.log('New Question History created:', responseData);
        } catch (error) {
          console.error('Error posting data:', error);
        }
      };
      
      // Call the postData function
      postData();
      
    }
  };
  
  useEffect(()=>{
    if (!localStorage.getItem('token')){
      navigate('/login')
    }
  })

  useEffect(() => {
    if (!localStorage.getItem('token')){
      navigate('/login')
    }
    console.log(currAnswer, currQuestion, currIndex, currOptions);
  }, [currAnswer, currQuestion, currIndex, currOptions]);




  return (
    <div className="body" style={styles.body}>
      <div className="container text-center">
        <div className="question" style={styles.question}>
          {currQuestion}
        </div>
        <div className="row gx-1 options" style={styles.options}>
          <button
            type="button"
            className="col-xl-6 col-md-12 mb-4 btn btn-outline-primary option"
            onClick={handleSelect}
          >
            {currOptions[0]}
          </button>
          <button
            type="button"
            className="col-xl-6 col-md-12 mb-4 btn btn-outline-primary option second"
            onClick={handleSelect}
          >
            {currOptions[1]}
          </button>
          <button
            type="button"
            className="col-xl-6 col-md-12 mb-4 btn btn-outline-primary option"
            onClick={handleSelect}
          >
            {currOptions[2]}
          </button>
          <button
            type="button"
            className="col-xl-6 col-md-12 mb-4 btn btn-outline-primary option forth"
            onClick={handleSelect}
          >
            {currOptions[3]}
          </button>
        </div>
        <button
          type="button"
          className="col-4 btn-outline-secondary nextQuestion"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
