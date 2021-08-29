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

    

    return (
        <div>
            {props.children}
        </div>
    )
}

export default QuoteContextProvider
