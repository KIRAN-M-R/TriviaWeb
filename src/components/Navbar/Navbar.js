import React from 'react'
const nav = "< Trivia questions"
const Navbar = ({handleRetakeQuiz}) => {
  return (
    <div className='bg-stone-900 h-14 text-white fixed top-0 left-0 right-0'>
        <button onClick={()=>{handleRetakeQuiz()}} className='pl-5 pt-3.5 text-2xl'>{nav}</button>
    </div>
  )
}

export default Navbar