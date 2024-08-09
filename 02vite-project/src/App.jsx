import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//By using hooks you can update UI changes in react
//usestate hook used for changing the state
// let [<variable>,<function>] = useState(<default value of variable>)
function App() {
  let [counter, setCounter] = useState(0)
  

  function addvalue(){
    counter = counter + 1
    console.log(counter)
    setCounter(counter)
    // lets say if you have written like this below:-
    //setCounter(counter+1)
    //setCounter(counter+1)
    //Here it will not increase the counter by 3 , it will 
    //actually treated as same job .
    //if you want to add multiple times then you have to use prevCounter
    //setCounter((prevCounter)=>{prevCounter+1})
  }

  function removeValue(){
    if (counter<=0){
      console.log("value is less than or equal to 0")
      return
    }else{
    counter = counter - 1
    console.log(counter)
    setCounter(counter)
    }
  }
  return (
    <>
      <h1>COUNTER</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addvalue}>Add</button>
      {/* <br/> */}
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
