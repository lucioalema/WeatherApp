import React from 'react';
//import logo from './logo.svg';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  //'Ciudad Autónoma de Buenos Aires,ar',
  'Cordoba,ar',
  'Salta,ar',
  'Ushuaia,ar',
  'Madrid,es',
  'New York,us'
];

function App() {
  return (
    <div className="App">
      <LocationList cities={cities} />
    </div>
  );
}

export default App;
