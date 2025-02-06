import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [albums,setAlbums] = useState([])
    useEffect(()=>{
        async function getAlbums() {
            const res = await fetch('https://jsonplaceholder.typicode.com/albums')
            const data = await res.json()
            if(data && data.length) setAlbums(data)
        }
        getAlbums()
    },[])
  return (
    <div>
        <ul>
        {albums.map((alb)=>(
            <li key={alb.id}>{alb.title}</li>
        ))}
        </ul>
    </div>
  )
}

export default UseEffect