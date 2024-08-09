import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("cyan")
  function changeColor(e){
    setColor(e.target.id)
    
  }
  return (
  
    <div className='w-full h-screen duration-100' style={{backgroundColor:color}}>
      <button onClick={changeColor} className='bg-red-700' id="red">Red</button>
      <button onClick={changeColor} className='bg-blue-600' id="blue">Blue</button>
      <button onClick={changeColor} className='bg-yellow-400' id="yellow">Yellow</button>
      <button onClick={changeColor} id="orange" className='bg-orange-500'>Orange</button>
      <button onClick={changeColor} id="violet" className='bg-violet-600'>Violet</button>
    
    </div>
    
  )
}

export default App
