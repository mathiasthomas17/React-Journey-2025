import React from 'react'
import { useRef } from 'react'

function FocusInput() {
    const inputElement = useRef(null)
    const focusFunc = ()=>{
        inputElement.current.value = 'Hooray Done'
    }
  return (
    <div>
        <input type="text" ref={inputElement} />
        <button onClick={()=>focusFunc()}>useref Exercice</button>
    </div>
  )
}

export default FocusInput