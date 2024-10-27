import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='flex justify-between text-center'>
      <Link to="/" ><h1 className='text-3xl mt-2 font-bold bg-gradient-to-r ml-2 from-orange-600 via-amber-600 to-red-600 bg-clip-text text-transparent ' >Products</h1></Link>

      {/* <div className='mr-10 flex items-center '> */}
        <Link to="/cart" className='mr-5 flex mt-2 items-center'><button className='  bg-amber-800 text-center hover:cursor-pointer py-2 px-8 rounded-lg text-white font-bold'>Cart</button></Link>
      {/* </div> */}
    </div>
  )
}

export default NavBar