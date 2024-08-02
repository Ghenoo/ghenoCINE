/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
'use client';

import './index.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieCard from '../MovieCard';
import type { Movie } from '@/types/movie';
import ReactLoading from 'react-loading'




export default function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = async () => {
        await axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'a4a2c119e279eabc77597c52213c92d0',
                language: 'pt-BR',
            }
        }).then(response => {
            setMovies(response.data.results);
        });

        setIsLoading(false);
    }


    if (isLoading) {
        return (
            <div className="loading-container">
                <ReactLoading type="spin" color="#df0000" height={'5%'} width={'5%'} />
            </div>
        );
    }



    return (
            <ul className="movie-list ">
                {movies.map((movie) => 
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        />
                )}
        </ul>
    );
}