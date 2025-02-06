import React from 'react'
import { useId } from 'react'

function UniqueID() {
  const id = useId()
  // const id2 = useId()
  return (
    <div>
      <label htmlFor={`${id}-email`}>
        Email
      </label>
      <input type="email" id={`${id}-email`}/>
      <br />
      <label htmlFor={`${id}-pass`}>
        Password
      </label>
      <input type="password" id={`${id}-pass`}/>
    </div>
  )
}

export default UniqueID