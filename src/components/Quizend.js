import { useNavigate } from 'react-router-dom';  
import './Quizend.css'



const Quizend = (props) => {
    const navigate = useNavigate()
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
