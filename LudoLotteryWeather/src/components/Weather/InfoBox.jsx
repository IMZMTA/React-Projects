import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';

const InfoBox = ({info : Info}) => {

  
  const INITIAL_IMG = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
  
  const HOT_URL = "https://images.unsplash.com/photo-1561473880-3b8b12de0a71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
  
  const COLD_URL = "https://media.istockphoto.com/id/1289449088/photo/branches-covered-with-ice-after-freezing-rain-sparkling-ice-covered-everything-after-ice.webp?b=1&s=170667a&w=0&k=20&c=KmUu3hmpzMt22rs0DgfbOtQNbCM0NvycsaOsXGIv8qk="
  
  const RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYXV0aWZ1JTIwcmFpbiUyMGltYWdlfGVufDB8fDB8fHww"

  // const Info = {
  //   city : "Delhi",
  //   feelsLike: 24.86,
  //   humidity: 24,
  //   temp: 25.62,
  //   tempMax: 26.05,
  //   tempMin: 25.62,
  //   weather: "haze",
  // }

  return (
    <div>
      <h2>Weather-Info</h2>
      <div style={{display:"flex", justifyContent:"center"}}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              Info.humidity > 80 
              ? RAIN_URL 
              : Info.temp > 15 
              ? HOT_URL 
              : COLD_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{color:"red",backgroundColor:"black"}}>
              {Info.city.toLocaleUpperCase()} <span style={{color:"white"}}>{
              Info.humidity > 80 
              ? <ThunderstormIcon/>
              : Info.temp > 15 
              ? <WbSunnyIcon/> 
              : <SevereColdIcon/>}</span>
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
              <p>Temperature : {Info.temp} &deg;C</p>
              <p>Humidity : {Info.humidity}</p>
              <p>Min-Temperature : {Info.tempMin} &deg;C</p>
              <p>Max-Temperature : {Info.tempMax} &deg;C</p>
              <p>The weather can be described as <i><b>{Info.weather}</b></i> and  feels like : {Info.feelsLike} &deg;C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InfoBox;
