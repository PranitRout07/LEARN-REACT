import React from 'react'
import { Link } from 'react-router-dom'


function Failed() {
  return (
    <div className='h-screen flex w-full justify-center items-center'>

    <div className='flex-col space-y-8'>

        <div className='flex justify-center'>
            <span className='text-8xl font-bold bg-gradient-to-tr from-red-600 via-red-700 to-red-900 bg-clip-text text-transparent '>FAILED</span>
        </div>

        <div className='flex justify-center'>
            <Link to="/"><button className='bg-orange-400 text-white font-semibold text-xl px-5 py-2 rounded-lg'>HOME</button></Link>
        </div>


    </div>

</div>
  )
}

export default Failed