import React from 'react';
import "./metric.css";



//imported package
import { useSelector } from 'react-redux';

const Metric = () => {
    const weatherUi = useSelector(state => state.location.locationDetails);

    const renderIcon = () => {
        let weatherIcon = weatherUi && weatherUi.WeatherIcon;

        if (weatherIcon) {
            console.log(weatherIcon)
            return <img src={process.env.PUBLIC_URL + "/img/"+ weatherIcon + ".png" } alt="weather-icon" />
        }
        else {
            return (
                <span 
                    style={{
                    display: "inline-block",
                    textAlgn: "center",
                    textTransform: "none",
                    width: "1em",
                    height: "1em"
                    }}>
                </span>
            )
        }
    }
    return (
        <div className="metric-stat">
            <span className="icon icon-weather" data-icon={renderIcon()} title={weatherUi && weatherUi.WeatherText}>
                {renderIcon()}
            </span>
            <div>
                <span className="metric-stat-number" data-test="temperature">{weatherUi && weatherUi.Temperature.Metric.Value.toFixed()}</span>
                <span className="weather-degree">°</span>
                <span className="unit hide">{weatherUi && weatherUi.Temperature.Metric.Unit.toLowerCase()}</span>
            </div>
        </div>
    )
}

export default Metric
