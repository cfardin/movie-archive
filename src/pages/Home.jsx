import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";
import "../CSS/Home.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if(!searchQuery.trim()) return;
    if(loading) return;
    setLoading(true);
    try{
        const searchResult = await searchMovies(searchQuery);
        setMovies(searchResult);
        setError(null);
    } catch (err){
        console.log(err);
        setError("Failed to search movies...")
    }finally{
        setLoading(false);
    }
    setSearchQuery("");
  };

  return (
    <div className="home">
      {/* searching form */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button className="search-button">search</button>
      </form>

       {
        error && <div className="error-message">{error}</div>
       } 

       {
        loading ? <div className="loading">Loading...</div> : 
        <div className="movies-grid">
          {movies.map((movie) =>
              movie.title.toLocaleLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id}></MovieCard>
              ),
          )}
        </div>
       }

        
    </div>
  );
};

export default Home;
