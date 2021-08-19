import React from 'react';
import "./weatherforcast.css";

const WeatherHourForcast = () => {
    return (
        <div className="app-wrapper nipple nipple-top-right">
            <div className="app weather-app ">

                <section className="weather-current">

                    <header className="weather-current-header">

                        <div className="weather-current-location">
                            <div className="weather-location">
                                <span className="weather-location-name" title="Apapa" data-test="location-name">Lagos</span>
                                <i className="loading-icon"></i>
                                <span className="weather-location-icon weather-location-edit" data-test="edit-icon">
                                    <i className="icon-edit"></i>
                                </span>
                            </div>

                            <div className="input-group current-location-group">
                                <div className="input-wrapper">
                                    <input type="text" name="current-location" id="current-location" className="current-location-search" autocomplete="off" placeholder="Location" value="Lagos" spellcheck="false" data-test="weather-location-search" />
                                    <span className="icon-row">
                                        <span className="weather-location-icon weather-location-reset" title="Use your current location">
                                            <svg className="weather-location-reset-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 937.4 937.4"><path d="M887.4,418.7H855.6A390,390,0,0,0,518.7,81.8V50a50,50,0,0,0-100,0V81.8A390,390,0,0,0,81.8,418.7H50a50,50,0,0,0,0,100H81.8A390,390,0,0,0,418.7,855.6v31.8a50,50,0,0,0,100,0V855.6A390,390,0,0,0,855.6,518.7h31.8a50,50,0,0,0,0-100ZM730,518.7h24.4A290.53,290.53,0,0,1,518.6,754.5V730.1a50,50,0,0,0-100,0v24.4A290.53,290.53,0,0,1,182.8,518.7h24.4a50,50,0,0,0,0-100H182.8A290.53,290.53,0,0,1,418.6,182.9v24.4a50,50,0,1,0,100,0V182.9A290.53,290.53,0,0,1,754.4,418.7H730a50,50,0,1,0,0,100Z"></path></svg>
                                        </span>
                                        <i className="u--flex-center clear" data-test="clear-icon">
                                            <span className="icon-wrapper">
                                                <svg className="icon icon-cancel" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982"><path d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"></path></svg></span>
                                        </i>
                                    </span>
                                </div>

                                <div className="dropdown typeahead">
                                    <div className="searching">Searching<i>.</i><i>.</i><i>.</i></div>
                                    <ul className="dropdown-list location-dropdown-list" data-test="weather-location-results"></ul>
                                    <div className="not-found">No locations found.</div>
                                </div>
                            </div>

                            <span className="weather-current-conditions">Cloudy</span>
                        </div>

                        <div className="more">
                            <div className="icon-wrapper more-toggle" data-test="more">
                                <svg className="icon icon-ellipsis more-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M8 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM52 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"></path></svg></div>
                            <div className="dropdown more-dropdown">
                                <ul className="dropdown-list">
                                    <li className="toggle-hourly has-toggle" data-test="toggle-hourly-button">
                                        <div>
                                            Hourly forecast<span className="badge badge-plus">PLUS</span>
                                        </div>
                                        <span className="toggle-slider"><svg className="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg></span>
                                    </li>
                                    <li className="toggle-details has-toggle" data-test="toggle-details-button">
                                        <div>
                                            Extra weather info<span className="badge badge-plus">PLUS</span>
                                        </div>
                                        <span className="toggle-slider"><svg className="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg></span>
                                    </li>
                                    <li className="line"></li>
                                    <li className="toggle-metric has-toggle on" data-test="toggle-metrics-button">
                                        Metric units
                                        <span className="toggle-slider"><svg className="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg></span>
                                    </li>
                                    <li className="weather-location-edit-menu" data-test="edit-dropdown">Edit location</li>
                                </ul>
                            </div>
                        </div>
                    </header>


                    <div className="weather-current-temp-row">

                        <div className="weather-current-temp-wrapper toggle-hourly" data-test="toggle-hourly-div">
                            
                            <span className="icon icon-weather weather-current-icon" data-icon="Y" title="Cloudy"></span><span className="weather-current-temp">26°</span>
                        </div>


                    </div>



                </section>



                <section className="weather-row weather-forecast weather-forecast-daily active">
                    <div className="weather-forecast-item weather-forecast-day selected" data-day="Friday" data-test="forecast-day" title="Cloudy, a shower in the p.m.">
                        <div className="weather-forecast-label" data-test="forecast-day-label">Fri</div>
                        <div className="weather-forecast-day-details">
                            <span className="icon icon-weather weather-forecast-icon" data-icon="Q"></span>
                            <span className="weather-forecast-high" data-test="forecast-high">29°</span><span className="weather-forecast-low">24°</span>
                        </div>
                    </div>
                    <div className="weather-forecast-item weather-forecast-day" data-day="Saturday" data-test="forecast-day" title="Mostly cloudy">
                        <div className="weather-forecast-label" data-test="forecast-day-label">Sat</div>
                        <div className="weather-forecast-day-details">
                            <span className="icon icon-weather weather-forecast-icon" data-icon="H"></span>
                            <span className="weather-forecast-high" data-test="forecast-high">29°</span><span className="weather-forecast-low">24°</span>
                        </div>
                    </div>
                    <div className="weather-forecast-item weather-forecast-day" data-day="Sunday" data-test="forecast-day" title="Cloudy">
                        <div className="weather-forecast-label" data-test="forecast-day-label">Sun</div>
                        <div className="weather-forecast-day-details">
                            <span className="icon icon-weather weather-forecast-icon" data-icon="Y"></span>
                            <span className="weather-forecast-high" data-test="forecast-high">29°</span><span className="weather-forecast-low">25°</span>
                        </div>
                    </div>
                    <div className="weather-forecast-item weather-forecast-day" data-day="Monday" data-test="forecast-day" title="Sun and clouds">
                        <div className="weather-forecast-label" data-test="forecast-day-label">Mon</div>
                        <div className="weather-forecast-day-details">
                            <span className="icon icon-weather weather-forecast-icon" data-icon="H"></span>
                            <span className="weather-forecast-high" data-test="forecast-high">29°</span><span className="weather-forecast-low">24°</span>
                        </div>
                    </div>
                    <div className="weather-forecast-item weather-forecast-day" data-day="Tuesday" data-test="forecast-day" title="An a.m. shower; mostly cloudy">
                        <div className="weather-forecast-label" data-test="forecast-day-label">Tue</div>
                        <div className="weather-forecast-day-details">
                            <span className="icon icon-weather weather-forecast-icon" data-icon="H"></span>
                            <span className="weather-forecast-high" data-test="forecast-high">29°</span><span className="weather-forecast-low">24°</span>
                        </div>
                    </div>
                </section>
                <div className="weather-empty empty">
                    <div className="title">See the weather for your area</div>
                    <div className="description">Enter your location to get started</div>
                    <button className="button set-manual-location">
                        <div className="description" data-test="manual-location">Enter Location</div>
                    </button>
                </div>
                <div className="weather-backround-icon">
                    <div>H</div>
                </div>


                <section className="weather-row weather-attribution">
                    <a className="weather-attribution-link" href="https://www.accuweather.com/en/ng/apapa/942887/current-weather/942887?lang=en-us&amp;partner=momentum" target="_blank"><img class="weather-attribution-logo" src="../img/logo-accuweather.png" /> More weather →</a>
                </section>

            </div>
        </div>
    )
}

export default WeatherHourForcast
