import React from 'react'
import { useState } from 'react'
import '../styles.css'

const CounterComp = () => {
    // States
    const [count,setCount] = useState(0)
    // Increment & Decrement Function
    const increment = ()=>{
        // if(count >= 0)
        setCount(count + 1)
    }
    const decrement = ()=>{
        // if(count >= 0)
        setCount(count - 1)
    }
  return (
    <div className='container'>
        <div>
        <h1 className='number'>{count}</h1>
        </div>
        <div className="btns-container">
            <button className="increment" onClick={increment}>+</button>
            <button className="increment" onClick={decrement}>-</button>
        </div>
    </div>
  )
}

export default CounterComp