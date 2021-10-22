import React, {useContext} from 'react';
import "./weatherdailylist.css";

// imported components
import WeatherDailyItem from "../WeatherDailyItem/WeatherDailyItem";

// imported utils
import {WeatherContext} from "../../context/WeatherContext"


const WeatherDailyList = () => {

    const { weather } = useContext(WeatherContext);

    return (
        <section className="weather-row weather-forecast weather-forecast-daily-container active">
            {weather.days.map((day, index) => {
                return (
                    <WeatherDailyItem key={index} day={day} index={index} />
                )
            })}
        </section>
    )
}

export default WeatherDailyList
