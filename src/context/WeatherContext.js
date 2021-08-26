import React, {useState, createContext, useEffect} from 'react'


// imported packages
import store from "store"

export const WeatherContext = createContext();


const WeatherContextProvider = (props) => {

    const [locationDetails, setLocationDetails] = useState(null);


    useEffect(() => {
        const getLocation = store.get("location");

        if (getLocation) {
            setLocationDetails(getLocation);
        }
    }, []);

    useEffect(() => {
        store.set("location", locationDetails);
    }, [locationDetails])


    const getUserCity = async (locationData) => {
        try {
            let url = `https://dataservice.accuweather.com/currentconditions/v1/${locationData.Key}?apikey=${process.env.REACT_APP_WEATHER_API_KEY}`

            const response = await fetch(url);
            const data = await response.json();
            setLocationDetails({...locationData, ...data[0]});
        } catch (error) {
            console.log("Something went wrong");
        }
    }


    //get user location and collect location key
    const getUserLocation = () => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                let url = `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${process.env.REACT_APP_WEATHER_API_KEY}&q=${latitude}%2C${longitude}&language=en-us&details=true&toplevel=true`;

                const response = await fetch(url);
                const data = await response.json();
                getUserCity(data);
            },
            () => {
                console.log("your browser does not support it");
            }
        );
    }

    // useEffect(() => {
    //     getUserLocation();
    // }, []);



    const value = { locationDetails, setLocationDetails };


    return (
        <WeatherContext.Provider value={value}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider
