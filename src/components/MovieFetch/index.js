import React, {useState, useEffect} from 'react';

export const MovieFetch = ({movieTitle}) => {
    const [dataMovie, setDataMovie] = useState()
    //const [title, setTitle]= useState();
    const [image, setImage]= useState();

    useEffect (()=> {
        async function getData(){
            const response = await fetch(`https://www.omdbapi.com/?apikey=3b2a6fcc&t=${movieTitle}`)
            const data = await response.json();
            setDataMovie(data);
            setImage(data.Poster)
        };
        getData();
    }, [movieTitle])

    return (
        <div className="movies">
            {/* <h3> {title} </h3> */}
            <img src={image} alt="movie details"/>
            {/* <p>IMDB rating: {rating} </p> */}
        </div>
    )
}

export default MovieFetch;

// We want title, image, rating, release year, actors, running time, plot