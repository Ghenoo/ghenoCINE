/* eslint-disable @next/next/no-img-element */
import type  { Movie } from "@/types/movie"
import StarRating from "../StarRating";
import './index.scss';

export interface Props {
    movie: Movie
}


export default function MovieCard(props: Props) {
    const movie = props.movie;
    return ( 
        <li className='movie-card'>

            <div className="movie-poster "> 
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={movie.title} 
                 />
            </div>

            <div className="movie-infos" >
                <p className="movie-title">
                {movie.title} 
                </p>
                {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
<StarRating
                    rating={movie.vote_average}
                ></StarRating>
                <div className="hidden-content" >
                    {movie.overview && 
                    <p  className="description">
                    {movie.overview.length > 100
                        ? `${movie.overview.substring(0, 100)}...`
                        : movie.overview
                    }
                    </p>
                     }

                    {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button className="btn-default">
                        Ver Mais
                    </button>
                </div>
            </div>
    </li>
    )
}