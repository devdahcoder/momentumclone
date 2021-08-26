import React, {useContext} from "react";
import "./timeswitchdropdown.css";

//imported components
import TimeFormatSwitch from "../TimeFormatSwitch/TimeFormatSwitch";

//imported utils
import {TimeContext} from "../../context/TimeContext"


const TimeSwitchDropdown = () => {

    const {
        toggleDigitalTimeDropDown, 
        toggle24DigitalTimeDropDown,
    } = useContext(TimeContext);

    return (
        <div style={{visibility: toggleDigitalTimeDropDown ? "visible" : "hidden"}} className="right-dropdown-container more-dropdown dash-dropdown nipple nipple-top-left ">
            <ul className="time-ul dropdown-list">
            <li onClick={toggle24DigitalTimeDropDown} className="time-li has-toggle">
                <span className="dropdown-list-label">24-hour clock</span>
                <span className="toggle-slider">
                    <TimeFormatSwitch />
                </span>
            </li>
            </ul>
        </div>
    )
}

export default TimeSwitchDropdown
