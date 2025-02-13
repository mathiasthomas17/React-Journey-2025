import React from 'react'
import { useState } from 'react'
import '../css/hidden.css'
import { FaSearch } from 'react-icons/fa'


const Hiddensearch = () => {
    const [showInput,setShowInput] = useState(false)
    const [bgColor,setBgColor] = useState('white')
    const handleClick = (e) =>{
        setBgColor('#1a1a1a')
        if(e.target.className === 'container'){
            setShowInput(false)
            setBgColor('#fff')
        }
    }
  return (
    <section className='container' 
    style={{backgroundColor: bgColor}}
    onClick={handleClick}
    >
        {showInput ?(
            <input type='text' placeholder='Search Item'/>
        ):(
            <FaSearch onClick={()=>setShowInput(true)}/>
        )}
    </section>
  )
}

export default Hiddensearch