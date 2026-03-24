import { createContext, useState, useContext, useEffect } from "react";

const MoviesContext = createContext();

export const useMovieContext = () => useContext(MoviesContext);

export const MovieProvider = () =>{
    
}