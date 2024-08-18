import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

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
     return prev.map((val)=>{
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
     return prev.filter((val)=>{
        return val.id !== id
      })
    })

  }
  const toogleComplete = (id) =>{
    setTodos((prev)=>{
     return prev.map((val)=>{
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
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toogleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                      <TodoForm/>
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {
                          
                          todos.map((t)=>(
                            // console.log(t);
                            <div key={t.id}>
                              <TodoItem todo={t}/>
                            </div>
                          ))
                        }
                    </div>
                </div>
            </div>
    
    </TodoProvider>
    </>
  )
}

export default App
