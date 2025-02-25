import React from 'react'


const Search = ({searchTerm,setSearchterm}) => {
  return (
    <div className='search'>
        <div>
            <img src="search.svg" alt="" />
            <input type="text" 
            placeholder='Search through movies'
            value={searchTerm}
            onChange={(e)=>setSearchterm(e.target.value)}

             />
        </div>
    </div>
  )
}

export default Search