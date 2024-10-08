import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import {InputBox} from './components/InputBox.jsx'
import InputBox from './components/InputBox.jsx'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
//if import is an default export then you don't have to use {}

function App() {
  const [amount, setAmount] = useState(0)
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const [convertedAmount,setConvertedAmount] = useState(0)
  
  //now we have to pass a currencyinfo hook
  const currencyInfo = useCurrencyInfo(from)
  //Also in the above it will hold all the key and values
  //currencyInfo[to]
  // console.log("currencyinfo",to,currencyInfo[to])
  const options = Object.keys(currencyInfo)
  // console.log("options",options)
  
  function ConvertCurrency(){
    console.log("Only Amount",amount)
    console.log("Before",convertedAmount)
    setConvertedAmount(amount * Number(currencyInfo[to]))
    // console.log("After changed:-",convertedAmount)
  }

  useEffect(()=>{
    console.log("After changed",convertedAmount)
  },[convertedAmount])

  function swap(){
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }
  return (
    <div>
      <h1 className='text-2xl text-indigo-600 text-center p-6 m-6 bg-orange-200'>Currency App</h1>
      <form onSubmit={(e)=>{e.preventDefault(); ConvertCurrency();}}>
      
      <div>
      <InputBox label="From" amount={amount} currencyOptions={options} onAmountChange={(amount)=>{setAmount(amount)}} onCurrencyChange={(currency)=>{setFrom(currency)}} selectCurrency={from} />
      </div>
      <div>
        <button onClick={swap} className='bg-indigo-400 text-yellow-50 p-1 rounded-lg cursor-pointer'>
          Swap
        </button>
      </div>
      <div>
        <InputBox
        label="To" amount={convertedAmount} currencyOptions={options} onCurrencyChange={(amount)=>{setTo(amount)}} selectCurrency={to} />
      </div>

      <button type='submit' className='p-3 bg-green-300 rounded-lg'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
      </form>

    </div>
  )
}
// link = https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json
export default App
