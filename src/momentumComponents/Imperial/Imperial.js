import React from 'react'


//imported package
// import { useSelector } from 'react-redux';


const Imperial = () => {
    // const weatherUi = useSelector(state => state.location.locationDetails);
    return (
        <div className="metric-stat">
            {/* <span className="icon icon-weather" data-icon="H" title={weatherUi && weatherUi.WeatherText}><img src={"../../Assets/weatherIcon/" + weatherUi && weatherUi.WeatherIcon + ".png"}  alt="" /> </span>
            <span className="metric-stat-number" data-test="temperature">{weatherUi && weatherUi.Temperature.Imperial.Value}</span>
            <span className="weather-degree">°</span> */}
            {/* <span className="unit hide">{weatherUi && weatherUi.Temperature.Imperial.Unit.toLowerCase()}</span> */}
        </div>
    )
}

export default Imperial
