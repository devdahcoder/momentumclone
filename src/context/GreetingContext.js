import React, {useState, createContext, useEffect} from 'react'

//imported packages
import store from "store"


export const GreetingContext = createContext();

const GreetingContextProvider = (props) => {

    const [inputName, setInputName] = useState("");
    const [isEditingName, setIsEditingName] = useState(false);
    const [name, setName] = useState("");



    useEffect(() => {
        const getName = store.get("name");

        if (getName) {
            setName(getName);
        }
    }, [])

    useEffect(() => {
        store.set("name", name);
    }, [name])

    const deleteName = () => {
        setName("");
    }

    const editName = () => {
        setIsEditingName(!isEditingName);
        setInputName(name);
        deleteName();
    };



    const value = { inputName, setInputName, setName, name, isEditingName, setIsEditingName, editName };


    return (
        <GreetingContext.Provider value={value}>
            {props.children}
        </GreetingContext.Provider>
    )
}

export default GreetingContextProvider


