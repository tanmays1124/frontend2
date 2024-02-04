import { useNavigate } from 'react-router-dom';  
import './Quizend.css'
import { useEffect } from 'react';



const Quizend = (props) => {
    const navigate = useNavigate()

  useEffect(()=>{
    props.setQuestions([])
    props.setAnswers([])
    props.setOptions([])
  },[])


    const handleClick =() =>{
        navigate('/history')
    }
  return (
    <>
      <div className="score-container">
        <div className="score-card">
          <div className="score">Score: {props.score}</div>
          <button className="go-home" onClick={handleClick}>View Results</button>
        </div>
      </div>
    </>
  );
};

export default Quizend;
