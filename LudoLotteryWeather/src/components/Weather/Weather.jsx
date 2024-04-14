import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'

const Weather = () => {

  const [weatheerInfo, setWeatherInfo] = useState({
                                                    city : "Delhi",
                                                    feelsLike: 24.86,
                                                    humidity: 24,
                                                    temp: 25.62,
                                                    tempMax: 26.05,
                                                    tempMin: 25.62,
                                                    weather: "haze",
                                                  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  }

  return (
    <>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info = {weatheerInfo}/>
    </>
  )
}

export default Weather
