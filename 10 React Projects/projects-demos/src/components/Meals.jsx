// Meads DB API
// We will use axios api
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

import React from 'react'
import '../css/meals.css'


const Meals = () => {
    const [items,setItems] = useState([])
    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=American').then((res)=>{
            console.log(res.data.meals)
            setItems(res.data.meals)
        }).catch((err)=>{
            console.log(err)
        })

    },[])
    const itemsList = items.map(({strMeal,strMealThumb,idMeal})=>{
        return (
            <section className="card" key={idMeal}>
                <img src={strMealThumb} alt={strMeal} />
                <section className="content">
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </section>
            </section>
        )
    })
  return (
    <div className='items-container'>{itemsList}</div>
  )
}

export default Meals