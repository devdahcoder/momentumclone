export const REQUEST_LOCATION = "REQUEST_LOCATION";
export const REQUEST_LOCATION_SUCCESS = "REQUEST_LOCATION_SUCCESS";
export const REQUEST_LOCATION_ERROR = "REQUEST_LOCATION_ERROR";

export const REQUEST_KEY = "REQUEST_KEY";
export const REQUEST_KEY_SUCCESS = "REQUEST_KEY_SUCCESS";
export const REQUEST_KEY_ERROR = "REQUEST_KEY_ERROR";




export const requestLocation = () => {
    return {
        type: REQUEST_LOCATION
    }
}
export const requestLocationSuccess = (location) => {
    return {
        type: REQUEST_LOCATION_SUCCESS,
        payload: location
    }
}
export const requestLocationError = (error) => {
    return {
        type: REQUEST_LOCATION_ERROR,
        payload: error
    }
}


export const requestKey = () => {
    return {
        type: REQUEST_KEY
    }
}
export const requestKeySuccess = (key) => {
    return {
        type: REQUEST_KEY_SUCCESS,
        payload: key
    }
}
export const requestKeyError = (error) => {
    return {
        type: REQUEST_KEY_ERROR,
        payload: error
    }
}


//get user location and give weather update
export const getUserCity = (locationData, API_KEY) => {
    return async (dispatch) => {
        dispatch(requestLocation());
        try {
            let url = `http://dataservice.accuweather.com/currentconditions/v1/${locationData.Key}?apikey=${API_KEY}`
            // const imageUrl = "https://developer.accuweather.com/sites/default/files/";

            const response = await fetch(url);
            const data = await response.json();
            dispatch(requestLocationSuccess({...locationData, ...data[0]}));

            // let weatherIcon = data[0].WeatherIcon <= 9 ? "0" + data[0].WeatherIcon : data[0].WeatherIcon;

            // setIcon(imageUrl + weatherIcon + "-s.png");
        } catch (error) {
            dispatch(requestLocationError(error))
        }
    }
}


//get user location and collect location key
export const getUserLocation = (API_KEY) => {
    return (dispatch) => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                let url = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${latitude}%2C${longitude}&language=en-us&details=true&toplevel=true`;

                const response = await fetch(url);
                const data = await response.json();
                console.log(data.Key);
                dispatch(getUserCity(data, API_KEY));
            },
            () => {
                console.log("your browser does not support it");
            }
        );
    }
}