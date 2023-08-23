import './App.css';
import SearchCity from './components/searchCity/SearchCity';
import { useState } from 'react';
import SearchedResult from './components/searchedResult/SearchedResult';


function App() {

  const [weatherData, setWeatherData] = useState(null)
  return (
    <div className="App">
      <SearchCity setWeatherData = {setWeatherData} />
      <SearchedResult weatherData = {weatherData} />
    </div>
  );
}

export default App;
