import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BarGraph from './pages/BarGraph';
import LineGraph from './pages/LineGraph';
import "./pages/Dash.css";
import Navbar from "./Navbar";
import Layout from './Layout';

function Dashboard({ userId, open }) {
  const [quizData, setQuizData] = useState([]);
  
  const totalQuizzes = quizData.length;
  const totalIncorrectQuestions = quizData.reduce((total, item) => {
    try {
      const attemptedQuestions = typeof item.attempted_questions === 'string'
        ? item.attempted_questions
        .replace(/OrderedDict\(/g, '')
        .replace(/\)/g, '')
        .replace(/True/g, 'true')
        .replace(/False/g, 'false')
        .replace(/'/g, '"')
        : item.attempted_questions;
  
      const cleanedQuestions = JSON.parse(attemptedQuestions);
  
      const incorrectCount = Array.isArray(cleanedQuestions)
        ? cleanedQuestions.reduce((acc, question) => acc + (question && question.is_correct === false ? 1 : 0), 0)
        : 0;
  
      return total + incorrectCount;
    } catch (error) {
      console.error('Error in totalIncorrectQuestions:', error);
      return total;
    }
  }, 0);
  
  
  

  const totalCorrectQuestions = quizData.reduce((total, item) => {
    try {
      const attemptedQuestions = typeof item.attempted_questions === 'string'
        ? item.attempted_questions
            .replace(/OrderedDict\(/g, '')
            .replace(/\)/g, '')
            .replace(/True/g, 'true')
            .replace(/False/g, 'false')
            .replace(/'/g, '"')
        : item.attempted_questions;
  
      const cleanedQuestions = JSON.parse(attemptedQuestions);
  
      const correctCount = Array.isArray(cleanedQuestions)
        ? cleanedQuestions.reduce((acc, question) => acc + (question && question.is_correct === true ? 1 : 0), 0)
        : 0;
  
      return total + correctCount;
    } catch (error) {
      console.error('Error in totalCorrectQuestions:', error);
      return total;
    }
  }, 0);
  
  
  
  



const totalQuestions = totalCorrectQuestions + totalIncorrectQuestions;






  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/questionhistoryget/?user_id=${userId}`);
        const fetchedData = await response.json();
  
        if (fetchedData) {
          setQuizData(fetchedData);
        } else {
          console.error('Fetched data is undefined.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchQuizData();
  }, [userId]);
  
  // Log quizData to check its structure and content
  useEffect(() => {
    console.log('Quiz Data:', quizData);
  }, [quizData]);
  
  
  useEffect(() => {
    console.log('Total Quizzes:', totalQuizzes);
    console.log('Total Incorrect Questions:', totalIncorrectQuestions);
    console.log('Total Correct Questions:', totalCorrectQuestions);
    console.log('Total Questions:', totalQuestions);
  }, [totalQuizzes, totalIncorrectQuestions, totalCorrectQuestions, totalQuestions]);


  


  return (
    <>
     <Layout open={open}>
        <div className='bo'>
          <Box sx={{ display: 'flex', flexDirection: 'column', maxHeight: '100%' }}>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <div className="App" style={{ color: '#1565C0' }}>
                <div className='das'>
                  <h1>
                    Dashboard <i className="fas fa-tachometer-alt"></i>
                  </h1>
                </div>
                <div className="card-container-11" style={{ display: 'flex' }}>
                  <Card className="card-12 primary-card" sx={{ flex: 1, backgroundColor: '#1565C0' }}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Quizzes
                      </Typography>
                      <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                        {totalQuizzes}
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card className="card-12 danger-card" sx={{ flex: 1, backgroundColor: '#D32F2F' }}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Incorrect
                      </Typography>
                      <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                        {totalIncorrectQuestions}
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card className="card-12 success-card" sx={{ flex: 1, backgroundColor: '#388E3C' }}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Correct
                      </Typography>
                      <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                        {totalCorrectQuestions}
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card className="card-12 secondary-primary-card" sx={{ flex: 1, backgroundColor: '#64B5F6' }}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Questions
                      </Typography>
                      <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                        {totalQuestions}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
                <div className="card-container-22" style={{ display: 'flex' }}>
                  <div className="card-12">
                    <LineGraph userId={userId} />
                  </div>
                  <div className="card-12">
                    <BarGraph userId={userId} />
                  </div>
                </div>
              </div>
            </Box>
          </Box>
        </div>
      </Layout>
    </>
  );
}

export default Dashboard;
