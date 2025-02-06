import React from 'react'
import { useState, useEffect } from 'react'
import UseEffect from './components/UseEffect'

const App = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    async function getData(){
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      if(data && data.length) setData(data)
    }
  getData()
  },[])
  return (
    <div>
      <ul>
        {data.map((todo)=>(
        <li key={todo.id}>
          {todo.title}
          <div>{todo.body}</div>

        </li>
        ))}
      </ul>
      {/* < UseEffect /> */}
    </div>
  )
}

export default App