import React, { useEffect } from 'react'
import { useState } from 'react'

function TrafficLight() {
    const [color,setColor] = useState({
        first:'gray',
        second:'gray',
        third:'gray'
    })

    const curColor = ["red","yellow","green"]
    const [index,setIndex]= useState(0)

    useEffect(()=>{


        const change = (c)=>{
        
                setColor((prev)=>{
                    let temp = {...prev}
                    if(c=="red"){
                        temp.first = 'red';
                        temp.second = 'gray';
                        temp.third = 'gray'
                    }
                    else if(c=="yellow"){
                        temp.first = 'gray';
                        temp.second = 'yellow';
                        temp.third = 'gray'
                    }
                    else if(c=="green"){
                        temp.first = 'gray';
                        temp.second = 'gray';
                        temp.third = 'green'
                    }
                    return  {...temp}
                })
            
        }

        const interval = setInterval(() => {
            setIndex((prevIndex) => {
                const newIndex = prevIndex < 2 ? prevIndex + 1 : 0;
                change(curColor[newIndex]);
                return newIndex;
            });
        }, 3000);
    
        return () => clearInterval(interval); 

    },[])





  return (
    
    <div className='flex justify-center h-screen items-center'>

        <div className='flex-col space-y-4'>
            <div className='h-[50px] w-[50px] rounded-full' style={{backgroundColor:color.first}}></div>
            <div className='h-[50px] w-[50px] rounded-full' style={{backgroundColor:color.second}}></div>
            <div className='h-[50px] w-[50px] rounded-full' style={{backgroundColor:color.third}}></div>

        </div>
    </div>
  )
}

export default TrafficLight