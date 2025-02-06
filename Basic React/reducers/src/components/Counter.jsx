import React from 'react'
import { useReducer, useState } from 'react'
import { counterReducer,initialState } from '../CounterReducer'

const Counter = () => {
    const [state,dispatch] = useReducer(counterReducer,initialState)
    const [inputVal,setInputVal] = useState(0)

    const handleIncrement = ()=>{
        return dispatch({type:'incre'})
    }

    const handelDcerement = ()=>{
        return dispatch({type:'decre'})
    }

    const handelIncrementByAmout =()=>{
        return dispatch({type:'IncreByAmount', payload: +inputVal})
    }
    const handelDecrementByAmout = ()=>{
        return dispatch({type:'DecreAnyAmount', payload: +inputVal})
    }
  return (
    
    <div>
        <h2>{state.count}</h2>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handelDcerement}>-</button>
        <div>
            <input type="number" value={inputVal} onChange={e=> setInputVal(e.target.value)}/>
            <button onClick={handelIncrementByAmout}>Increment</button>
            <button onClick={handelDecrementByAmout}>Decrement</button>
        </div>
    </div>
  )
}

export default Counter