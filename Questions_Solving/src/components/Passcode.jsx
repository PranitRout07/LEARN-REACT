import React, { useState } from 'react'

function Passcode() {

    const passcode =  2375;

  const numbers = [1,2,3,4,5,6,7,8,9,0]
  const [inputVal,setInputVal] = useState('')
    function checkPasscode(e){
        e.preventDefault();
      

        if(inputVal.length<4){
            setInputVal(inputVal+e.target.value)
            console.log(passcode[e.target.getAttribute("ind")],parseInt(e.target.value))

            // if(passcode[e.target.getAttribute("ind")]===parseInt(e.target.value)){
            //     if(inputVal.length===4){
            //         alert('Correct!')
            //     }
            // }else{
            //     alert('Wrong!Try again')
            //     return
            // }

        }else{
            alert('Only 4 digits are allowed!')
        }

        

    }


    const check = (e)=>{
        e.preventDefault();
        if(passcode===parseInt(inputVal)){
            alert('CORRECT')
        }else if(inputVal.length<4){
            alert('PASSCODE IS SHORT')
            
        }else{
            alert('PASSCODE INCORRECT!PLEASE TRY AGAIN')
            setInputVal('')
        }
    }


  return (
    <div className='flex justify-center w-full h-screen items-center'>

        <div className='flex-col  '>

        <div className='flex justify-center'>
            <input className='bg-blue-500 text-center px-5 py-2 outline-none font-semibold'  value={inputVal} disabled onChange={(e)=>setInputVal(e.target.value)}/>
        </div>

        <div className='h-[30%] w-[30%] '>
            {
                numbers.map((val,index)=>{
                    return (
                        <div key={index} className='h-[70px] w-[70px] inline-block gap-2'>
    
                            <button value={val} ind={index}  onClick={checkPasscode}  className='m-3 h-full w-full rounded-full text-white bg-blue-500 text-xl'>
                                {val}
                            </button>
                        </div>
                    )
                })
            }
        </div>


        <div className='flex justify-center'>
            <button onClick={check} className='px-4 py-2 bg-orange-500 rounded-lg font-semibold'>CHECK</button>
        </div>
        </div>
        

    </div>
  )
}

export default Passcode