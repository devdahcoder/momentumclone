import React, {useContext} from 'react';
import "./editlocation.css";

// imported utils
import {WeatherContext} from "../../context/WeatherContext"

const EditLocation = () => {

    const {
        toggleEditWeather,
        editWeather,
        handleEditLocationInput,
        editLocationInput,
        editLocation,
        editLocationIsLoading,
        editLocationError,
        getWeather,
    } = useContext(WeatherContext);

    return (

        <div data-testid="current-location-group" className={`current-location-group ${editWeather ? "display-edit-location" : ""}`}>

            <div className="input-wrapper">

                <input onChange={handleEditLocationInput} value={editLocationInput} type="text" name="current-location" id="current-location" className="current-location-search" autoComplete="off" placeholder="Location" spellCheck="false" data-test="weather-location-search" />

                <span className="icon-row">

                    <span className="weather-location-icon weather-location-reset-container" title="Use your current location">

                        <svg className="weather-location-reset-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 937.4 937.4">

                            <path d="M887.4,418.7H855.6A390,390,0,0,0,518.7,81.8V50a50,50,0,0,0-100,0V81.8A390,390,0,0,0,81.8,418.7H50a50,50,0,0,0,0,100H81.8A390,390,0,0,0,418.7,855.6v31.8a50,50,0,0,0,100,0V855.6A390,390,0,0,0,855.6,518.7h31.8a50,50,0,0,0,0-100ZM730,518.7h24.4A290.53,290.53,0,0,1,518.6,754.5V730.1a50,50,0,0,0-100,0v24.4A290.53,290.53,0,0,1,182.8,518.7h24.4a50,50,0,0,0,0-100H182.8A290.53,290.53,0,0,1,418.6,182.9v24.4a50,50,0,1,0,100,0V182.9A290.53,290.53,0,0,1,754.4,418.7H730a50,50,0,1,0,0,100Z"></path>

                        </svg>

                    </span>

                    <i onClick={toggleEditWeather} className="u--flex-center clear-current-weather" data-test="clear-icon">

                        <span className="icon-wrapper">

                            <svg className="icon icon-cancel" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982">

                                <path d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"></path>
                            
                            </svg>

                        </span>

                    </i>

                </span>

            </div>

            <div className="edit-location-dropdown typeahead">

                {

                    editLocationIsLoading ? ( <div className="searching">Searching<i>.</i><i>.</i><i>.</i></div> ) : ("")

                }

                {

                    editLocation.length < 1 ?

                        (

                            <div className="not-found">No locations found.</div>

                        )

                        :

                        (

                            <ul className="location-dropdown-list" data-test="weather-location-results">

                                {

                                    editLocation && editLocation.map((location, index) => {

                                        return (

                                            <li onClick={() => getWeather(location)} data-id={location.LocalizedName} key={index} data-index={index} data-offset="undefined" class="hover">

                                                <span class="location-result">{location?.LocalizedName}, {location?.AdministrativeArea?.EnglishName}, {location?.Country?.LocalizedName}</span>

                                            </li>

                                        )

                                    })

                                }
                                
                            </ul>
                            
                        )

                }

            </div>

        </div>

    )
}

export default EditLocation
