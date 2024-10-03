import React, { useDebugValue, useEffect, useState } from 'react'

function ColorGuesser() {

    const [mainColor,setMainColor] = useState('')
    const [isCorrect,setIsCorrect] = useState(false)
    const [isIncorrect,setIsIncorrect] = useState(false)
    const [change,setChange]=  useState(false)
    const [threeColorCode,setThreeColorCode] = useState([])

    const hexCodeGenerator = ()=>{
        const num = ["1","2","3","4","5","6","7","8","9","0","a","b","c","d","e","f"]
        let arr = []
        for(let j=0;j<3;j++){

            let str = "#"
            for(let i=0;i<6;i++){
                str = str + num[Math.floor(Math.random()*100)%num.length]
            }

            arr.push(str)
        }

        setThreeColorCode(arr)
        

    }

    useEffect(()=>{
        setMainColor(threeColorCode[Math.floor(Math.random()*100)%threeColorCode.length])
    },[threeColorCode])

console.log(threeColorCode)
    useEffect(()=>{
        hexCodeGenerator()
    },[change])

    const verifyColor = (e)=>{
        e.preventDefault();
        if (e.target.value === mainColor){
            setIsCorrect(true)
            setIsIncorrect(false)
            setChange(!change) //used to control useEffect
        }else{
            setIsCorrect(false)
            setIsIncorrect(true)
            
        }
    }
    // console.log("bg-["+mainColor+"]")
    // 

  return (
    <div className='flex justify-center min-h-screen items-center text-white text-2xl w-full'>
        <div className='flex-col space-y-8 h-full'>
            <div className='flex justify-center'>

           
            <div className={`h-[200px] w-[300px] border-2 border-white`} style={{ backgroundColor: mainColor }}>

            </div>
            </div>

        {threeColorCode.length>0?<div className='flex gap-48'>

            <div>
                <button onClick={verifyColor} value={threeColorCode[0]}>{threeColorCode.length>0?threeColorCode[0]:"Loading..."}</button>
            </div>

            <div>
                <button onClick={verifyColor} value={threeColorCode[1]}>{threeColorCode.length>0?threeColorCode[1]:"Loading..."}</button>
            </div>

            <div>
                <button onClick={verifyColor} value={threeColorCode[2]} >{threeColorCode.length>0?threeColorCode[2]:"Loading..."}</button>
            </div>

        </div>:"Loading..."}


        <div className='flex justify-center'>
            {isCorrect?<span className='text-green-500'>Correct</span>:""}
            {isIncorrect?<span className='text-red-500'>Wrong!PLease try again</span>:""}
        </div>

        </div>
    </div>
  )
}

export default ColorGuesser