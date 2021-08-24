import React, {useContext} from "react";
import "./timeformatswitch.css";

//imported utils
import {TimeContext} from "../../context/TimeContext"


const TimeFormatSwitch = () => {

    const { toggle24DigitalTime } = useContext(TimeContext);

    return (
        <div className="time-format-checkbox-container">
            <input type="checkbox" name="check" id="" className="time-format-checkbox" { ...( toggle24DigitalTime ? { checked: true } : {} ) } />
        </div>
    )
}

export default TimeFormatSwitch
