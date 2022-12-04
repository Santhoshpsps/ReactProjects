import React from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import { useState } from "react";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
   async function fetchMoviesHandler(){
    
  const response= await fetch("https://swapi.py4e.com/api/films");
  // const response = await fetch('https://react-demo-4c8e2-default-rtdb.firebaseio.com');

  const data =await response.json();
  

    const transformedData = data.results.map((movie) => {
      return {
        id: movie.episode_id,
        title: movie.title,
        openingText: movie.opening_crawl,
        releaseDate: movie.release_date,
      };
      
    });
    setMovies(transformedData);

  }

  return (
    <React.Fragment>
    <section>
      <AddMovie/>
    </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
