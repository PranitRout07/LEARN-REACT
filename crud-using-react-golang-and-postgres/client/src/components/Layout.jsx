import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <div  className='m-0 p-0 bg-gradient-to-t from-neutral-800 via-gray-800 to-slate-700 h-screen w-full overflow-hidden'>
        <NavBar/>
        <hr className='mt-5'></hr>
        <Outlet/>
    </div>
  )
}

export default Layout