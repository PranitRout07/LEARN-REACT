import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './context/TodoContext'

function App() {
  // const [count, setCount] = useState(0)
  const [todos,setTodos] = useState([])
  const addTodo = (todo) =>{
    setTodos((prev)=>{
      return [{id:Date.now(),...todo},...prev]
    })
  }

  const updateTodo = (id,todo) =>{
    setTodos((prev)=>{
      prev.map((val)=>{
        if (val.id===id){
            return todo
        }else{
          return val
        }
      })
      
    })
  }
  const deleteTodo = (id)=>{
    setTodos((prev)=>{
      prev.filter((val)=>{
        return val.id !== id
      })
    })

  }
  const toogleComplete = (id) =>{
    setTodos((prev)=>{
      prev.map((val)=>{
        if (val.id===id){
          return {...val,completed:!val.completed}
        }else{
          return val 
        }
      })
      
    })
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  return (
    <>
    <TodoProvider values={{todos,addTodo,updateTodo,deleteTodo,toogleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    
    </TodoProvider>
    </>
  )
}

export default App
