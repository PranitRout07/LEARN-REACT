import React, { useEffect, useState } from 'react'

function MultiSelectDropDown() {
    const [dropDown,setDropDown] = useState(false)
    const [allChecked,setAllChecked] = useState(false)

    const options = [
        "India","Switzerland","China","Japan","Singapore","Mongolia","South Korea","Sri Lanka","Australia","Argentina","Denmark","Brazil"
    ]
    const [curChecked,setCurChecked] = useState([false, false, false, false, false, false, false, false, false, false, false, false])

    useEffect(() => {
        setCurChecked((prev) => prev.map(() => allChecked));
    },[allChecked])


    function Checked(index){
        setCurChecked((prevChecked) => {
            const updatedChecked = [...prevChecked];
            updatedChecked[index] = !updatedChecked[index]; 
            return updatedChecked;
          });

        console.log(curChecked)
    }
    
  return (
    <div className='flex justify-center min-h-screen items-center w-full'>
        <div className='flex-col space-y-8'>

        <div className="w-full flex justify-center">
            <button className='text-black font-semibold px-3 py-2 hover:scale-105 hover:bg-green-300 bg-amber-400' onClick={()=>setDropDown(!dropDown)}>Select</button>
        </div>

        {dropDown?<div className='flex-col space-y-5'>
            <div className='p-2 text-white text-xl flex gap-6'>
                
            <input type='checkbox' className='p-2 text-white' onChange={()=>setAllChecked(!allChecked)}/>
            <label>Check all</label>
            </div>
            {
                
                options.map((val,index)=>{
                    return(
                        <div  key={index} className='p-2 text-white text-xl flex gap-6'>
                        {console.log(curChecked[index])}
                        <input type='checkbox' className='p-2 text-white' value={val} index={index} checked={curChecked[index]}  onChange={()=>Checked(index)}/>
                        <label>{val}</label>
                        </div>
                    )
                })
            }
        </div>:<div className='text-2xl font-bold text-white'> DROPDOWN </div>}
        </div>
    </div>
  )
}

export default MultiSelectDropDown