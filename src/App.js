
import './App.css';
import React, { useState } from 'react';
import { useEffect} from 'react';
import MovieCard from './MovieCard';

import searchIcon from './search.svg';
const API_URL =  'https://www.omdbapi.com/?i=tt3896198&apikey=d9f6aaff';

const movie1 = {
    "Title": "The Amazing Spiderman T4 Premiere Special",
    "Year": "2012",
    "imdbID": "tt2233044",
    "Type": "movie",
    "Poster": "N/A"
}

function App() {

  const[movies, setMovies] = useState([]);
  const[searchTerm, setSearchTerm] = useState([]);

  const searchMovies = async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data =await response.json();

    setMovies(data.Search);
  }

  useEffect (() => {
    searchMovies('Spiderman');

  },[]);

  return (
    <div className='app'>
      <h1>MovieWorld</h1>

      <div className='search'>
        <input
        placeholder='Search for Movies'
        value={searchTerm}
        onChange={(e)=> setSearchTerm(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={()=>searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0
        ? (
          <div className='container'>
            {movies.map((movie)=>(
              <MovieCard movie={movie}/>
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No Movies found</h2>
          </div>
        )
      }

      
  </div>
  );
}

export default App;
