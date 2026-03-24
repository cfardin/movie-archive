import React, { useState } from 'react';
import MovieCard from "../components/MovieCard"

const Home = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id : 1, title : "meow", release_date : "2020"},
        {id : 2, title : "cat", release_date : "2020"},
        {id : 3, title : "text her", release_date : "2020"},
        {id : 4, title : "she is cute", release_date : "2020"}
    ]

    const handleSearch = (e) =>{
        e.preventDefault();
        console.log(searchQuery);
        setSearchQuery("");
    }

    return (
        <div className='home'>
            <form onSubmit={handleSearch} className='search-form'>
                <input 
                    type="text"
                    placeholder='Search for movies'
                    className='search-input' 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}/>

                <button className='search-btn'>search</button>
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