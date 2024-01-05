// Modal.js
// import React from 'react';
// import Modal from 'react-modal';
// import Select from "react-dropdown-select";
// import Quiz from './Quiz';

// Modal.setAppElement('#root'); 
// const customStyles = {
//   overlay: {
//     backgroundColor: 'rgba(1, 0, 0.5, 0.5)', // Semi-transparent background
//   },
//   content: {
//     width: '50%',
//     margin: 'auto',
//     height: '50%',
//   },
// };

// const options = [
//   {
//     id: "1",
//     name: "Easy",
//   },
//   {
//     id: "2",
//     name: "Medium",
//   },
//   {
//     id: "3",
//     name: "Hard",
//   },
// ];
// const opt = [
//   {
//     id: "1",
//     name: "10",
//   },
//   {
//     id: "2",
//     name: "15",
//   },
//   {
//     id: "3",
//     name: "20",
//   },
// ];
// const option = [
//   {
//     id: "1",
//     name: "Multiple Choice Questions",
//   },
//   {
//     id: "2",
//     name: "1 Word Answers",
//   },
// ];
// const optios = [
//   {
//     id: "1",
//     name: "Shell",
//   },
//   {
//     id: "2",
//     name: "Unix",
//   },
// ];

// const CustomModal = ({ isOpen, closeModal, content }) => {
//   const handleDifficultyChange = (values) => {
//     // Handle difficulty change
//   };

//   const handleNumQuestionsChange = (values) => {
//     // Handle number of questions change
//   };

//   const handleSubDomainChange = (values) => {
//     // Handle sub-domain change
//   };

//   const handleQuestionTypeChange = (values) => {
//     // Handle question type change
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={closeModal}
//       contentLabel="Example Modal"
//       style={customStyles}
//     >
//       <h2>Quiz Selection</h2>
//       <p>{content}</p>
//       <Select
//         placeholder="Select Difficulty Level"
//         options={options}
//         labelField="name"
//         valueField="id"
//         onChange={handleDifficultyChange}
//       />
//       <br />
//       <Select
//         placeholder="Select Number of Questions"
//         options={opt}
//         labelField="name"
//         valueField="id"
//         onChange={handleNumQuestionsChange}
//       />
//       <br />
//       <Select
//         placeholder="Select Sub-domain topic"
//         options={optios}
//         labelField="name"
//         valueField="id"
//         onChange={handleSubDomainChange}
//       />
//       <br />
//       <Select
//         placeholder="Select Type of Questions"
//         options={option}
//         labelField="name"
//         valueField="id"
//         onChange={handleQuestionTypeChange}
//       />
//       <br />
//       <button onClick={closeModal}>Close</button>

//       <button onClick={Quiz}>Begin Now!!</button>
//     </Modal>
//   );
// };

// export default CustomModal;
import React, { useState } from 'react';
import Modal from 'react-modal';
import Select from 'react-dropdown-select';
import Quiz from './Quiz';
import { Link } from 'react-router-dom';
// import App from './App';
// import { BrowserRouter as Router, Route, Routes } from './react-router-dom';
// import { Router } from 'react-router-dom';
// import Question  from './Navbar';

// ReactDOM.render(<App />, document.getElementById('root'));

Modal.setAppElement('#root');
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(1, 0, 0.5, 0.5)', // Semi-transparent background
  },
  content: {
    width: '50%',
    margin: 'auto',
    height: '50%',
  },
};

const options = [
  {
    id: '1',
    name: 'Easy',
  },
  {
    id: '2',
    name: 'Medium',
  },
  {
    id: '3',
    name: 'Hard',
  },
];
const opt = [
  {
    id: '1',
    name: '10',
  },
  {
    id: '2',
    name: '15',
  },
  {
    id: '3',
    name: '20',
  },
];
const option = [
  {
    id: '1',
    name: 'Multiple Choice Questions',
  },
  {
    id: '2',
    name: '1 Word Answers',
  },
];
const optios = [
  {
    id: '1',
    name: 'Shell',
  },
  {
    id: '2',
    name: 'Unix',
  },
];

const CustomModal = ({ isOpen, closeModal, content }) => {
  const [quizOpen, setQuizOpen] = useState(false);

  const handleDifficultyChange = (values) => {
    // Handle difficulty change
  };

  const handleNumQuestionsChange = (values) => {
    // Handle number of questions change
  };

  const handleSubDomainChange = (values) => {
    // Handle sub-domain change
  };

  const handleQuestionTypeChange = (values) => {
    // Handle question type change
  };

  const handleBeginNowClick = () => {
    <Link className="nav-link" to="/history">History</Link>
    setQuizOpen(true);
  };

  return (
    <>
      <Modal
        isOpen={isOpen && !quizOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <h2>Quiz Selection</h2>
        <p>{content}</p>
        <Select
          placeholder="Select Difficulty Level"
          options={options}
          labelField="name"
          valueField="id"
          onChange={handleDifficultyChange}
        />
        <br />
        <Select
          placeholder="Select Number of Questions"
          options={opt}
          labelField="name"
          valueField="id"
          onChange={handleNumQuestionsChange}
        />
        <br />
        <Select
          placeholder="Select Sub-domain topic"
          options={optios}
          labelField="name"
          valueField="id"
          onChange={handleSubDomainChange}
        />
        <br />
        <Select
          placeholder="Select Type of Questions"
          options={option}
          labelField="name"
          valueField="id"
          onChange={handleQuestionTypeChange}
        />
        <br />
        <button onClick={closeModal}>Close</button>
        <button onClick={handleBeginNowClick}><Link className="nav-link" to="/quiz">Begin Now!!</Link></button>
      </Modal>

      {quizOpen && <Quiz />}
    </>
  );
};

export default CustomModal;

