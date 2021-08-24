import React from 'react';
import "./dateweather.css";

//imported components
import Date from "../Date/Date";
import Weather from "../Weather/Weather";

const DateWeather = () => {
    return (
        <header className="date-weather-header">
            
            <Date />

            <div className="top-center"></div>

            <Weather />

        </header>
    )
}

export default DateWeather
