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
    <div className='min-h-screen w-full overflow-y-hidden'>
      {/* Header */}
      <div className='h-[910px] bg-slate-400 flex w-full'>

          <div className='w-[11%] border-1 border-black bg-[#1c1c1c]'>
            <div className='w-full h-[9%]'>
              <nav className='p-5 w-full h-full'> <img src="https://image.similarpng.com/very-thumbnail/2021/05/Logo-design-illustration-on-transparent-background-PNG.png" className='rounded-full h-[110%] w-[90%] md:h-[130%] md:w-[110%] sm:h-[150%] sm:w-[130%]'/></nav>
            </div>
          </div>

          <div className='w-[89%]'>
            <div className='w-full h-[9%] '>
              <nav className='flex pt-5 pb-5 bg-[#1c1c1c] w-full h-full'>
                <div className='flex justify-start w-1/3 space-x-5'>
                  <div className='w-full h-auto'>
                    <input className='w-full p-2 text-black font-serif h-[90%]' placeholder='Search' />
                  </div>
                  
                  <div className='text-black text-sm font-semibold h-[90%]]'>
                    <select className='w-[120%] h-[87%]' value="llama3.1">
                      <option>Task 1</option>
                      <option>Task 2</option>
                      <option>Task 3</option>
                    </select>
                  </div>
                </div>
                <div className='flex justify-end space-x-2 w-2/3 mr-4'>
                  <div className=''>
                  <ModeToggle/>
                  </div>
                  <div>
                    <Button  variant="secondary">Sign In</Button>
                  </div>
                </div>

                
              </nav>
            </div>
            <div className='w-full h-[91%] overflow-auto scrollbar-hide bg-black'>
            <CustomTable val={state}/>
            </div>
            
          </div>

      </div>

  {/* Footer */}
      <div className='bg-[#949292] h-[100px] w-full overflow-hidden text-center'>
        footer
      </div>
    </div>
  )
}

export default App
export interface CustomTableProps {
  val: boolean;
}
