import React from 'react'
import Testimonials from './componets/Testimonials'
import { accordionData } from './utils/contents'
import Accordion from './componets/Accordion'


const App = () => {
  return (
    <div className='accordion'>
      {accordionData.map(({title,content})=>(
        <Accordion  title={title} content = {content}/>
      ))}
    </div>
  )
}

export default App