import React, {useState, useEffect, createContext} from 'react';

// imported packages
import store from "store"

export const BackgroundImageContext = createContext();

const BackgroundImageContextProvider = (props) => {

    const [backgroundImage, setBackgroundImage] = useState(null);


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
        try {
            let url = `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&query=nature`
            const response = await fetch(url);
            const data = await response.json();
            setBackgroundImage(data);

        } catch (error) {
            console.log(error);
        }
        
    }

    // useEffect(() => {
    //     getBackgroundImage();
    // }, []);

    const value = {backgroundImage, getBackgroundImage};


    return (
        <BackgroundImageContext.Provider value={value}>
            {props.children}
        </BackgroundImageContext.Provider>
    )
}

export default BackgroundImageContextProvider
