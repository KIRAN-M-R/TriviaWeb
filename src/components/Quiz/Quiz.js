import React from 'react'
import Navbar from '../Navbar/Navbar'
import { fetchFromAPI } from '../../api'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Quiz = () => {
        const [questions, setQuestions] = useState([])
        const [rightAnswers, setrightAnswers] = useState([])
        const [wrongAnswers, setwrongAnswers] = useState([])
        const [options, setOptions] = useState([])
        const [data,setData] = useState([]);
        const [index,setIndex] = useState(0);
        const [optionColor,setOptionColor] = useState(['bg-slate-700','text-white','bg-slate-700']);
        const [question, setQuestion] = useState('')
        const [rightAnswer, setRightAnswer] = useState('');
        const [wrongAnswer, setWrongAnswer] = useState('');

        const handlePrevious = () => {
                if(index !== 0) {
                setIndex((index)=>index -1);
                console.log(index);}
        }
        const handleNext = () => {
                console.log(data.length);
                if(index < data.length-1){
                        setIndex((index)=>index + 1);
                        console.log(index)
                } 
                
        }
        const handleOptions = () => {

        }
        useEffect((e)=>{
                console.log("hi")
                
                fetchFromAPI().then((response)=>{
                              
                        
                        const {results} = response;
                        console.log(results);
                        if(data.length===0){
                                console.log("hiiooo")
                        results?.map((result)=>{
                                
                          //data.push({questionsion: result?.questionsion, incorrectAnswers: result?.incorrect_answers, correctAnswer: result?.correct_answer})
                          setData((data)=>[...data, {question: result?.question, incorrectAnswers: result?.incorrect_answers, correctAnswer: result?.correct_answer}])
                          
                        })}
                        console.log('doi');
                        //setData(data)
                        data.map((obj)=>{
                                setQuestions(questions =>[...questions,obj?.question])
                                const wr = obj?.incorrectAnswers
                                setwrongAnswers(wrongAnswers=>[...wrongAnswers,wr]);
                                setrightAnswers(rightAnswers=>[...rightAnswers, obj?.correctAnswer])
                        })
                        console.log(data[index]?.question, "lol")
                       /*  setQuest(data[0]?.question)
                        setrightAnswers(data[0]?.correctAnswer)
                        setwrongAnswers(data[0]?.incorrectAnswers) */
                        setOptions([...wrongAnswers[index],rightAnswers[index]])
                        setQuestion(questions[index]);
                        console.log("data"+JSON.stringify(data));
                        console.log("data"+JSON.stringify(rightAnswers[index]))
                        console.log("data"+JSON.stringify(wrongAnswers[index]))
                        console.log("data"+JSON.stringify(options))
                           
                        
                    })
        },[index] )
        
        
     

//console.log('data2'+JSON.stringify(data));


  return (
    
    <div className='relative' >
        <Navbar/>
        <div className="bg-slate-800 h-screen justify-start flex flex-row p-4 fixed top-14 left-0 right-0">
<div className='w-1/4'>
<h1 className='text-yellow-500 mb-5'>Question {index+1}</h1>
        <h1 className='text-white'>{question}</h1>
</div>
        <section className='w-3/4 '>
            
        <div className='flex flex-row m-5 justify-around'>
        <div className='grid grid-cols-1 content-center'>
        <button onClick={handlePrevious} className='text-yellow-500'>Previous</button>
        </div>
        <section className='flex flex-col justify-start'>
        <h1 className='text-left text-lg mb-5 font-semibold text-white'>Options</h1>
        {options?.map((opt)=>{
                
                return (
                        <TailwindOptionButton props={opt}/>    
                )
        })}
        
        </section>
        <div className='grid grid-cols-1 content-center'>
        <button onClick={handleNext} className='bg-yellow-500 w-20 h-10'>Next</button>
        </div>
        
        </div>
        <section className='flex flex-row mt-40 justify-center'>
        
        <div className='grid grid-cols-1 content-end mt-10'>
        <button className='font-mono text-2xl h-10 w-40 text-white bg-sky-900'>Submit</button>
        </div>
        

        </section>
        </section>
        
        
        
        
        
        </div>
        
    </div>
  )
  function TailwindOptionButton({props}){
        return (
            <button onClick={handleOptions} className='font-mono bg-slate-700 text-2xl h-14 m-4 text-white mb-2 w-96' ><div className='flex flex-row p-2 justify-between'><h1 className=''>{props}</h1><div className='box-content w-3 h-3 border-slate-400 border-2 bg-slate-700 m-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4" className="fill-none">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg></div></div> </button>
        )
        }
}



export default Quiz