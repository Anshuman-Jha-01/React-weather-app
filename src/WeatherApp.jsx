// Import the necessary dependencies
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

// Create the WeatherApp component
export default function WeatherApp() {
    let [weatherData, setWeatherData] = useState({
        city: "Delhi",
        feelsLike: 288.06,
        humidity: 88,
        tempMin: 288.2,
        temp: 288.2,
        tempMax: 288.2,
        weather: "mist"
    });

    // Update weatherData state variable
    function updateWeather(result) {
        setWeatherData(result);        
    }
    return (
        <>
            <SearchBox updateWeather={updateWeather}></SearchBox>
            <InfoBox result={weatherData}></InfoBox>
        </>
    );
}