import React from 'react';
import "./dateweather.css";

//imported components
import Date from "../Date/Date";
import Weather from "../Weather/Weather";

const DateWeather = () => {
    return (
        <header class="date-weather-header">
            
            <Date />

            <div class="top-center"></div>

            <Weather />

        </header>
    )
}

export default DateWeather
