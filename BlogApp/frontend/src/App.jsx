import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/layout'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './pages/register'
import Login from './pages/Login'
import Write from './pages/Write'
import Home from './pages/Home'
import SinglePage from './pages/singlePage'





const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Layout/></div>,
    children:[
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "register",
        element: <Register/>,
      },
      {
        path:"write",
        element: <Write/>
      },
      {
        path:"",
        element:<Home/>
      },
      {
        path:"post/:id",
        element:<SinglePage/>
      }
    ]
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen w-full overflow-x-hidden bg-gradient-to-r from-white via-green-100 to-sky-100'>
        
      <div className='mx-[12%] bg-gradient-to-r from-white via-green-100 to-sky-100'>
      <RouterProvider router={router} >
      <Layout />
      </RouterProvider>
      </div>
      
        
    </div>
  )
}

export default App
