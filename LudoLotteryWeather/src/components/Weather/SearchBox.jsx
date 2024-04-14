import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SearchBox = ({ updateInfo }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "01db6f96747b345b14d290b9775ebcf6";

  let getWeatherInfo = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let data = await response.json();
      // console.log(data);
      let result = {
        city: city,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        feelsLike: data.main.feels_like,
        weather: data.weather[0].description,
      };
      // console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      setError(false);
      event.preventDefault();
      // console.log(city);
      setCity("");
      const info = await getWeatherInfo();
      updateInfo(info);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <h1>Weather App : Search for the Weather</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City-Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Search
        </Button>
      </form>
      {error && (
        <h2 style = {{color:"red"}}>
          No such places exit right now in our data, We will soon update our
          data and add new places. Kindly search other places for now.
        </h2>
      )}
    </>
  );
};

export default SearchBox;
