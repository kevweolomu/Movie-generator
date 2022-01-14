import React, {useState} from 'react';
import './App.css';
import MovieFetch from '../MovieFetch';
import Input from '../Input';

function App() {
  const [title, setMovieTitle]= useState();

  function addTitle(){
    setMovieTitle(title)

  }

  return (
    <div className="App">
      <MovieFetch movieTitle={title} />
      <Input onSubmit={addTitle} />
    </div>
  );
}

export default App;
