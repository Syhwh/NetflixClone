import React from 'react';
import './App.css';
import { MainPage } from './components/MainPage';
import { Banner } from './components/Banner';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner />
      <MainPage />
    </div>
  );
}

export default App;
