import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DropDown from './components/DropDown'
import ColorGuesser from './components/ColorGuesser'
import TicketBook from './components/TicketBook'
import MultiSelectDropDown from './components/MultiSelectDropDown'
import Wordle from './components/Wordle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <DropDown/> */}
    {/* <ColorGuesser/> */}

    {/* <TicketBook/> */}
    {/* <MultiSelectDropDown/> */}
    
    
    <Wordle/>
    </>
  )
}

export default App
