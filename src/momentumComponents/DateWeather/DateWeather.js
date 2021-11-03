import React from 'react';
import "./dateweather.css";

// imported utils
import WeatherContextProvider from "../../context/WeatherContext";
import DateContextProvider from "../../context/DateContext";

//imported components
import Date from "../Date/Date";
import Weather from "../Weather/Weather";

const DateWeather = () => {
    return (
        <header className="date-weather-header">
            
            <DateContextProvider>

                <Date />

            </DateContextProvider>

            <div className="top-center"></div>

            <WeatherContextProvider>

                <Weather />

            </WeatherContextProvider>

        </header>
    )
}

export default DateWeather
