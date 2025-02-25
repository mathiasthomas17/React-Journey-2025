import React from 'react'
import Search from './components/Search'
import { useState } from 'react'

const App = () => {
  const [searchTerm,setSearchterm] = useState('')
  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <img src="./hero-img.png" alt="Hero Banner" />
            <h1>Get the latest <span className='text-gradient'>Blockbuster</span> movies in 2025</h1>
            <Search searchTerm = {searchTerm} setSearchterm ={setSearchterm}/>
            <h1 className='text-white'>{searchTerm}</h1>
          </header>
        </div>
      </div>
    </main>
  )
}

export default App