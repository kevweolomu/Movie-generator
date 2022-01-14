import React, {useState, useEffect} from 'react';

export const MovieFetch = ({rating}) => {
    const [title, setTitle]= useState();
    const [url, setUrl]= useState();

    useEffect (()=> {
        
    })


    return (
        <div>
            {/* <h3> {title} </h3> */}
            <img src={url} alt="movie details"/>
            {/* <p>IMDB rating: {rating} </p> */}

        </div>
    )
}

export default MovieFetch;

// We want title, image, rating, release year, actors, running time, plot