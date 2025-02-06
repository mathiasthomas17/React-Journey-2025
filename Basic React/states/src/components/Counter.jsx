import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0)
    const handlClick = ()=>{
        return setCount(count + 1)
    }
  return (
    <div>
        {count}
        <p><button onClick={handlClick}>Add count</button></p>
        </div>
  )
}

export default Counter