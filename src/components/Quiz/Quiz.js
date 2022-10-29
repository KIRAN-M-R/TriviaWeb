import React from 'react'
import Navbar from '../Navbar/Navbar'

const Quiz = () => {
  return (
    
    <div className='relative' >
        <Navbar/>
        <div className="bg-slate-800 h-screen flex flex-col justify-start p-4 fixed top-14 left-0 right-0">

        <h1 className='text-white mb-5'>1. questions..........</h1>
        <section className='flex flex-col justify-start'>
        <button className='font-mono bg-slate-700 text-2xl h-14 m-4 text-white mb-2 w-96' ><div className='flex flex-row p-2 justify-between'><h1 className=''>hi</h1><div className='box-content w-3 h-3 border-slate-400 border-2 bg-slate-700 m-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" className="stroke-2 fill-blue-600">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg></div></div> </button>
        <button className='font-mono bg-slate-700 text-2xl h-14 m-4 text-white mb-2 w-96' ><div className='flex flex-row p-2 justify-between'><h1 className=''>hi</h1><div className='box-content w-3 h-3 border-slate-400 border-2 bg-slate-700 m-2'></div></div></button>
        <button className='font-mono bg-slate-700 text-2xl h-14 m-4 text-white mb-2 w-96' ><div className='flex flex-row p-2 justify-between'><h1 className=''>hi</h1><div className='box-content w-3 h-3 border-slate-400 border-2 bg-slate-700 m-2'></div></div></button>
        <button className='font-mono bg-slate-700 text-2xl h-14 m-4 text-white mb-2 w-96' ><div className='flex flex-row p-2 justify-between'><h1 className=''>hi</h1><div className='box-content w-3 h-3 border-slate-400 border-2 bg-slate-700 m-2'></div></div></button>
        </section>
        
        
        
        </div>
        
    </div>
  )
}

export default Quiz