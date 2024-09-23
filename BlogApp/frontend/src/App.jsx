import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/layout'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";





function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen w-full overflow-x-hidden bg-[#ffffff]'>

      <div className='mx-[12%] bg-[#ffffff]'>
      <Layout />
      </div>

        
    </div>
  )
}

export default App
