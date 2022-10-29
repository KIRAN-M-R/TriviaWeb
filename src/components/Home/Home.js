import React from 'react'
const st = 'Take quiz >';
const Home = () => {
  return (
    <div className="bg-slate-800 h-screen flex flex-row justify-center">
      <div className=' flex flex-col justify-center space-y-56'>
      <h1 className='font-mono text-8xl text-white' style={{}}>Trivia App</h1>
        <button className='font-mono text-2xl h-20 text-white bg-sky-900' >{st}</button>
      </div>
        
      
    </div>
  )
}

export default Home