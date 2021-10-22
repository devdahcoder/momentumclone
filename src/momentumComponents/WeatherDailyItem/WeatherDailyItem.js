import React, {useRef, useEffect, useContext} from 'react';
import "./weatherdailyitem.css";

// imported utils
import {WeatherContext} from "../../context/WeatherContext"


const WeatherDailyItem = ({day, index}) => {

    const renderIcon = () => {
        let weatherIcon = day && day.Day.Icon;

        if (weatherIcon) {
            return <img src={process.env.PUBLIC_URL + "/img/"+ weatherIcon + ".png" } alt="weather-icon" />
        }
    }

    const elementRef = useRef();

    const {
        handleCurrentWeatherDropDown,
        activeLink
    } = useContext(WeatherContext);


    const DateToDay = (day) => {
        let date = day && day.Date;
        let newDay = new Date(date);
        let dayOfWeek = newDay.toString().split(" ")[0];
        return dayOfWeek;
    }

    return (
        <div onClick={() => handleCurrentWeatherDropDown(day, index)} ref={elementRef} id={`${activeLink === index ? "selected" : ""}`} className="weather-forecast-item weather-forecast-day" data-day="Friday" data-test="forecast-day" title={day && day.Day.IconPhrase}>
            <div className="daily-weather-forecast-label" data-test="forecast-day-label">{DateToDay(day)}</div>
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