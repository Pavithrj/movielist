import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Movie from './Components/Movie';
import './App.css';

const movieListUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=cc31d08b0d4b5b3539a406e5af2aec1f&language=en-US&page=1";
function App() {

  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleCountChange = (e) => {
    setSearchText(e.target.value);
  }

  const handleSearch = () => {
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredMovies([...filteredMovies]);
  };

  useEffect(() => {
    fetch(movieListUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setFilteredMovies(data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Header title="My Movie List" />
      <div>
        <input id='searchBox' type="text" value={searchText} onChange={handleCountChange} />
        <button id='searchButton' onClick={handleSearch}>Search</button>
      </div>
      <div className='movie-list'>
        {filteredMovies.map(item => <Movie movie={item} />)}
      </div>
    </div>
  );
}

export default App;