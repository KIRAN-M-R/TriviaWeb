import React from 'react'
const nav = "< Trivia questions"
const Navbar = () => {
  return (
    <div className='bg-stone-900 h-14 text-white fixed top-0 left-0 right-0'>
        <h1 className='pl-5 pt-3.5 text-2xl'>{nav}</h1>
    </div>
  )
}

export default Navbar