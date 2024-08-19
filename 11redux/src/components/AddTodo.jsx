import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { addTodo } from "../features/todo/todoSlice";

function AddTodos(){
    const [input,setInput] = useState('')
    //dispatch use reducers to change store
    const dispatch = useDispatch()
    
    
    function addTodoHandler(e){
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    return (
        <>
        <form onSubmit={addTodoHandler}>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default AddTodos;