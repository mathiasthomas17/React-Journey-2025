import React from 'react'
import Search from './components/Search'
import { useState,useEffect } from 'react'

const API_BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const API_OPTIONS = {
  method:'GET',
  headers:{
    accept:'application/json',
    Authorization:`Bearer ${API_KEY}`
  }
}



const App = () => {
  const [searchTerm,setSearchterm] = useState('')
  const [errorMessage,setErrorMessage] = useState('')
   // Get Movies
   const fetchMovies = async()=>{
    try{
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
      const response = await fetch(endpoint,API_OPTIONS)

      if(!response.ok){
        throw new Error('Failed Fetching Movies')
      }
      const data = await response.json()
      console.log(data)
    }catch(error){
      console.error(`Error Fetching Movies ${error}`)
      setErrorMessage('Error fecthing movies!!!!!!!!!!!!!!')
    }
  }

  useEffect(()=>{
    fetchMovies()

  },[])
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
          <section className="all-movies">
            <h2>All Movies</h2>
            {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
          </section>
        </div>
      </div>
    </main>
  )
}

export default App


Start from 1: 14