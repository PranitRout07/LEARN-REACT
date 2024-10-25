import React, { useEffect, useState } from 'react'

function DiwaliExchange() {

    const [persons,setPersons] = useState([{name:"",gift:""}])
    const [cur,setCur] = useState('')
    const gifts = ["sweets","game","t shirt","pen","house","car","bike"]
    const [asg,setAsg] = useState(false)

    const addPerson = (e)=>{
        e.preventDefault();
        console.log(cur)
        setPersons([...persons,{name:cur,gift:"No gift assigned"}])
    }

    const handleRemove =  (e)=>{
        e.preventDefault();
        setPersons((prev)=>{
            const temp = [...prev]
            prev.splice(parseInt(e.target.value),1)
                     
            console.log("temp->",temp)
            return temp
        })
    }
    const handleAssign=(e)=>{
        e.preventDefault();            
        if(asg){
            alert('You have already assigned. Reset to assign again!')
            return
        }else{
            setPersons((prev)=>{
                const temp = [...prev]
                setAsg(true)
                for(let i=0;i<prev.length;i++){
                    let rn = Math.floor(Math.random()*100 % gifts.length)
                    temp[i].gift = gifts[rn]
                }
                
                return temp
    
            })

        }

    }

    useEffect(()=>{

    },[persons])
    useEffect(()=>{
        setAsg(false)
    },[persons.length])

    const handleShuffle=(e)=>{
        e.preventDefault();
     
        setPersons((prev)=>{
            const temp = [...prev]
            for(let i=0;i<prev.length;i++){
                let rn = Math.floor(Math.random()*100 % gifts.length)
                temp[i].gift = gifts[rn]
            }
            return temp

        })
    }



    const handleReset=(e)=>{
        e.preventDefault();
     
        setPersons((prev)=>{
            const temp = [...prev]
            setAsg(false)

            for(let i=0;i<prev.length;i++){
        
                temp[i].gift = "No gift assigned"
            }
            
            return temp

        })
    }
  return (
    <div className='flex justify-center h-screen w-full items-center'>
        <div className='flex-col space-y-3'>
            <div className='flex'>
                <input value={cur} onChange={(e)=>setCur(e.target.value)}  className='px-5 py-3 outline-none' placeholder='Enter a name'/>
                <button onClick={addPerson}  className='px-5 py-3 bg-orange-400 hover:scale-110 transition-all duration-700 font-semibold text-white '>Add</button>
            </div>
            {persons.length>1?<div className='flex justify-center'>
                <div className='flex-col space-y-3'>

                    {persons.slice(1).map((val,index)=>{
                        return (
                            <div key={index} className='flex justify-center space-x-3'>
                                <div className='font-semibold text-white'>
                                    {val.name}
                                </div>
                                <div className='font-semibold text-white'>
                                    {val.gift}
                                </div>
                                <div>
                                    <button value={index} onClick={handleRemove} className='px-5 py-3 bg-red-600 hover:scale-110 transition-all duration-700 font-semibold text-white '>remove</button>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </div>:""}
            {persons.length>1?<div className='flex space-x-2 justify-center'>
                <div>
                    <button onClick={handleAssign} className='px-5 py-3 bg-orange-600 hover:scale-110 transition-all duration-700 font-semibold text-white '>Assign</button>
                </div>

                <div>
                    <button onClick={handleShuffle} className='px-5 py-3 bg-blue-600 hover:scale-110 transition-all duration-700 font-semibold text-white '>Shuffle</button>
                </div>

                <div>
                    <button onClick={handleReset} className='px-5 py-3 bg-red-600 hover:scale-110 transition-all duration-700 font-semibold text-white '>Reset</button>
                </div>
            </div>:""}

        </div>

    </div>

  )
}

export default DiwaliExchange