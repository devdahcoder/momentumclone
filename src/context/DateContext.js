import React, {useState, createContext, useEffect} from 'react';

//imported packages
import moment from "moment"

export const DateContext = createContext();

const DateContextProvider = (props) => {

    const [currentDate, setCurrentDate] = useState({});


    useEffect(() => {
        const interval = setInterval(() => {
        const currentDateTime = moment();

        const day = currentDateTime.format("dddd");
        const date = currentDateTime.format("MMMM Do YYYY");

        setCurrentDate({day, date});
        
    }, 1000);
        return () => clearInterval(interval)
    }, []);


    const value = {currentDate};


    return (
        <DateContext.Provider value={value}>
            {props.children}
        </DateContext.Provider>
    )
}

export default DateContextProvider;
