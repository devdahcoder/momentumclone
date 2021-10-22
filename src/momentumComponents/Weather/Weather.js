import React, {useContext} from 'react';
import "./weather.css";


// imported utils
import {WeatherContext} from "../../context/WeatherContext"

//imported components
import Metric from "../Metric/Metric"
import WeatherAdd from "../WeatherAdd/WeatherAdd";
import WeatherHourForcast from "../WeatherHourForcast/WeatherHourForcast"


const Weather = () => {
    
    const {toggleWeatherDropdown, weather} = useContext(WeatherContext);

    return (
        <div className="weather-top-right">
            <div className="app-container weather show show-fade-in" data-test="weather">

                <div onClick={toggleWeatherDropdown} className="app-dash metric-item" title={weather && weather.now && weather.now.WeatherText} data-test="app-dash">
                    <Metric />
                    <div className="location-metric-label-name-container data" data-test="location" title="Lagos, Nigeria">
                        <span className="metric-label-name">{weather && weather.location && weather.location.AdministrativeArea && weather.location.AdministrativeArea.EnglishName}</span>
                    </div>

                    <span className="metric-message"></span>
                </div>

                <WeatherHourForcast />

            </div>

        </div>
    )
}

export default Weather
