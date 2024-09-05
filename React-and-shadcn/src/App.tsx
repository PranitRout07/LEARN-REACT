import { useState } from 'react'
import './App.css'
import { Textarea } from "@/components/ui/textarea"

import { Button,buttonVariants } from './components/ui/button'
import { ModeToggle } from './components/mode-toggle'
import CustomTable from './components/table/customTable'
import { Switch } from '@radix-ui/react-switch'

function App() {
  
  const [state,setState] = useState(false)
  function clickHandler(){
    setState(true)
  }
  return (
    <div className='min-h-screen w-full'>
    <nav className='flex justify-end ml-auto mr-4 p-5 space-x-4 w-full '>
    <ModeToggle/>
    <Button className='hover:bg-slate-100 hover:scale-105'>Start</Button>
    <Button variant="destructive">Delete</Button>
      
    </nav>
     
    <div className='w-full flex justify-center'>
    <Textarea className='w-1/2 bg-[#1c1c1c]' placeholder="Type your message here." />
    </div>
    
    <div className='bg-black'>
      <Switch onChange={clickHandler}/>
    </div>
    <CustomTable val={state}/>

    </div>
  )
}

export default App
export interface CustomTableProps {
  val: boolean;
}
