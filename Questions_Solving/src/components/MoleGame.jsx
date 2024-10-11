import React, { useEffect, useState } from 'react'

function MoleGame() {
    const [count,setCount] = useState(0)
    const [randomNum,setRandomNum] = useState(0)
    const box = Array(9).fill('')
    useEffect(()=>{
        let x = setInterval(()=>{
            let i = Math.floor(Math.random()*100)%box.length
            //random position the dot will appear
            setRandomNum(i)
        },1000)

        return()=>clearInterval(x)
    },[])

    function handleMole(e){
        e.preventDefault();
        setCount(count+1)
    }
    return (
    <div className='flex-col h-screen w-full justify-center items-center'>
        <div className='text-white flex justify-center text-4xl mt-[175px]'>
            {count}
        </div>
        <div className='flex h-screen w-full justify-center items-center'>

    


        <div className='h-[400px] w-[527px] bg-white ' >
            {
                box.map((val,index)=>{
                    return(
                        <div className='inline-block m-2 md:m-3  h-[100px] w-[150px] bg-green-300 text-center items-center'>
                            {randomNum===index?<button onClick={handleMole} className=' flex  h-full w-full items-center justify-center font-semibold text-blue-600-'>HIT ME</button>:<span className='text-center flex  h-full w-full items-center justify-center font-semibold text-red-500'>HA HA!!</span>}
                        </div>
                    )
                })
                
            }
        </div>
        </div>

    </div>
  )
}

export default MoleGame