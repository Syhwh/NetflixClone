import React from 'react';
import './App.css';
import { MoviesRows } from './components/MoviesRows';
import { requests } from './helpers/requestsEndPoints';

function App() {
  return (
    <div className="App">
      <h1>Movies</h1>
      <MoviesRows title={'New'} fetchURL={requests.fetchTrending} />
    </div>
  );
}

export default App;
