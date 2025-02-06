import React, { useState } from 'react'

const Shopping = () => {
    const [items, setItems]= useState([])
    const [name,setName] = useState('')
    const [quantuty,setQuantity] = useState()
    const handleListSubmit = e =>{
        e.preventDefault()
        if(!name || !quantuty){
            return
        }
        const newItem = {
            name, quantuty : parseInt(quantuty)
        }
        setItems((prevItems)=>[...prevItems,newItem])
    }
  return (
    <div>
        <h1>Shopping List</h1>
        <form onSubmit={handleListSubmit}> 
            <input type="text" 
            placeholder='Item name' 
            value = {name} 
            onChange={e=>setName(e.target.value)} 
            />
            <input type="text" 
            placeholder='Quantity' 
            value = {quantuty} 
            onChange={e=>setQuantity(e.target.value)} 
            />
            <button type='submit'>Submit</button>
        </form>
        <ul>
            {items.map((item,index)=>{
                return <li key={index}>{item.name} - Quantity - {item.quantuty}</li>
            })}
        </ul>
    </div>
  )
}

export default Shopping