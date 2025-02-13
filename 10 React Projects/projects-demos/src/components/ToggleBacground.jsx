import React from 'react'
import '../css/toggle.css'
import { useState } from 'react'


function ToggleBacground() {
  const [backgroundColor,setbackgroundColor] = useState('white')
  const [textColor,setTextColor] = useState('#1b1b1b')
  const [buttonStyle,setbuttonStyle]= useState('white')
  const handleClick = ()=>{
    setbackgroundColor(backgroundColor=== 'white' ? '#1b1b1b' : 'white')
  }
  return (
    <div className={{backgroundColor, color: textColor}}>
      <button onClick={handleClick} style={{buttonStyle, color:textColor, border:`2px solid ${textColor}`}}>
    {backgroundColor == '#1b1b1b' ? 'Black Theme':'White Theme'}

      </button>
    </div>
  )
}

export default ToggleBacground