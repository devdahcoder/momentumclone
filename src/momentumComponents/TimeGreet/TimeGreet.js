import React from 'react';
import "./timegreet.css";

//imported components
import Time from "../Time/Time";
import Greeting from "../Greeting/Greeting";

// imported utils
import BackgroundImageContextProvider from '../../context/BackgroundImageContext';
import GreetingContextProvider from '../../context/GreetingContext';

const TimeGreet = () => {
    return (
        <section className="time-greet-container">
            <div className="time-greet-display">
                
                <Time />

                
                <GreetingContextProvider>
                    <BackgroundImageContextProvider>
                        <Greeting />
                    </BackgroundImageContextProvider>
                </GreetingContextProvider>
                
            </div>
        </section>
    )
}

export default TimeGreet
