import { useEffect, useState } from 'react'
import './App.css'
function NewToast({text,duration,custom}){
  // // useEffect(()=>{
  //   setTimeout(()=>{
  //     //close toast logic
  //     custom()
  //   },duration)
  // // },[duration,custom])
  useEffect(() => {
    const timer = setTimeout(() => {
      custom(); // Close toast logic
    }, duration);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [duration, custom]);

  return (
    <>
      <p>{text}</p>
      <button onClick={()=>{custom()}}>X</button>
    </>
  )
}

function App(){
  const [toast,setToast] = useState([])

  const addToast = (text,duration) =>{
    let id = Date.now()
    setToast([...toast,{id,text,duration}])  //[{text,duration},{text,duration}...]
  }
  const removeTodo = (id) => {
    setToast(toast.filter((ele)=>{
      return ele.id!==id
    }))
  }
  return (
    <>
    <button
    onClick={() => addToast("Hello", 5000)}
    className="p-3 text-3xl text-center bg-slate-700 text-white cursor-pointer hover:text-slate-700 hover:bg-white"
  >
    Add toast
  </button>
  <div>
  {
    toast.map((ele)=>(
      <NewToast key={ele.id} text={ele.text} duration={ele.duration} custom={()=>{
        removeTodo(ele.id)
      }}/>
    ))
  }
  </div>
  </>
  
  )
}
export default App;

