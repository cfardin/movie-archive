import React, { useEffect, useState } from 'react';
import MovieCard from "../components/MovieCard"
import { searchMovies, getPopularMovies } from '../services/api';
import "../CSS/Home.css";

const Home = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () =>{
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                setError("Failed to l")
            } finally{
                setLoading(true);
            }
        }

        loadPopularMovies();
    }, []);


    const handleSearch = (e) =>{
        e.preventDefault();
        console.log(searchQuery);
        setSearchQuery("");
    }

    return (
        <div className='home'>
            {/* searching form */}
            <form onSubmit={handleSearch} className='search-form'>
                <input 
                    type="text"
                    placeholder='Search for movies'
                    className='search-input' 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}/>

                <button className='search-button'>search</button>
            </form>
            <div className='movies-grid'>
                {
                    movies.map(
                        (movie) =>
                            movie.title.toLocaleLowerCase().startsWith(searchQuery) && 
                            (<MovieCard movie = {movie} key = {movie.id}></MovieCard>)
                    )
                }
            </div>
        </div>
    );
};

export default Home;