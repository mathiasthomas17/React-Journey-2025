import React from 'react'

const Comp1 = ({count, onClickHandler}) => {
  const handleClick = () => onClickHandler()
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleClick}>Increment</button>
    </div>

  )
}

export default Comp1