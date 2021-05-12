import React from 'react';
import "./timeformatswitch.css";

import {useSelector} from "react-redux";


const TimeFormatSwitch = () => {
    const time24HoursDisplay = useSelector(state => state.time.display24Hours);

    return (
        <div className="time-format-checkbox-container">
            <input type="checkbox" name="check" id="" className="time-format-checkbox" { ...( time24HoursDisplay ? { checked: true } : {} ) } />
        </div>
    )
}

export default TimeFormatSwitch
