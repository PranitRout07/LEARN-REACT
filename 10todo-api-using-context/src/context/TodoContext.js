import {createContext,useContext} from 'react'
export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed: false,
        }
    ],
    addTodo : (todo)=>{},
    updateTodo : (id,todo) =>{},
    deleteTodo : (id)=>{},
    toogleComplete: (id)=>{}
})
export const TodoProvider = TodoContext.Provider 
export const useTodo = () =>{
    return useContext(TodoContext)
}

//functionality
//add new tasks
//delete task
//mark task as completed
//edit the task details
//show all the tasks