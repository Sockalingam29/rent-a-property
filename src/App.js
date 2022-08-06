import React,{useState} from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Filter from './components/filter/Filter';
import Card from './components/cards/Card';
import propertyData from './propertyData.json'

function App() {
  const [properties, setProperties] = useState(propertyData);
  return (
    <div className="App">
      <Navbar />
      <Filter properties={properties} setProperties={setProperties} />
      <Card  properties={properties} setProperties={setProperties}/>
    </div>
  );
}

export default App;
