import React from 'react';
import './Movie.css';

function Movie(props) {

    const { poster_path, title, vote_average, release_date, overview } = props.movie;
    const imagePosterUrl = `https://image.tmdb.org/t/p/w342${poster_path}`;

    return (
        <div className='movie box'>
            <img className='poster' src={imagePosterUrl} alt='movieposter' />
            <p className='title' title={title}>{title}</p>
            <p>Rating: {vote_average}</p>
            <p>Release Date:{release_date}</p>
            <div>
                <p className='description'>{overview}</p>
            </div>
            <div className='buttons'>
                <button className='cart'>ADD TO FAVORITE</button>
            </div>
        </div>
    )
}

export default Movie;