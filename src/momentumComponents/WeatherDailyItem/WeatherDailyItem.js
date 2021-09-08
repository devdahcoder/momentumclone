import React, {useRef, useEffect, useContext} from 'react';
import "./weatherdailyitem.css";

// imported utils
import {WeatherContext} from "../../context/WeatherContext"


const WeatherDailyItem = ({day}) => {

    const renderIcon = () => {
        let weatherIcon = day && day.Day.Icon;

        if (weatherIcon) {
            return <img src={process.env.PUBLIC_URL + "/img/"+ weatherIcon + ".png" } alt="weather-icon" />
        }
    }


    const {
        handleCurrentWeatherDropDown,
    } = useContext(WeatherContext);



    return (
        <div onClick={() => handleCurrentWeatherDropDown(day)} className="weather-forecast-item weather-forecast-day selected" data-day="Friday" data-test="forecast-day" title="Cloudy, a shower in the p.m.">
            <div className="daily-weather-forecast-label" data-test="forecast-day-label">Fri</div>
            <div className="daily-weather-forecast-day-details">
                <span className="icon icon-weather weather-forecast-icon" data-icon="H" title={day && day.Day.IconPhrase}>
                    {renderIcon()}  
                </span>
                <span className="weather-forecast-high" data-test="forecast-high">{day.Temperature.Maximum.Value.toFixed()}°</span>
                <span className="weather-forecast-low">{day.Temperature.Minimum.Value.toFixed()}°</span>
            </div>
        </div>
    )
}

export default WeatherDailyItem
