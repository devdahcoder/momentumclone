import React from 'react'

const DateWeather = () => {
    return (
        <div>
            <div class="top-row">
                <div class="region top-left">
                    <div id="quicklinks" class="app-container quicklinks links" data-test="undefined" style={{}}>
                        <span class="app-dash toggle Links-toggle" data-test="links-app-dash" data-ob="links-app-dash">Links</span>
                        <div class="app-wrapper app-placeholder nipple nipple-top-left">
                        <div class="app links-app" style={{height:"70px", width:"260px"}}>
                            <div class="app-placeholder-loading">
                                <i class="loading-icon"></i>Loading...
                            </div>
                        </div>
                    </div>
                </div>
                <div id="dashlinks" class="dashlinks">
            </div>
            <div data-v-5f7dbe7c="" id="search" data-test="search" class="app-container search">
                <div data-v-5f7dbe7c="" class="app-dash">
                    <form data-v-5f7dbe7c="" class="search-form">
                        <span data-v-5f7dbe7c="" class="search-underline"></span>
                        <i data-v-5f7dbe7c="" data-test="icon-search" class="dash-icon icon-search"></i>
                        <div data-v-5f7dbe7c="" data-test="provider-toggle" class="more source" data-just-bound-click-outside-handler="false" data-click-outside-mouseup-handler-id="qh5qg" data-click-outside-mousedown-handler-id="vxn94h">
                            <div data-v-5f7dbe7c="" tabindex="0" class="source-toggle">
                                <div data-v-5f7dbe7c="" class="icons">
                                    <img data-v-5f7dbe7c="" src="img/logo-google.svg" data-test="icon-google" tabindex="0" class="icon-google icon active" />
                                    <img data-v-5f7dbe7c="" src="img/logo-bing.svg" data-test="icon-bing" tabindex="0" class="icon-bing icon" />
                                    <img data-v-5f7dbe7c="" src="img/logo-duckduckgo-white.svg" data-test="icon-duckduckgo" tabindex="0" class="icon-duckduckgo icon" />
                                </div>
                                <img data-v-5f7dbe7c="" src="img/icon-down.svg" class="icon icon-dropdown" />
                            </div>
                        </div>
                        <input data-v-5f7dbe7c="" id="search-input" search-url="https://www.google.com/search?q=" type="text" autocomplete="off" data-test="search-input" class="search-input" />
                    </form>
                </div>
            </div>
        </div>
        <div class="region top-center"></div>
            <div class="region top-right">
                <div id="weather" class="app-container weather" data-test="weather">
                    <div class="app-dash metric-item" title="Mostly cloudy" data-test="app-dash">
                        <div class="metric-stat">
                            <span class="icon icon-weather" data-icon="H" title="Mostly cloudy"></span>
                            <span class="metric-stat-number" data-test="temperature">32</span>
                            <span class="weather-degree">°</span><span class="unit hide">c</span>
                        </div>
                        <div class="location metric-label data" data-test="location" title="Lagos, Nigeria">
                            <span class="metric-label-name">Lagos</span>
                        </div>
                        <span class="metric-message"></span>
                    </div>

                    {/* <div class="app-wrapper nipple nipple-top-right">
                        <div class="app weather-app ">

                            <section class="weather-current">

                                <header class="weather-current-header">

                                    <div class="weather-current-location">
                                        <div class="weather-location">
                                            <span class="weather-location-name" title="Lagos, Nigeria" data-test="location-name">Lagos</span>
                                            <i class="loading-icon"></i>
                                            <span class="weather-location-icon weather-location-edit" data-test="edit-icon"><i class="icon-edit"></i></span>
                                        </div>
                                        <div class="input-group current-location-group">
                                            <div class="input-wrapper">
                                                <input type="text" name="current-location" id="current-location" class="current-location" autocomplete="off" placeholder="Location" value="Lagos" spellcheck="false" data-test="weather-location-search" />
                                                <span class="icon-row">
                                                    <span class="weather-location-icon weather-location-reset" title="Use your current location">
                                                        <svg height="26" class="weather-location-reset-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 937.4 937.4"><path d="M887.4,418.7H855.6A390,390,0,0,0,518.7,81.8V50a50,50,0,0,0-100,0V81.8A390,390,0,0,0,81.8,418.7H50a50,50,0,0,0,0,100H81.8A390,390,0,0,0,418.7,855.6v31.8a50,50,0,0,0,100,0V855.6A390,390,0,0,0,855.6,518.7h31.8a50,50,0,0,0,0-100ZM730,518.7h24.4A290.53,290.53,0,0,1,518.6,754.5V730.1a50,50,0,0,0-100,0v24.4A290.53,290.53,0,0,1,182.8,518.7h24.4a50,50,0,0,0,0-100H182.8A290.53,290.53,0,0,1,418.6,182.9v24.4a50,50,0,1,0,100,0V182.9A290.53,290.53,0,0,1,754.4,418.7H730a50,50,0,1,0,0,100Z"></path></svg>
                                                    </span>
                                                    <i class="u--flex-center clear" data-test="clear-icon">
                                                        <span class="icon-wrapper">
                                                            <svg height="26" class="icon icon-cancel" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982"><path d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"></path></svg></span>
                                                    </i>
                                                </span>
                                            </div>

                                            <div class="dropdown typeahead">
                                                <div class="searching">Searching<i>.</i><i>.</i><i>.</i></div>
                                                <ul class="dropdown-list location-dropdown-list" data-test="weather-location-results"></ul>
                                                <div class="not-found">No locations found.</div>
                                            </div>
                                        </div>

                                        <span class="weather-current-conditions">Mostly cloudy</span>
                                    </div>

                                    <div class="more">
                                        <div class="icon-wrapper more-toggle" data-test="more">
                                            <svg height="26" class="icon icon-ellipsis more-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M8 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM52 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"></path></svg></div>
                                        <div class="dropdown more-dropdown">
                                            <ul class="dropdown-list">
                                                <li class="toggle-hourly has-toggle" data-test="toggle-hourly-button">
                                                    <div>
                                                        Hourly forecast<span class="badge badge-plus">PLUS</span>
                                                    </div>
                                                    <span class="toggle-slider"><svg height="26" class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg></span>
                                                </li>
                                                <li class="toggle-details has-toggle" data-test="toggle-details-button">
                                                    <div>
                                                        Extra weather info<span class="badge badge-plus">PLUS</span>
                                                    </div>
                                                    <span class="toggle-slider"><svg height="26" class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg></span>
                                                </li>
                                                <li class="line"></li>
                                                <li class="toggle-metric has-toggle on" data-test="toggle-metrics-button">
                                                    Metric units
                                                    <span class="toggle-slider"><svg height="26" class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg></span>
                                                </li>
                                                <li class="weather-location-edit-menu" data-test="edit-dropdown">Edit location</li>
                                            </ul>
                                        </div>
                                    </div>
                                </header>


                                <div class="weather-current-temp-row">
                                    
                                    <div class="weather-current-temp-wrapper toggle-hourly" data-test="toggle-hourly-div">
                                        
                                        <span class="icon icon-weather weather-current-icon" data-icon="H" title="Mostly cloudy"></span><span class="weather-current-temp">32°</span>
                                    </div>


                                </div>


                                
                            </section>


                            
                            <section class="weather-row weather-forecast weather-forecast-daily active">
                                <div class="weather-forecast-item weather-forecast-day selected" data-day="Monday" data-test="forecast-day" title="Partly sunny and pleasant">
                                    <div class="weather-forecast-label" data-test="forecast-day-label">Mon</div>
                                    <div class="weather-forecast-day-details">
                                        <span class="icon icon-weather weather-forecast-icon" data-icon="H"></span>
                                        <span class="weather-forecast-high" data-test="forecast-high">32°</span><span class="weather-forecast-low">25°</span>
                                    </div>
                                </div>
                                <div class="weather-forecast-item weather-forecast-day" data-day="Tuesday" data-test="forecast-day" title="A morning t-storm in the area">
                                    <div class="weather-forecast-label" data-test="forecast-day-label">Tue</div>
                                    <div class="weather-forecast-day-details">
                                        <span class="icon icon-weather weather-forecast-icon" data-icon="P"></span>
                                        <span class="weather-forecast-high" data-test="forecast-high">32°</span><span class="weather-forecast-low">24°</span>
                                    </div>
                                </div>
                                <div class="weather-forecast-item weather-forecast-day" data-day="Wednesday" data-test="forecast-day" title="A stray morning thunderstorm">
                                    <div class="weather-forecast-label" data-test="forecast-day-label">Wed</div>
                                    <div class="weather-forecast-day-details">
                                        <span class="icon icon-weather weather-forecast-icon" data-icon="H"></span>
                                        <span class="weather-forecast-high" data-test="forecast-high">32°</span><span class="weather-forecast-low">23°</span>
                                    </div>
                                </div>
                                <div class="weather-forecast-item weather-forecast-day" data-day="Thursday" data-test="forecast-day" title="A thunderstorm in spots">
                                    <div class="weather-forecast-label" data-test="forecast-day-label">Thu</div>
                                    <div class="weather-forecast-day-details">
                                        <span class="icon icon-weather weather-forecast-icon" data-icon="H"></span>
                                        <span class="weather-forecast-high" data-test="forecast-high">31°</span><span class="weather-forecast-low">24°</span>
                                    </div>
                                </div>
                                <div class="weather-forecast-item weather-forecast-day" data-day="Friday" data-test="forecast-day" title="A stray afternoon t-storm">
                                    <div class="weather-forecast-label" data-test="forecast-day-label">Fri</div>
                                    <div class="weather-forecast-day-details">
                                        <span class="icon icon-weather weather-forecast-icon" data-icon="H"></span>
                                        <span class="weather-forecast-high" data-test="forecast-high">32°</span><span class="weather-forecast-low">24°</span>
                                    </div>
                                </div>
                            </section>

                            <div class="weather-empty empty">
                                <div class="title">See the weather for your area</div>
                                <div class="description">Enter your location to get started</div>
                                <button class="button set-manual-location">
                                    <div class="description" data-test="manual-location">Enter Location</div>
                                </button>
                            </div>
                            <div class="weather-backround-icon">
                                <div>H</div>
                            </div>

                            
                            <section class="weather-row weather-attribution">
                                <a class="weather-attribution-link" href="https://www.accuweather.com/en/ng/apapa/942887/current-weather/942887?lang=en-us&amp;partner=momentum" target="_blank"><img class="weather-attribution-logo" src="../img/logo-accuweather.png" /> More weather →</a>
                            </section>

                        </div>
                    </div> */}
                </div>
                {/* <div data-v-6ac648f0="" class="app-container add-widget needs-hover" data-just-bound-click-outside-handler="false" data-click-outside-mouseup-handler-id="ux6ej3" data-click-outside-mousedown-handler-id="cafuln">
                    <div data-v-6ac648f0="" data-ob="add-widget" class="app-dash app-dash-icon add-shadow sounds-toggle toggle">
                        <svg height="26" data-v-6ac648f0="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icon"><path data-v-6ac648f0="" d="M256 0C114.833 0 0 114.833 0 256s114.833 256 256 256 256-114.853 256-256S397.167 0 256 0zm0 472.341c-119.275 0-216.341-97.046-216.341-216.341S136.725 39.659 256 39.659 472.341 136.705 472.341 256 375.295 472.341 256 472.341z"></path><path data-v-6ac648f0="" d="M355.148 234.386H275.83v-79.318c0-10.946-8.864-19.83-19.83-19.83s-19.83 8.884-19.83 19.83v79.318h-79.318c-10.966 0-19.83 8.884-19.83 19.83s8.864 19.83 19.83 19.83h79.318v79.318c0 10.946 8.864 19.83 19.83 19.83s19.83-8.884 19.83-19.83v-79.318h79.318c10.966 0 19.83-8.884 19.83-19.83s-8.864-19.83-19.83-19.83z"></path></svg> 
                        <span data-v-6ac648f0="" class="app-dash-icon-label">Add</span>
                    </div>
                </div> */}
            </div>
        </div>
        </div>
    )
}

export default DateWeather
