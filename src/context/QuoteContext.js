import React, {useState, useEffect, createContext} from 'react';

// imported packages
import store from "store"

export const QuoteContext = createContext();

const QuoteContextProvider = (props) => {

    const [quote, setQuote] = useState("");

    useEffect(() => {

        const getQuote = store.get("quote");

        if (getQuote) {

            setQuote(getQuote);

        };

    }, [])

    useEffect(() => {

        store.set("quote", quote);

    }, [quote])


    const getQuote = async () => {

        const urlQuote = "https://api.quotable.io/random";

        try {

            const response = await fetch(urlQuote);

            const data = await response.json();

            setQuote(data);

        } catch (error) {

            console.log("Something went wrong", error);

        }

    }

    useEffect(() => {

        getQuote();

    }, []);

    const value = {quote, getQuote};

    return (
        <QuoteContext.Provider value={value}>
            {props.children}
        </QuoteContext.Provider>
    )
}

export default QuoteContextProvider
