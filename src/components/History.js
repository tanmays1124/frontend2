import React, { useState, useEffect } from 'react';
import axios from 'axios';

import bg1 from '../images/history.jpg';
import Navbar from './Navbar';

const History = ({userId, setUserId}) => {
    const styles = {
        background: {
            backgroundImage: `url(${bg1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '50vh', // Adjust the height to make the image smaller
            width: '50vw',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
            fontSize: '24px',
            opacity: '0.7'

        },

        contained:{
            width:'100vw',
            height:'100vh',
            display: 'grid',
            placeItems: 'center',
            alignItems: 'center',

        },
        text:{
            fontSize: 'larger',
            color:'rgb(194 194 194)',
            marginBottom: '-100px'
        }
    };

    const [questionHistory, setQuestionHistory] = useState({});
    const [domain, setDomain] = useState([]);
    const [difficultyLevel, setDifficultyLevel] = useState([]);
    const [score, setScore] = useState();
    const [attemptedQuestion, setAttemptedQuestion] = useState([]);
    const [submissionTime,setSubmissionTime] = useState([]);


    const fetchUserQuestionHistory = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:8000/api/questionhistoryget/?user_id=${userId}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();


          setQuestionHistory(data);
          setDomain(data.map(item => item.domain));
          setDifficultyLevel(data.map(item => item.difficulty_level));
          setScore(data.map(item => item.score));
          setAttemptedQuestion(data.map(item => item.attempted_questions));
          setSubmissionTime(data.map(item => item.submission_time));


    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserQuestionHistory();
  }, []);


    //   const data = JSON.stringify(questionHistory, null)
    return (
        <>
        <Navbar page={'History'}/>
         
        {questionHistory.length==0 ?

        (<div className="contained" style={styles.contained}>
                    <div className='text' style={styles.text}>No history</div>
                    
        <div className='background' style={styles.background}>
        </div>
        </div>): (<div style={{marginTop:'100px'}}>{domain}{score}{difficultyLevel}{submissionTime}</div>)}
        
        </>
    );
}

export default History;
