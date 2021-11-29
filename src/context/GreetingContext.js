import React, {useState, createContext, useEffect} from 'react'

//imported packages
import store from "store"


export const GreetingContext = createContext();

const GreetingContextProvider = (props) => {

    const [inputName, setInputName] = useState("");
    const [isEditingName, setIsEditingName] = useState(false);
    const [name, setName] = useState("");
    const [greeting, setGreeting] = useState("");
    const [greetingDropdown, setGreetingDropdown] = useState(false);
    const [hour, setHour] = useState();




    useEffect(() => {
        const getName = store.get("name");

        if (getName) {
            setName(getName);
        }
    }, [])

    useEffect(() => {
        store.set("name", name);
    }, [name])

    // const deleteName = () => {
    //     setName("");
    // }

    const editName = () => {
        // please leave like this and don't do !isEditingName because it breaks the name input
        // when a new user enters their name.
        setIsEditingName(true);
        setInputName(name);
    };

    const greetings = () => {
        let currentTime = new Date();
        let hour = currentTime.getHours();

        setHour(hour);

        if (hour < 12) {
            setGreeting("Good morning,");
        } else if (hour < 17) {
            setGreeting("Good afternoon,");
        } else {
            setGreeting("Good evening,");
        }
    };

    useEffect(() => {
        greetings();
    }, []);

    const toggleGreetingDropdown = () => {
        setGreetingDropdown(!greetingDropdown);
    };



    const value = { 
        inputName, 
        setInputName, 
        setName, 
        name, 
        isEditingName, 
        setIsEditingName, 
        editName, 
        greeting,
        toggleGreetingDropdown,
        greetingDropdown,
        hour,
    };


    return (
        <GreetingContext.Provider value={value}>
            {props.children}
        </GreetingContext.Provider>
    )
}

export default GreetingContextProvider


