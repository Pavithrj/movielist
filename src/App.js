import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Movie from './Components/Movie';
import './App.css';

const movieListUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=cc31d08b0d4b5b3539a406e5af2aec1f&language=en-US&page=1";
function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(movieListUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results)
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Header title="My Movie List" />
      <div className='movie-list'>
        {movies.map(item => <Movie movie={item} />)}
      </div>
    </div>
  );
}

export default App;