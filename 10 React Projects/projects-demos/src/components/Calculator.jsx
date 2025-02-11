import React from 'react'
import { useState } from 'react'
import '../css/calc.css'



const Calculator = () => {
    const [inputValue,setinputValue] = useState('')
    const clearFunc =()=> setinputValue('')

    // Display
    const display = (value)=> setinputValue(inputValue + value)
    // Calculate
    const calculate = ()=>{
        setinputValue(eval(inputValue))
    }
  return (
    <form className="calculator" name='calc'>
        <input type="text" className="value" value={inputValue}/>
        <span className="num clear" onClick={()=>clearFunc}>
            c
        </span>
        <span onClick={()=>display('/')}>/</span>
        <span onClick={()=>display('*')}>*</span>
        <span onClick={()=>display('7')}>7</span>
        <span onClick={()=>display('8')}>8</span>
        <span onClick={()=>display('9')}>9</span> 
        <span onClick={()=>display('-')}>-</span>
        <span onClick={()=>display('4')}>4</span>
        <span onClick={()=>display('5')}>5</span>
        <span onClick={()=>display('6')}>6</span>
        <span onClick={()=>display('+')} className='plus'>+</span>
        <span onClick={()=>display('1')}>1</span>
        <span onClick={()=>display('2')}>2</span>
        <span onClick={()=>display('3')}>3</span>
        <span onClick={()=>display('0')}>0</span>
        <span onClick={()=>display('0')}>00</span>
        <span onClick={()=>display('.')}>.</span>
        <span onClick={()=>calculate()} className='num equal'>=</span>

    </form>
  )
        
  
}

export default Calculator