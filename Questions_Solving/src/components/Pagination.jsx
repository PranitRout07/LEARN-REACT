import React, { useEffect, useState } from 'react'
import list from '../demo-list/List'
function Pagination() {

// console.log(list.length)
    // const element = document.getElementById("listDiv");
    // console.log(element?.offsetHeight)


    const [showEle,setShowEle] = useState([])
    const [buttons,setButtons] = useState([])
    useEffect(()=>{
        const numOfPages = Math.ceil(list.length/19)
        console.log(numOfPages)
        const temp = Array(numOfPages).fill('')
        setButtons(temp)
    },[list])

    function handleClick(e){
        e.preventDefault();
        let numOfPages = 19;
        let endValue = e.target.id * numOfPages;
        let startValue = endValue - 19;


        if(endValue>list.length){
            console.log("hello")
            endValue = endValue - list.length + startValue;
        }
        console.log(startValue,endValue)

        setShowEle(list.filter((val,index)=>{
            return index>=startValue && index<endValue;
        }))
    }


    return (
    <div className='h-screen w-full'>
        <div className='h-full w-full flex-col space-y-5 overflow-hidden scroll-smooth '>
            <div className='mb-4 mt-2 h-[12vh] flex justify-center text-8xl text-white bg-gradient-to-r from-purple-800 via-orange-600 to-gray-700'>
                PAGINATION
            </div>

            <div className='h-[75vh] overflow-y-scroll'>
                {
                    showEle.map((val,index)=>{
                        return(
                            <div key={index} id="listDiv" className='m-3  text-white font-semibold bg-gradient-to-r from-violet-800 via-gray-600 to-slate-700'>
                                {val}
                            </div>
                        )   
                    })
                }

            </div>

            <div className='ml-3 h-[3vh] flex gap-3'>
                {
                    buttons.map((val,index)=>{
                        return (
                            <button onClick={handleClick} id={index+1}  key={index} className='bg-white text-center h-auto w-[70px]'>
                                {index+1}
                            </button>
                        )
                    })
                }
            </div>

        </div>

    </div>
  )
}

export default Pagination