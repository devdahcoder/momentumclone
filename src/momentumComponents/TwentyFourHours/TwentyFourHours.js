import React from 'react';
import "../../style/global.css";

const TwentyFourHours = ({getTwentyFourHour, getMinute}) => {

    return (

        <div className="time">

            {getTwentyFourHour}:{getMinute}

        </div>
        
    )
}

export default TwentyFourHours
