import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //if you are using vite the below method of accessing env var is not possible
  //Use meta to access variables
  // console.log(process.env.REACT_APP_APPWRITE_URL)
  console.log(import.meta.env.VITE_APPWRITE_URL)

  return (
    <>
    
    </>
  )
}

export default App
