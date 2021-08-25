import React, {useContext} from 'react';
import "./metric.css";

// imported utils
import {WeatherContext} from "../../context/WeatherContext"

const Metric = () => {
    
    const {locationDetails} = useContext(WeatherContext);

    const renderIcon = () => {
        let weatherIcon = locationDetails && locationDetails.WeatherIcon;

        if (weatherIcon) {
            return <img src={process.env.PUBLIC_URL + "/img/"+ weatherIcon + ".png" } alt="weather-icon" />
        }
    }
    return (
        <div className="weather-metric-stat-container">
            <span className="icon icon-weather" data-icon="H" title={locationDetails && locationDetails.WeatherText}>
                {renderIcon()}
            </span>

            <div>
                <span className="metric-stat-number" data-test="temperature">{locationDetails && locationDetails.Temperature.Metric.Value.toFixed()}</span>
                <span className="weather-degree">°</span>
                <span className="unit hide">{locationDetails && locationDetails.Temperature.Metric.Unit.toLowerCase()}</span>
            </div>
        </div>
    )
}

export default Metric
