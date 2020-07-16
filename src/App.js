import React from 'react';
import './App.css';
import { MainPage } from './components/MainPage';
import { Banner } from './components/Banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <MainPage />
    </div>
  );
}

export default App;
