import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Filter from './components/filter/Filter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Filter />
    </div>
  );
}

export default App;
