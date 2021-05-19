import React, {useState, useEffect} from "react";
import "./App.css";
import TimeGreet from "./momentumComponents/TimeGreet/TimeGreet";
import TodoInput from "./momentumComponents/TodoInput/TodoInput";
import DateWeather from "./momentumComponents/DateWeather/DateWeather"
import Footer from "./momentumComponents/Footer/Footer";
import {getUserLocation} from "./Actions/locationAction";
import {useDispatch} from "react-redux";

function App() {

    const [getAmPm, setAmPm] = useState("");
    const [getHour, setHour] = useState("");
    const [getTwentyFourHour, setTwentyFourHour] = useState("")
    const [getMinute, setMinute] = useState("");
    const [greeting, setGreeting] = useState("");
    const [name, setName] = useState("Olamide");

    // please contribute if you have an idea how to get value 
    // of an editable content and YES i tried using String.fromCharCode

    // const [nameValue, setNameValue] = useState("");
    const [nameCondition, setNameCondition] = useState(true); 
    const [todo, setTodo] = useState([]);


    const API_KEY = "P0BEZ1EdgkfLR5R4chm5ChWLQyJMkHtJ";

    const dispatch = useDispatch()

    // get name from local storage
    useEffect(() => {
      const storageName = JSON.parse(localStorage.getItem("name"))
      if (storageName) {
        setName(storageName)
      }
    }, [])


    // set name to local storage
    useEffect(() => {
      localStorage.setItem("name", JSON.stringify(name));
    }, [name]);




    
    // get Todo from local storage
    useEffect(() => {
      const storageTodo = JSON.parse(localStorage.getItem("todo"))
      if (storageTodo) {
        setTodo(storageTodo)
      }
    }, [])



    // set Todo to local Storage
    useEffect(() => {
      localStorage.setItem("todo", JSON.stringify(todo));
    }, [todo]);




    useEffect(() => {
      dispatch(getUserLocation(API_KEY));
    }, []);


    // give user time 
    useEffect(() => {
      const interval = setInterval(() => {
        const getDay = new Date();
        const getHour = getDay.getHours();
        const getMinute = getDay.getMinutes();


        let twentyFourHours = getHour <= 9 ? `0${getHour}`: `${getHour}`;

        setTwentyFourHour(twentyFourHours);


        const amPm = getHour >= 12 ? "PM" : "AM";
        setAmPm(amPm);


        const hour = getHour % 12 || 12;
        setHour(hour);

        let addzero = getMinute <= 9 ? `0${getMinute}`: `${getMinute}`;


        setMinute(addzero);
        // setMinute(getMinute);
      }, 1000);
      return () => clearInterval(interval)
    }, [])

    
    
    // main return area
    return (
      <div className="main-app">
        <DateWeather />

        <TimeGreet 
          getAmPm={getAmPm} 
          getMinute={getMinute} 
          getHour={getHour} 
          getTwentyFourHour={getTwentyFourHour}

        />

        <TodoInput />

        <Footer />
      </div>
    );
}

export default App;
