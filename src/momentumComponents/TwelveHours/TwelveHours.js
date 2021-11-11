import React from 'react';
import "../../style/global.css";

const TwelveHours = ({getHour, getMinute}) => {

    return (

        <div className="time">

            {getHour}:{getMinute}

        </div>
        
    )
}

export default TwelveHours
