import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 27.45,
    humidity: 36,
    temp: 28.05,
    tempMax: 28.05,
    tempMin: 28.05,
    weather: "haze",
  });

  let updateInfo = (result) =>{
    setWeatherInfo(result);
  }

  return (
    <div>
      <h2>weather App</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
