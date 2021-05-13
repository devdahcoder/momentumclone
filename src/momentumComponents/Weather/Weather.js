import React from 'react';
import "./weather.css";

const Weather = ({icon}) => {

    const url = "https://developer.accuweather.com/sites/default/files/" + icon + "-s.png";
    return (
        <div className="region weather-top-right">
            <div id="weather" className="app-container weather show show-fade-in" data-test="weather">
                <div className="app-dash metric-item" title="Mostly cloudy" data-test="app-dash">
                    <div className="metric-stat">
                        <span className="icon icon-weather" data-icon="H" title="Mostly cloudy"><img src={url} alt="" /> </span>
                        <span className="metric-stat-number" data-test="temperature">32</span>
                        <span className="weather-degree">°</span>
                        <span className="unit hide">c</span>
                    </div>
                    <div className="location metric-label data" data-test="location" title="Lagos, Nigeria">
                        <span className="metric-label-name">Lagos</span>
                    </div>
                    <span className="metric-message"></span>
                </div>
            </div>
        </div>
    )
}

export default Weather
