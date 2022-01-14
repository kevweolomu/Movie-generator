import React, {useState, useEffect} from 'react';

export const MovieFetch = ({movieTitle}) => {
    //const [dataMovie, setDataMovie] = useState();
    //const [title, setTitle]= useState("");
    const [image, setImage]= useState("");
    const [rating, setRating] = useState("");
    const [actors, setActors] = useState ("");
    const [runningTime, setRunningTime] = useState("");
    const [plot, setPlot] = useState ("");
    const [year, setYear] = useState ("");
    const [isMovieFound, setIsMovieFound]= useState("");

    useEffect (()=> {
        async function getData(){
            const response = await fetch(`https://www.omdbapi.com/?apikey=3b2a6fcc&t=${movieTitle}`)
            const data = await response.json();
            // setDataMovie(data);
            if (data.Response === 'False') {
                console.log(`Movie not found`)
            }; 
            //console.log(typeof(data.Response))
            setImage(data.Poster);
            setRating (data.imdbRating);
            setActors (data.Actors);
            setPlot (data.Plot);
            setRunningTime (data.Runtime);
            setYear (data.Released);
            setIsMovieFound(data.Response);
        };
        getData();
    }, [movieTitle])

<<<<<<< HEAD
    if (isMovieFound === "True") {
=======
>>>>>>> b70abb36fb40100fbc0d0581624edffe2faa5aa4


    return (
        <div className="movies">
            {/* <h3> {title} </h3> */}
            <img src={image} alt="movie details"/>
            <p>IMDB rating: {rating} </p>
            <p>Actors: {actors}</p>
            <p>Release time: {year}</p>
            <p>{runningTime}</p>
            <p>Plot: {plot}</p>
        </div>
    )}

    else {
       return  <h1>Movie not found </h1>
    }
}

export default MovieFetch;

// We want title, image, rating, release year, actors, running time, plot