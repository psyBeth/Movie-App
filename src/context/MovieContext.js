import React, { createContext, useEffect } from 'react';
import axios from "axios";
import { useContext, useState } from 'react';

export const MovieContext = createContext();

export const useMovieContext = () => {
    return useContext(MovieContext);
};

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;


const MovieContextProvider = ({ children }) => {
    const [movies,setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = () => {
        setLoading(true);
        axios
            .get(FEATURED_API)
            .then((res) =>setMovies(res.data.results))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }

    return (
        <MovieContext.Provider value={ {movies, loading} }>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieContextProvider;