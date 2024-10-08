import React, { useState } from 'react'

function UndoRedo() {

    const [points,setPoints]=useState([{
        x:0,
        y:0
    }])
    const [deleted,setDeleted] = useState([
      {
        x:0,
        y:0
      }  
    ])
    // const [copyPoints,setCopyPoints]=useState([...points])
    
    function handleBody(e){
        e.preventDefault()
        console.log(e.clientX,e.clientY)
        setPoints([...points,{x:e.clientX,y:e.clientY}])
        console.log("body")
    }
    function handleRedo(e){
        e.preventDefault()
        console.log(e.clientX,e.clientY)
        // setPoints((prev)=>{
        //     const prevObj = prev
        //     prevObj = prevObj.splice(0,prevObj.length-1)
        //     return prevObj
        // })
       
    setPoints([...points,...deleted[deleted.length-1]])
    setDeleted([...deleted.splice(0,deleted.length-1)])
        console.log("redo")
    
    }
    function handleUndo(e){
        e.preventDefault()
        console.log(e.clientX,e.clientY)
        // setPoints((prev)=>{
        //     let prevObj = prev
        //     prevObj = prevObj.splice(0,prevObj.length-1)
        //     return [...prevObj]
        // })
        let len = points.length

        setDeleted([...deleted,...points.splice(len-1,len)])
        setPoints([...points.splice(0,len-1)])

        
        console.log("undo")
    }
console.log("deleted",deleted)

  return (
    <div className='min-h-screen w-full flex-col '>
  
        <div className='flex justify-center h-[10vh] w-full'>

        
            <button onClick={handleUndo} className='px-4 py-2 bg-orange-500 rounded-lg text-white font-semibold hover:scale-105'>UNDO</button>
            <button onClick={handleRedo} className='px-4 py-2 bg-purple-600 rounded-lg text-white font-semibold hover:scale-105'>REDO</button>
        </div>
        <div onClick={handleBody} className='h-[90vh] w-full '>
                {
                  points.length>1 && points.map((val,index)=>{
                        return (
                            <div style={{left:val.x-5,top:val.y-5,display:'inline-block',position:'absolute'}} className={` text-white text-5xl`} key={Date.now + index}>
                              { index!==0?<span>0</span>:""} 
                            </div>
                        )
                    })
                }
          
        </div>

    </div>
  )
}

export default UndoRedo