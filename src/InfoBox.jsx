import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';

function InfoBox({info}) {
  const INIT_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=800&auto=format&fit=crop";


  return (
    <Card className="w-80">
      <CardMedia
        component="img"
        height="140"
        image={INIT_URL}
        alt="Weather image"
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {info.city}
        </Typography>
        <Typography variant="body" color="text.secondary">
          <p><b>Temperature: {info.temp}°C</b></p>
          <p>Feels Like: {info.feelslike}°C</p>
          <p>Sea Level: {info.Sealevel}</p>
          <p>Humidity: {info.humidity}%</p>
          <p>Sunrise: {info.sunrise}</p>
          <p>Sunset: {info.sunset}</p>
          <p><b>Weather: {info.weather}</b></p>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
