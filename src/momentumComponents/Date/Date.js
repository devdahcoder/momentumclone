import React, {useEffect, useState, useContext} from 'react';
import "./date.css"

//imported packages
import moment from "moment"

// imported utils
import {DateContext} from "../../context/DateContext"

const Date = () => {

    const {currentDate} = useContext(DateContext);
    const {day, date} = currentDate;

    return (
        <div className="date-top-left">

            <div className="app-container weather show show-fade-in" data-test="weather">

                <div className="app-dash date-metric-item" title={date} data-test="app-dash">

                    <div className="date-metric-stat">

                        <div>

                            <span className="unit hide">{date}</span>

                        </div>

                    </div>
                    
                    <div className="location metric-label data" data-test="location" title={day}>

                        <span className="metric-label-name">{day}</span>

                    </div>

                    <span className="metric-message"></span>

                </div>

            </div>

        </div>
    )
}

export default Date