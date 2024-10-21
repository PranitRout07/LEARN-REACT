import React from 'react'
import { Link } from 'react-router-dom'

function Success() {
  return (
    <div className='h-screen flex w-full justify-center items-center'>

        <div className='flex-col space-y-8'>

            <div className='flex justify-center'>
                <span className='text-8xl font-bold bg-gradient-to-tr from-green-700 via-teal-700 to-lime-600 text-transparent bg-clip-text '>SUCCESS</span>
            </div>

            <div className='flex justify-center'>
                <Link to="/"><button className='bg-orange-400 text-white font-semibold text-xl px-5 py-2 rounded-lg'>HOME</button></Link>
            </div>


        </div>

    </div>
  )
}

export default Success