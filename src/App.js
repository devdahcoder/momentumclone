import React, {useState, useEffect} from "react";
import "./App.css";
import TimeGreet from "./momentumComponents/TimeGreet/TimeGreet";
import TodoInput from "./momentumComponents/TodoInput/TodoInput";
import DateWeather from "./momentumComponents/DateWeather/DateWeather"
import Footer from "./momentumComponents/Footer/Footer";
import {getUserLocation} from "./Actions/locationAction";
import {getBackgroundImage} from "./Actions/backgroundImageAction";
import {useDispatch, useSelector} from "react-redux";



function App() {
    const [getAmPm, setAmPm] = useState("");
    const [getHour, setHour] = useState("");
    const [getTwentyFourHour, setTwentyFourHour] = useState("")
    const [getMinute, setMinute] = useState("");
    // const [greeting, setGreeting] = useState("");



    const API_KEY = "P0BEZ1EdgkfLR5R4chm5ChWLQyJMkHtJ";
    const dispatch = useDispatch();
    const backgroundImage = useSelector(state => state.background.backgroundImage);
    
    console.log(backgroundImage);

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

    // useEffect(() => {
    //   dispatch(getBackgroundImage());
    // }, []);

    
    
    return (
      <div style={{backgroundImage: backgroundImage ? `url(${backgroundImage.urls.full})` : ""}} className="main-app">
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
