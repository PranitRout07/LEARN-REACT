import React from 'react'
import Header from './Header'
import MovieList from './MovieList'

function HeroSection() {
  return (
    <div className='overflow-hidden'>
        <div className='absolute z-[-1] m-auto'>
        <img className='h-screen w-screen object-cover' src='/background.jpg'/>
      </div>
      <div className='h-48 absolute z-[-1] w-screen bg-gradient-to-b from-gray-950 '>
      </div>
      <div className='absolute z-[-1] w-screen bottom-0 h-48 bg-gradient-to-t from-[#1c1c1c]'>
      </div>
      <Header/>
      <div className='w-full p-10 pt-12'>
        <h1 className='text-white font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-6xl w-1/2 md:w-1/2 lg:w-1/3  py-2  text-shadow-dark '>Pokemon:The Last Battle</h1>
        <h3 className=' text-[17px] sm:text-[19px] md:text-xl lg:text-xl text-white pt-2 pb-4 text-shadow-dark '>A Disney Original Movie</h3>
        <button className='bg-purple-600 px-12 text-2xl py-[6px] hover:scale-110 text-white font-semibold rounded-full text-shadow-dark'>Play</button>
      </div>

      <MovieList/>

    </div>
  )
}

export default HeroSection