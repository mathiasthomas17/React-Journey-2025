import React from 'react'

const Events = () => {
    const handleClick = ()=>{
        console.log('clicked')
        alert('Clicked')
    }
  return (
    <div><button onClick={handleClick}>Click</button></div>
  )
}

export default Events