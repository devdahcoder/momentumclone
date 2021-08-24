import React from 'react';
import "./timegreet.css";

//imported components
import Time from "../Time/Time";
import Greeting from "../Greeting/Greeting";

// imported utils
import GreetingContextProvider from '../../context/GreetingContext';

const TimeGreet = () => {
    return (
        <section className="time-greet-container">
            <div className="time-greet-display">
                <Time />

                
                <GreetingContextProvider>
                    <Greeting />
                </GreetingContextProvider>
            </div>
        </section>
    )
}

export default TimeGreet
