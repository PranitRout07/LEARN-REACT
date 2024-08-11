import { useState,useCallback, useEffect, useRef } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [numAllowed,setNumAllowed] = useState(false)
  const [chrAllowed,setChrAllowed] = useState(false)
  const [password,setPassword] = useState("")
  const [btnColor,setBtnColor] = useState("bg-cyan-600 text-black")
  const passwordRef = useRef(null)
  //useCallback is a react hook allows to cache a function between re-renders
  //usecallback much more used for optimizing purpose
  console.log(chrAllowed,numAllowed,length)
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHOJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed && chrAllowed){
      str += "00123456789!@#$%^&*(){}[]~?/|<>"
    }else if(chrAllowed){
      str+="!@#$%^&*(){}[]~?/|<>"
    }else if(numAllowed){
      str += "0123456789"
    }

    for (let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str[char]
    }
    setPassword(pass)

  },[length,numAllowed,chrAllowed,setPassword])

//useeffect is more like used to 
  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,chrAllowed,passwordGenerator])


  const copyPassword = useCallback(()=>{
    setBtnColor('bg-green-600 text-black')
    console.log(window.navigator)
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <>
    
    <div className='py-3 px-4 mx-auto w-full max-w-md rounded-lg my-8 text-orange-500 bg-gray-400'>
    <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <div className='overflow-hidden mb-4 shadow rounded-lg flex'>
        <input ref={passwordRef} id="pass" type="text" readOnly placeholder='Password' value={password} className="outline-none py-1 px-3 w-full "/>
        <button className={btnColor} onClick={copyPassword}>copy</button>
      </div>

      <div className='flex gap-x-2'>
        <div>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/> 
          <label className='text-indigo-600'>Length: {length}</label>
        </div>
        <div>
          <input type="checkbox" value={numAllowed} className='cursor-pointer' onClick={(e)=>{setNumAllowed( 
            (prev)=>!prev
            )}}/> 
          <label className='text-indigo-600'> Allow Num</label>
        </div>
        <div>
          <input type="checkbox" value={chrAllowed} className='cursor-pointer' onClick={(e)=>{setChrAllowed((prev)=>!prev)}}/> 
          <label className='text-indigo-600'> Allow char</label>
    
        </div>
      </div>
    </div>
    </>
  )
}

export default App
