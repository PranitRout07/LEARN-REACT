import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='flex justify-between text-center'>
      <Link to="/" ><h1 className='text-3xl mt-2 font-bold bg-gradient-to-r ml-2 from-orange-600 via-amber-600 to-red-600 bg-clip-text text-transparent ' >Products</h1></Link>

      <div className='mr-10 flex justify-center items-center h-[100%] '>
        <Link to="/cart"><button className='flex items-center h-[100%] bg-fuchsia-500 text-center hover:cursor-pointer pt-3 px-8 rounded-lg text-white font-bold'>Cart</button></Link>
      </div>
    </div>
  )
}

export default NavBar