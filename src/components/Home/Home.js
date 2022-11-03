import React from "react";
import { fetchFromAPI } from "../../api";

import { useState } from "react";
import Quiz from "../Quiz/Quiz";
import { useEffect } from "react";
const st = "Take quiz >";

const Home = () => {
  const [navigateToQuiz, setNavigateToQuiz] = useState(false);

  const [questions, setQuestions] = useState([]);
  const [rightAnswers, setrightAnswers] = useState([]);
  const [wrongAnswers, setwrongAnswers] = useState([]);

  const data = [];
  const handleNavigate = () => {
    fetchFromAPI().then((response) => {
      const { results } = response;
      console.log(results);

      console.log("hiiooo");
      results?.map((result) => {
        data.push({
          question: result?.question,
          incorrectAnswers: result?.incorrect_answers,
          correctAnswer: result?.correct_answer,
        });
      });
      console.log(data);
      console.log("doi");

      data.map((obj) => {
        setQuestions((questions) => [...questions, obj?.question]);
        const wr = obj?.incorrectAnswers;
        setwrongAnswers((wrongAnswers) => [...wrongAnswers, wr]);
        setrightAnswers((rightAnswers) => [
          ...rightAnswers,
          obj?.correctAnswer,
        ]);
      });

      setNavigateToQuiz(true);
    });

    console.log("wh" + navigateToQuiz);
  };
/* useEffect(()=>{
  setNavigateToQuiz(false);
},[]) */
  return (
    <>
      {navigateToQuiz ? (
        <Quiz
          questions={questions}
          wrongAnswers={wrongAnswers}
          rightAnswers={rightAnswers}
        />
      ) : (
        <div className="bg-slate-800 h-screen flex flex-row justify-center">
          <div className=" flex flex-col justify-center space-y-56">
            <h1 className="font-mono text-8xl text-white" style={{}}>
              Trivia App
            </h1>
            <button
              onClick={handleNavigate}
              className="font-mono text-2xl h-20 text-white bg-sky-900"
            >
              {st}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
