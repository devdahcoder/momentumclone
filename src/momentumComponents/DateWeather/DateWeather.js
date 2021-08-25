import React from 'react';
import "./dateweather.css";

// imported utils
import WeatherContextProvider from "../../context/WeatherContext";


//imported components
import Date from "../Date/Date";
import Weather from "../Weather/Weather";

const DateWeather = () => {
    return (
        <header className="date-weather-header">
            
            <Date />

            <div className="top-center"></div>

            <WeatherContextProvider>
                <Weather />
            </WeatherContextProvider>

        </header>
    )
}

export default DateWeather
