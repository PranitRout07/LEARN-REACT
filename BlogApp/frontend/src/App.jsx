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
    <div className='min-h-screen w-full overflow-x-hidden bg-[#e2f9f5]'>

      <div className='mx-[12%] bg-[#e2f9f5]'>
      <Layout />
      </div>

        
    </div>
  )
}

export default App
