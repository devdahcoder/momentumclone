import React, {useRef, useEffect, useContext} from 'react';
import "./weatherdailyitem.css";

// imported utils
import {WeatherContext} from "../../context/WeatherContext";
import {GreetingContext} from "../../context/GreetingContext";

const WeatherDailyItem = ({day, index}) => {

    const renderIcon = () => {

        let weatherIcon = hour > 6 && hour < 18 ? day?.Day?.Icon : day?.Night?.Icon

        if (weatherIcon) {

            return <img src={process.env.PUBLIC_URL + "/img/"+ weatherIcon + ".png" } alt="weather-icon" />

        }

    }

    const {

        handleCurrentWeatherDropDown,

        activeLink

    } = useContext(WeatherContext);

    const { hour } = useContext(GreetingContext);

    const DateToDay = (day) => {

        let date = day && day.Date;

        let newDay = new Date(date);

        let dayOfWeek = newDay.toString().split(" ")[0];

        return dayOfWeek;

    }

    const elementRef = useRef();

    useEffect(() => {

        if (elementRef.current.tabIndex === 0) {

            elementRef.current.click();

        }

    }, []);


    return (
        
        <div data-testid="weather-daily-item" onClick={() => handleCurrentWeatherDropDown(day, index)} tabIndex={index} ref={elementRef} id={`${activeLink === index ? "selected" : ""}`} className="weather-forecast-item weather-forecast-day" data-day="Friday" data-test="forecast-day" title={day && day.Day.IconPhrase}>

            <div className="daily-weather-forecast-label" data-test="forecast-day-label">{DateToDay(day)}</div>

            <span className="icon icon-weather daily-weather-forecast-icon" data-icon="H" title={day && day.Day.IconPhrase}>

                {renderIcon()}  

            </span>

            <div className="daily-weather-forecast-day-details">

                <span className="weather-forecast-high" data-test="forecast-high">{day.Temperature.Maximum.Value.toFixed()}°</span>

                <span className="weather-forecast-low">{day.Temperature.Minimum.Value.toFixed()}°</span>

            </div>

        </div>

    )
}

export default WeatherDailyItem
