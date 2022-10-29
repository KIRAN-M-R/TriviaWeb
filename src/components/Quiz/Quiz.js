import React from 'react'
import Navbar from '../Navbar/Navbar'

const Quiz = () => {
  return (
    
    <div className='relative' >
        <Navbar/>
        <div className="bg-slate-800 h-screen justify-start flex flex-row p-4 fixed top-14 left-0 right-0">
<div className='w-1/4'>
<h1 className='text-yellow-500 mb-5'>Question 1</h1>
        <h1 className='text-white'>What is your name</h1>
</div>
        <section className='w-3/4 '>
            
        <div className='flex flex-row m-5 justify-around'>
        <div className='grid grid-cols-1 content-center'>
        <button className='text-yellow-500'>Previous</button>
        </div>
        <section className='flex flex-col justify-start'>
        <h1 className='text-left text-lg mb-5 font-semibold text-white'>Options</h1>
        <TailwindOptionButton/>
        <TailwindOptionButton/>
        <TailwindOptionButton/>
        <TailwindOptionButton/>
        </section>
        <div className='grid grid-cols-1 content-center'>
        <button className='bg-yellow-500 w-20 h-10'>Next</button>
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
}

function TailwindOptionButton(props){
return (
    <button className='font-mono bg-slate-700 text-2xl h-14 m-4 text-white mb-2 w-96' ><div className='flex flex-row p-2 justify-between'><h1 className=''>hi</h1><div className='box-content w-3 h-3 border-slate-400 border-2 bg-slate-700 m-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4" className="fill-none">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg></div></div> </button>
)
}

export default Quiz