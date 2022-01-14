import React, {useState} from 'react';
import MovieFetch from '../MovieFetch';
import Input from '../Input';
import {Link} from "react-router-dom";

export const DisplayMovie = () => {
    const [title, setMovieTitle]= useState("Moana");

    function addTitle(titlex){
        setMovieTitle(titlex)

    }
    return (
        <div>
             <Link to="/"> Home Page </Link>
             <MovieFetch movieTitle={title} />
             <Input onSubmit={addTitle} />
        </div>
    )
}

export default DisplayMovie