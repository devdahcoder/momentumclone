import React, {useState, createContext, useEffect, useMemo, useCallback } from 'react'

// imported packages
import store from "store";
import debounce from "lodash.debounce";

export const WeatherContext = createContext();

const WeatherContextProvider = (props) => {

    const [weather, setWeather] = useState({
        loading: false,
        error: null,
        now: {},
        days: [],
        location: {},
        provider: "AccuWeather",
    });
    const [daysWeatherDropdown, setDaysWeatherDropdown] = useState(false);
    const [weatherDailyMore, setWeatherDailyMore] = useState(false);
    const [editWeather, setEditWeather] = useState(false);
    const [dropDownCurrentWeather, setDropDownCurrentWeather] = useState({});
    const [activeLink, setActiveLink] = useState();
    const [editLocationInput, setEditLocationInput] = useState("");
    const [editLocation, setEditLocation] = useState([]);
    const [editLocationIsLoading, setEditLocationIsLoading] = useState(false);
    const [editLocationError, setEditLocationError] = useState(null);
    const [locationKey, setLocationKey] = useState(null);
    
    
    
    useEffect(() => {
        const getWeather = store.get("weather");

        if (getWeather) {

            setWeather(getWeather);

        }
        
    }, []);

    useEffect(() => {

        store.set("weather", weather);

    }, [weather])

    const getWeather = async (locationData) => {
        let urlNow = `https://dataservice.accuweather.com/currentconditions/v1/${locationData.Key}?apikey=${process.env.REACT_APP_WEATHER_API_KEY}`
        let urlDays = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationData.Key}?apikey=${process.env.REACT_APP_WEATHER_API_KEY}`

        try {
            const responseNow = await fetch(urlNow);
            const responseDays = await fetch(urlDays);

            const dataNow = await responseNow.json();
            const dataDays = await responseDays.json();

            setWeather({...weather, now: dataNow[0], days: dataDays.DailyForecasts, location: locationData,});
        }
        catch (error) {
            console.log("Something went wrong", error);
        }
    }

    // get user location and collect location key
    // const getUserLocation = () => {
    //     navigator.geolocation.getCurrentPosition(
    //         async (position) => {
    //             try {
    //                 const { latitude, longitude } = position.coords;

    //                 let url = `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${process.env.REACT_APP_WEATHER_API_KEY}&q=${latitude}%2C${longitude}&language=en-us&details=true&toplevel=true`;

    //                 const response = await fetch(url);
    //                 const data = await response.json();
    //                 getWeather(data);
    //                 console.log(data);
    //                 setLocationKey(data.Key);
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         },
    //         () => {
    //             console.log("your browser does not support it");
    //         }
    //     );
    // }

    const getUserLocationFromIp = async (IpData) => {

        let url = `http://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=${process.env.REACT_APP_WEATHER_API_KEY}=${IpData.ip}&details=true`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            getWeather(data);
            // setLocationKey(data.Key);
        }
        catch (error) {
            console.log(error);
        }
    }

    const getUserIp = async () => {

        const url = "https://api.ipregistry.co/?key=tryout";

        try {
            const response = await fetch(url);
            const IpData = await response.json();
            // getWeather(data);
            // setLocationKey(data.ip);
            console.log(IpData);
            getUserLocationFromIp(IpData);
        }
        catch (error) {
            console.log(error);
        }

    }


    useEffect(() => {
        getUserIp();
    }, [])


    // useEffect(() => {

    //     getUserLocation();

    // }, []);


    const toggleWeatherDropdown = () => {
        setDaysWeatherDropdown(!daysWeatherDropdown);
    }

    const toggleWeatherDailyMore = () => {
        setWeatherDailyMore(!weatherDailyMore);
    }

    const handleCurrentWeatherDropDown = (element, id) => {
        setDropDownCurrentWeather(element);
        setActiveLink(id);
        console.log(id)
    };

    const toggleEditWeather = () => {
        setEditWeather(!editWeather);
    }

    const searchLocation = async (locationInput) => {
        setEditLocationIsLoading(true);
        setEditLocationError(null);

        try {
            let url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.REACT_APP_WEATHER_API_KEY}&q=${locationInput}`;
            // let url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_WEATHER_API_KEY}=${locationInput}`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setEditLocation(data);
            setEditLocationIsLoading(false);
        } catch (error) {
            console.log(error);
            setEditLocationError(error);
            setEditLocationIsLoading(false);
        }
    }

    const debouncedChangeHandler = useCallback(debounce((text) => searchLocation(text), 300), []);

    const handleEditLocationInput = (e) => {
        setEditLocationInput(e.target.value);
        debouncedChangeHandler(e.target.value);
    }
    
    const value = { 
        toggleWeatherDropdown, 
        daysWeatherDropdown, 
        weatherDailyMore,
        toggleWeatherDailyMore,
        dropDownCurrentWeather, 
        handleCurrentWeatherDropDown,
        weather,
        activeLink,
        toggleEditWeather,
        editWeather,
        handleEditLocationInput,
        editLocationInput,
        editLocation,
        editLocationIsLoading,
        editLocationError,
        getWeather,
    };

    return (
        <WeatherContext.Provider value={value}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider
