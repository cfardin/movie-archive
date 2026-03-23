import React from 'react';
import MovieCard from "../components/MovieCard"

const Home = () => {
    const movies = [
        {id : 1, title : "meow", release_date : "2020"},
        {id : 2, title : "cat", release_date : "2020"},
        {id : 3, title : "text her", release_date : "2020"},
        {id : 4, title : "she is cute", release_date : "2020"}
    ]

    const handleSearch = () =>{

    }

    return (
        <div className='home'>
            <form onSubmit={handleSearch} className='search-form'>
                <input type="text" placeholder='Search for movies' className='search-input' />
                <button className='search-btn'>search</button>
            </form>
            <div className='movies-grid'>
                {
                    movies.map(movie => <MovieCard key={movie.id} movie={movie}></MovieCard>)
                }
            </div>
        </div>
    );
};

export default Home;