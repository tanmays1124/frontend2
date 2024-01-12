import { useState , useEffect } from "react";

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

  const handleNext = () => {
    if (currIndex < props.questions.length - 1) {
      setCurrIndex((prevIndex) => prevIndex + 1);
      setCurrAnswer(props.answers[currIndex + 1]);
      setCurrQuestion(props.questions[currIndex + 1]);
      setCurrOptions(props.options[currIndex + 1]);

    }
  };

const handleSelect = (event) =>{
    const val = event.target.textContent;
      if(val===currOptions[currAnswer]){
        console.log("correct")
      }
      else{
        console.log("Incorrect")
      }
    
}


  useEffect(()=>{

    console.log(currAnswer,currQuestion,currIndex,currOptions)

  },[currAnswer,currQuestion,currIndex,currOptions])


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
        <button type="button" className="col-4 btn-outline-secondary nextQuestion" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
