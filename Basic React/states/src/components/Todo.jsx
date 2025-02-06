import React, { useState } from 'react'

const Todo = () => {
    const [todos,setTodos] = useState([])
    // Form Input


    const hndleChange = (e)=>{
        setInputValue(e.target.value)
    }

    const [inputValue,setInputValue] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(inputValue.trim()){
            setTodos([...todos, inputValue])
            setInputValue('')
        }
    }

    
  return (
    <div>
        <h1>To Do</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={hndleChange} placeholder='Add a new todo' />
            <button type='submit'>Add Todo</button>
        </form>
        <ul>
            {todos.map((todo,index)=>{
            return <li key={index}>{todo}</li>
            })}
        </ul>
    </div>
  )
}

export default Todo