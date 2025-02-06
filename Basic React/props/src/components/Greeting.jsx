import React from 'react'

const Greeting = ({timeOfDay}) => {
  
    return timeOfDay == 'Morning' ? (<h1 style={{color: 'red'}}>Good Morning</h1>) : (<h1>Good Afternoon</h1>)
}

export default Greeting