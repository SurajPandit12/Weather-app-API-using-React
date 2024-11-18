import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import React, { useState } from 'react';

function Searchbox({ updateinfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(""); // State for error messages
  const API_KEY = "93f352d7ecc6dcfd465b70f589c8e214";

  const Weatherinfo = async () => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("No such place exists or invalid response.");
      }
      const data = await response.json();
      const info = {
        
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        seaLevel: data.main.sea_level || "N/A", // Handle missing sea_level
        humidity: data.main.humidity,
        city: data.name,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        weather: data.weather[0].description,
        
      };
      return info;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError(error.message); // Update error state
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors
    const newInfo = await Weatherinfo();
    if (newInfo) {
      updateinfo(newInfo); // Update weather info if API call succeeds
      setCity(""); // Reset input field
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded shadow-md w-80">
      <h2 className="text-xl font-semibold mb-4">Search for the weather</h2>
      <form className="w-full" onSubmit={handleSubmit}>
        <Input
          placeholder="City Name"
          fullWidth
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="mb-4"
        />
        <Button variant="contained" type="submit" fullWidth>
          Search
        </Button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>} {/* Error message */}
    </div>
  );
}

export default Searchbox;
