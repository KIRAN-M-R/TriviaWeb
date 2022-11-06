import React from "react";
import Navbar from "../Navbar/Navbar";
import _ from "lodash";
import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Result from "../Result/Result";

const Quiz = ({ questions, options, correctAnswers }) => {
 // const [options, setOptions] = useState([]);
const [score, setScore] = useState(0)
  const [index, setIndex] = useState(0);
  const [checked, setChecked] = useState(false)
const [navigateToResults, setNavigateToResults] = useState(false);
  const [question, setQuestion] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  //let selectedAnswerList
  useEffect(()=>{
    //selectedAnswerList = [];
    questions.map(()=>{
      //selectedAnswerList.push("");
      setSelectedAnswer((selectedAnswer)=>[...selectedAnswer, ""])
    })
  },[])
  useEffect(()=>{

  },[checked])
console.log("selectedAnswerList"+JSON.stringify(selectedAnswer));
  const handlePrevious = () => {
    if (index !== 0) {
      setIndex((index) => index - 1);
      console.log(index);

    }
  };
  const handleNext = () => {
    console.log(questions.length);
    if (index < questions.length - 1) {
      setIndex((index) => index + 1);
      console.log(index);
      
    }
  };
  const handleOptions = (opt) => {
    let selecttemp = selectedAnswer
      selecttemp[index]=opt;
      setSelectedAnswer(selecttemp)
      setChecked(!checked)
      //if(selecttemp[index]===opt){ setChecked(true)}else{setChecked(false)}
    console.log("opt"+opt);
  };
  const handleSubmit = () => {
    let scoreTemp = 0
    correctAnswers.map((correctAnswer,ind)=>{
      if(correctAnswer===selectedAnswer[ind]) scoreTemp=scoreTemp + 1
      setScore(scoreTemp)

    })
    console.log("score"+score);
    //setNavigateToResults(true)
  }
console.log("opt1"+JSON.stringify(options));
console.log("opt1"+JSON.stringify(correctAnswers));
  useEffect(() => {
    
    setQuestion(questions[index]);

    console.log("hi");
  }, [index]);

  return (
    <>
    {navigateToResults ? (<Result score={score} />):(<div className="relative">
      <Navbar />
      <div className="bg-slate-800 h-screen justify-start flex flex-row p-4 fixed top-14 left-0 right-0">
        <div className="w-1/4">
          <h1 className="text-yellow-500 mb-5">Question {index + 1}</h1>
          <h1 className="text-white">{question}</h1>
        </div>
        <section className="w-3/4 ">
          <div className="flex flex-row m-5 justify-around">
            <div className="grid grid-cols-1 content-center">
              <button onClick={handlePrevious} className="text-yellow-500">
                Previous
              </button>
            </div>
            <section className="flex flex-col justify-start">
              <h1 className="text-left text-lg mb-5 font-semibold text-white">
                Options
              </h1>
              {options[index]?.map((opt) => {
                return <TailwindOptionButton opt={opt} />;
              })}
            </section>
            <div className="grid grid-cols-1 content-center">
              <button onClick={handleNext} className="bg-yellow-500 w-20 h-10">
                Next
              </button>
            </div>
          </div>
          <section className="flex flex-row mt-40 justify-center">
            <div className="grid grid-cols-1 content-end mt-10">
              <button onClick={handleSubmit} className="font-mono text-2xl h-10 w-40 text-white bg-sky-900">
                Submit
              </button>
            </div>
          </section>
        </section>
      </div>
    </div>)} 
    </>
    
  );
  function TailwindOptionButton({ opt }) {
    let colcode;
    opt===selectedAnswer[index]?colcode='bg-slate-900 ring ring-violet-300':colcode='bg-slate-700'
   
    return (
      <button
        onClick={()=>{handleOptions(opt)}}
        className={`font-mono ${colcode} hover:bg-slate-600 text-2xl h-14 m-4 text-white mb-2 w-96`}
      >
        <div className="flex flex-row p-2 justify-between">
          <h1 className="">{opt}</h1>
          <div className="box-content w-3 h-3 border-slate-400 border-2 bg-slate-700 m-2">
            {colcode==='bg-slate-900 ring ring-violet-300'?<svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="4"
              className="fill-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>:<></>}
          </div>
        </div>{" "}
      </button>
    );
    
  }
};

export default Quiz;
