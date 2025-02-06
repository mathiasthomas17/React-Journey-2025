import React from 'react'
const products = [
    {id:1, namx:'Phone', Price:2500},
    {id:1, namx:'Laptop', Price:20500},
    {id:1, namx:'Mask', Price:5500},
  
]
const Products = () => {
  return (
    <>
    <h2>Products</h2>
    {products.map((prod)=>(
        <div key={prod.id}>
            <ul>
                <li>{prod.namx}</li>
                <li>{prod.Price}</li>
            </ul>
        </div>
    ))}
    </>
  )
}

export default Products