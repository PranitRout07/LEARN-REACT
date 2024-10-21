import { useState } from 'react'
import Products from './components/Products'
import Failed from './components/Failed';
import Success from './components/Success';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Outlet } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products/>,
  },
  {
    path: "/success",
    element: <Success/>
  },
  {
    path: "/failed",
    element:<Failed/>
  }
]);


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen w-full flex justify-center'>
      <RouterProvider router={router}>
      <Outlet/>     

      </RouterProvider>
    </div>

  )
}

export default App
