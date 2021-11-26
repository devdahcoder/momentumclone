import React, {useState, useEffect, createContext} from 'react';

// imported packages
import store from "store"

export const BackgroundImageContext = createContext();

const BackgroundImageContextProvider = (props) => {

    const [backgroundImage, setBackgroundImage] = useState("");
    const [backgroundIsLoading, setBackgroundIsLoading] = useState(false);
    const [backgroundImageError, setBackgroundImageError] = useState({errorMessage: "", error: false});


    useEffect(() => {

        const getBackgroundImage = store.get("backgroundImage");

        if (getBackgroundImage) {

            setBackgroundImage(getBackgroundImage);

        }

    }, [])

    useEffect(() => {

        store.set("backgroundImage", backgroundImage);

    }, [backgroundImage])

    const getBackgroundImage = async () => {

        setBackgroundIsLoading(true)

        try {

            let url = `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&query=nature`;

            const response = await fetch(url);

            const data = await response.json();

            setBackgroundImage(data);

            setBackgroundIsLoading(false);

            setBackgroundImageError({errorMessage: "", error: false});

        } catch (error) {

            setBackgroundIsLoading(false);

            setBackgroundImage("");

            if (error.message === 'Timeout' || error.message === 'Network request failed') {

                setBackgroundImageError({errorMessage: "I think you don't have Internet connection", error: true});
            
            }

            console.log(error);

        }
        
    }

    useEffect(() => {

        getBackgroundImage();
        
    }, []);

    const value = {backgroundImage, getBackgroundImage, backgroundImageError, backgroundIsLoading};

    return (

        <BackgroundImageContext.Provider value={value}>

            {props.children}

        </BackgroundImageContext.Provider>

    )

}

export default BackgroundImageContextProvider
