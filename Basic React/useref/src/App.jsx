import React from 'react'
import { useRef } from 'react'
import FocusInput from './components/FocusInput'
import Timer from './components/Timer'
function App() {
  const inputEl = useRef(null)
  console.log(inputEl)
  const focusInput = ()=>{
    inputEl.current.focus()
    inputEl.current.value = 'Tommy'
  }
  return (
    <div>
      <input type="text" name="" id="" ref={inputEl} />
      <button onClick={()=> focusInput()}> Focus</button>
      <hr />
      <FocusInput />
      <hr/>
      <Timer />
    </div>
  )
}

export default App