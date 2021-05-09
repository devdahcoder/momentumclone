import React from 'react';
import "./timegreet.css";

//imported components
import Time from "../Time/Time";
import Greeting from "../Greeting/Greeting";

const TimeGreet = ({
    getAmPm, getMinute, getHour, getTwentyFourHour, 
    greeting, nameCondition, name, handleBlur, handleDoubleClick
    }) => {
    return (
        <section className="time-greet-container">
            <div className="time-greet-display">
                <Time 
                    getAmPm={getAmPm} 
                    getMinute={getMinute} 
                    getHour={getHour} 
                    getTwentyFourHour={getTwentyFourHour}
                />
                <Greeting
                    greeting={greeting}
                    nameCondition={nameCondition}
                    // handleNameValue={handleNameValue}
                    name={name}
                    handleBlur={handleBlur}
                    handleDoubleClick={handleDoubleClick}
                />
            </div>
        </section>
    )
}

export default TimeGreet
