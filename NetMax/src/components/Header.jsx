import React from 'react'

function Header() {
  return (
    <div className='flex transition-all justify-evenly sm:justify-evenly md:justify-between lg:justify-between w-full'>
        <div className='flex items-baseline transition-all p-10 gap-8 md:gap-8 lg:gap-8 '>
            <h1 className='bg-gradient-to-r from-red-700 via-orange-400 to-red-700 inline-block text-transparent bg-clip-text text-4xl font-serif font-semibold hover:cursor-pointer hover:scale-105 transition-all text-shadow-dark '>Netmax</h1>
            <ul className='flex justify-evenly'>
                <li className='text-shadow-dark text-white font-semibold px-3 py-2 hover:scale-110 hover:cursor-pointer hover:shadow-lg transition-all  hover:bg-red-600 rounded-full text-xl'>Movies</li>
                <li className='text-shadow-dark text-white font-semibold px-3 py-2 hover:scale-110 hover:cursor-pointer hover:shadow-lg transition-all  hover:bg-red-600 rounded-full text-xl'>Series</li>
                <li className='text-shadow-dark text-white font-semibold px-3 py-2 hover:scale-110 hover:cursor-pointer hover:shadow-lg transition-all  hover:bg-red-600 rounded-full text-xl'>Kids</li>

            </ul>
        </div>

        <img src="/logo.avif" className='rounded-full w-[70px] h-[60px] invisible md:visible lg:visible m-10 shadow-[8px] hover:cursor-pointer  '/>
    </div>
  )
}

export default Header