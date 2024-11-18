import React, { useState } from 'react';

import InfoBox from './infoBox';
import Searchbox from './Searchbox';

function Weatherapp() {
  const [weather, setWeather] = useState({
    city: "Kathmandu",
    feelslike: 24.84,
    temp: 25.05,
    Sealevel: 25.05,
    humidity: 25.05,
    sunrise: 47,
    sunset: 47,
    weather: "haze",
});


  return (
    <div className="flex flex-col items-center p-8 space-y-8 bg-gray-100 min-h-screen">
    <h1 className="text-3xl font-bold">Weather App</h1>
    <Searchbox updateinfo={(result) => {setWeather(result)}}/>
    <InfoBox info={weather}/>



    </div>
  )
}

export default Weatherapp