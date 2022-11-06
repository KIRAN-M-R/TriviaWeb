import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const Result = ({score, handleRetakeQuiz}) => {
  const navigate = useNavigate();
  const handleNavigate = ()=>{
    handleRetakeQuiz()
console.log("clicked");
  }
  const handleRestart = ()=>{
    window.location.reload(true);
  }
  return (
    <div className="bg-slate-800 h-screen flex flex-row justify-center">
          <div className=" flex flex-col justify-center space-y-56">
            <h1 className="font-mono text-8xl text-white" style={{}}>
              Score {score}
            </h1>
            <div className=" flex flex-col justify-center space-y-1">
            <button
              onClick={handleNavigate}
              className="font-mono text-2xl h-20 text-white bg-sky-700"
            >
              Retake Quiz
            </button>
            <button
              onClick={handleRestart}
              className="font-mono text-2xl h-20 text-white bg-sky-900"
            >
              Start Fresh Quiz
            </button>
            </div>
            
          </div>
        </div>
  )
}

export default Result