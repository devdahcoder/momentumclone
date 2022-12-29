import React, {useEffect, useState, useContext} from 'react';
import "./Date.css";


// imported utils
import {DateContext} from "../../context/DateContext"

const Date = () => {

    const {currentDate} = useContext(DateContext);

    const {day, date} = currentDate;

    return (

        <div data-testid="date-element" className="date-top-left">

            <div data-testid="show-fade" className="app-container weather show show-fade-in">

                <div data-testid="data-metric-item-test" className="app-dash date-metric-item" title={date}>

                    <div className="date-metric-stat">

                        <div>

                            <span data-testid="date-unit" className="unit hide">{date}</span>

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