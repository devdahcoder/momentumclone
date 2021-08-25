import React, {useState, useEffect, createContext} from 'react'

export const TimeContext = createContext(null)


const TimeContextProvider = (props) => {

    const [time, setTime] = useState({});
    const [toggleDigitalTimeDropDown, setToggleDigitalTimeDropDown] = useState(false);
    const [toggle24DigitalTime, setToggle24DigitalTime] = useState(false);
    const [toggleOtherTimeDropDown, setToggleOtherTimeDropDown] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const getCurrentDay = new Date();
            const getCurrentHour = getCurrentDay.getHours();
            const getCurrentMinute = getCurrentDay.getMinutes();


            const getAmPm = getCurrentHour >= 12 ? "PM" : "AM";
            const getHour = getCurrentHour % 12 || 12;
            let getTwentyFourHour = getCurrentHour <= 9 ? `0${getCurrentHour}`: `${getCurrentHour}`;
            let getMinute = getCurrentMinute <= 9 ? `0${getCurrentMinute}`: `${getCurrentMinute}`;


            setTime({
                getAmPm,
                getHour,
                getTwentyFourHour,
                getMinute
            });

        }, 1000);
        return () => clearInterval(interval)
    }, []);


    const toggleDisplayDigitalTimeDropDown = () => {
        setToggleDigitalTimeDropDown(!toggleDigitalTimeDropDown);
    };

    const toggle24DigitalTimeDropDown = () => {
        setToggle24DigitalTime(!toggle24DigitalTime);
    };

    const toggleDisplayOtherTimeDropDown = () => {
        setToggleOtherTimeDropDown(!toggleOtherTimeDropDown);
    };


    const value = {
        time, 
        toggleDigitalTimeDropDown, 
        toggleDisplayDigitalTimeDropDown, 
        toggle24DigitalTimeDropDown,
        toggle24DigitalTime,
        toggleOtherTimeDropDown,
        toggleDisplayOtherTimeDropDown
    };

    return (
        <TimeContext.Provider value={value}>
            {props.children}
        </TimeContext.Provider>
    )
}

export default TimeContextProvider;
