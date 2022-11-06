import React from "react";
import { fetchFromAPI } from "../../api";
import _ from "lodash";
import { useState } from "react";
import Quiz from "../Quiz/Quiz";
import { useEffect } from "react";
const st = "Take quiz >";

const Home = () => {
  const [navigateToQuiz, setNavigateToQuiz] = useState(false);
  
  const [questions, setQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [options, setOptions] = useState([]);
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
      let optionList
      let optionShuffled
      let optionShuffledList=[]
      data.map((obj,ind) => {
        setQuestions((questions) => [...questions, obj?.question]);
        setCorrectAnswers((correctAnswers)=>[...correctAnswers, obj?.correctAnswer])
        optionList=[]
        optionShuffled=[]
        optionList.push(...obj?.incorrectAnswers);
        optionList.push(obj?.correctAnswer);
        console.log("unsh"+optionList);
        optionShuffled = _.shuffle(optionList);
        console.log("_shuffle"+JSON.stringify(optionShuffled));
        optionShuffledList.push(optionShuffled)
        console.log("ind"+ind);
        
      });
      setOptions((options)=>[...options,...optionShuffledList])
console.log("options"+JSON.stringify(options));
      setNavigateToQuiz(true);
    });

    console.log("wh" + navigateToQuiz);
  };
 /* useEffect(()=>{
  console.log("options"+JSON.stringify(options));
},[options])  */
  return (
    <>
      {navigateToQuiz ? (
        <Quiz
          questions={questions}
          options={options}
          correctAnswers={correctAnswers}
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
