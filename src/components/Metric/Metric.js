import React, {useContext} from 'react';
import "./metric.css";

// imported utils
import {WeatherContext} from "../../context/WeatherContext"

const Metric = () => {
    
    const {weather} = useContext(WeatherContext);

    const renderIcon = () => {

        let weatherIcon = weather && weather.now && weather.now.WeatherIcon;

        if (weatherIcon) {
        
            return <img src={process.env.PUBLIC_URL + "/images/weather/"+ weatherIcon + ".png" } alt="weather-icon" />
        
        }

    }

    return (
        
        <div data-testid="weather-metric" className="weather-metric-stat-container">

            <span className="icon icon-weather" title={weather && weather.now && weather.now.WeatherText}>
                
                {renderIcon()}
            
            </span>

            <div>

                <span className="metric-stat-number" data-test="temperature">{weather && weather.now && weather.now.Temperature && weather.now.Temperature.Metric && weather.now.Temperature.Metric && weather.now.Temperature.Metric && weather.now.Temperature.Metric.Value.toFixed()}</span>
                
                <span className="weather-degree">°</span>
                
                <span className="unit hide">{weather && weather.now && weather.now.Temperature && weather.now.Temperature.Metric && weather.now.Temperature.Metric.Unit.toLowerCase()}</span>
                
            </div>

        </div>

    )
}

export default Metric
