import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlices'
function App() {
  const [count, setCount] = useState(0)
  //if you are using vite the below method of accessing env var is not possible
  //Use meta to access variables
  // console.log(process.env.REACT_APP_APPWRITE_URL)
  console.log(import.meta.env.VITE_APPWRITE_URL)
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>{
      setLoading(false)
    })
  })
  return (
    <>
    
    </>
  )
}

export default App
