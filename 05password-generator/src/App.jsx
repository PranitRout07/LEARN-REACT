import { useState,useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed,setNumAllowed] = useState(false)
  const [chrAllowed,setChrAllowed] = useState(false)
  const [password,setPassword] = useState("")

  //useCallback is a react hook allows to cache a function between re-renders

  const passwordGenerator = useCallback(()=>{
    

  },[length,numAllowed,chrAllowed,setPassword])
  return (
    <>
    <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
