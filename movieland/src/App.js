import { useEffect, useState } from "react";
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';

//Here is your key: 2cd611a3
const API_URL = "https://www.omdbapi.com?apikey=2cd611a3";
function App() {
  const [searchTerm, setSearchTerm]= useState('');
  const [movieArray, setMovieArray] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
   
    setMovieArray(data.Search);
    // console.log(data);
  };

  useEffect(() => {
    searchMovies("BatMan");
  }, []);

  const searchButtonHandler=()=>{
    searchMovies(searchTerm);
  }
  const inputChangeHandler=(event)=>{
    setSearchTerm(event.target.value);
  }
  return <div className="app">
    <h1>Movieland</h1>
    <div className="search">
      <input placeholder="Search for movies" value={searchTerm} onChange={inputChangeHandler}/>
      <img src={SearchIcon} alt="search" onClick={searchButtonHandler}/>
    </div>
    <div>
    {movieArray?.length > 0 ? (
        <div className="container">
          {movieArray.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  </div>;
}

export default App;
