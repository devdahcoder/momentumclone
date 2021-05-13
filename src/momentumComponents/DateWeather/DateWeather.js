import React from 'react';
import "./dateweather.css";

//imported components
import Date from "../Date/Date";
import Weather from "../Weather/Weather";

const DateWeather = ({icon}) => {
    return (
        <header class="date-weather-header">
            
            <Date />

            <div class="region top-center"></div>

            <Weather icon={icon} />
        </header>
    )
}

export default DateWeather
