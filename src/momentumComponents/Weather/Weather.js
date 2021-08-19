import React from 'react';
import "./weather.css";

//imported package
import { useSelector } from 'react-redux';

//imported components
import Metric from "../Metric/Metric"
import WeatherAdd from "../WeatherAdd/WeatherAdd";
import WeatherHourForcast from '../../WeatherHourForcast/WeatherHourForcast';


const Weather = () => {

    const weatherUi = useSelector(state => state.location.locationDetails);

    return (
        <div className="weather-top-right">
            <div className="app-container weather show show-fade-in" data-test="weather">

                <div className="app-dash metric-item" title={weatherUi && weatherUi.WeatherText} data-test="app-dash">
                    <Metric />
                    <div className="location-metric-label-name-container data" data-test="location" title="Lagos, Nigeria">
                        <span className="metric-label-name">{weatherUi && weatherUi.AdministrativeArea.EnglishName}</span>
                    </div>

                    <span className="metric-message"></span>
                </div>

                {/* <WeatherHourForcast /> */}

            </div>

            <WeatherAdd />


        </div>
    )
}

export default Weather
