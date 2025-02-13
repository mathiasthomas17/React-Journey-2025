import React from 'react'
import '../css/styles.css'
import { useState } from 'react'

const Testimonials = () => {
    const testimonials = [
        {
          quote: "The only way to do great work is to love what you do.",
          author: "Steve Jobs"
        },
        {
          quote: "Success is not the key to happiness. Happiness is the key to success.",
          author: "Albert Schweitzer"
        },
        {
          quote: "Believe you can and you're halfway there.",
          author: "Theodore Roosevelt"
        }
      ];
    const [currentIndex, setCurrentIndex]= useState(0)



    // On Handle
    const handelPrev = ()=>{
        setCurrentIndex((currentIndex + testimonials.length -1) % testimonials.length)
    }
    const handleNext = ()=>{
        setCurrentIndex((currentIndex + 1) % testimonials.length)
    }
  return (
    <div className='testimonials'>
        <div className="testimonials-quote">
            {testimonials[currentIndex].quote}
        </div>
        <div className="testimonials-author">
            - {testimonials[currentIndex].author}
        </div>
        <div className="testimonials-nav">
            <button onClick={handelPrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
    </div>
  )
}

export default Testimonials