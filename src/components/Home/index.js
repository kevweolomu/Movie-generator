import React from 'react';
import {Link} from "react-router-dom";
import './home.css';

export const Home = () => {
    return (
        <div>
            <div>
                <h1> Welome to movie finder</h1>
                <Link to="findmovie"> Click to find movie </Link>
            </div>
        </div>
    )
}

export default Home;