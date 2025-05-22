import React, { useState, useEffect } from 'react';
import { fetchMovies } from './api';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const movieData = await fetchMovies(query);
    setMovies(movieData);
    setLoading(false);
  };

  useEffect(() => {
    // Fetch movies initially if needed
    handleSearch();
  }, []);

  return (
    <div className="app">
      <h1>Movie Search</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading && <p>Loading...</p>}
      <div className="movies-list">
        {movies.length === 0 && !loading && <p>No movies found</p>}
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie">
            <h3>{movie.Title}</h3>
            <img
              src={movie.Poster}
              alt={movie.Title}
            />
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;