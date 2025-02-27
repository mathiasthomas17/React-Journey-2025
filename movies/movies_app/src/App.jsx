import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Spinner from './components/Spinner';
import Moviecard from './components/Moviecard';
import { useDebounce } from 'react-use';
import { updateSearchCount } from './appwrite';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchterm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm,setBebouncedSearchTerm] = useState('')
  useDebounce(()=>setBebouncedSearchTerm(searchTerm),500,[searchTerm])

  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');
    
    try {
      const endpoint = query ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
      :`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error('Failed Fetching Movies');
      }

      const data = await response.json();
      // console.log(data)
      
      if (!data.results) {
        setErrorMessage('Failed to fetch movies');
        setMovieList([]);
        return;
      }

      setMovieList(data.results);
      updateSearchCount()
    } catch (error) {
      console.error(`Error Fetching Movies: ${error}`);
      setErrorMessage('Error fetching movies');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <img src="./hero-img.png" alt="Hero Banner" />
            <h1>Get the latest <span className='text-gradient'>Blockbuster</span> movies in 2025</h1>
            <Search searchTerm={searchTerm} setSearchterm={setSearchterm} />
            <h1 className='text-white'>{searchTerm}</h1>
          </header>
          <section className="all-movies">
            <h2 className='mt-[40px]'>All Movies</h2>
            {isLoading ? (
              <Spinner/>
            ) : errorMessage ? (
              <p className="text-red-500">{errorMessage}</p>
            ) : (
              <ul>
                {movieList.map((movie) => (
                  <Moviecard key={movie.id} movie={movie}/>
                  
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default App;

// Continue at 1:30