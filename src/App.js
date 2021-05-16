import React, {useState, useEffect} from "react";
import "./App.css";
import TimeGreet from "./momentumComponents/TimeGreet/TimeGreet";
import TodoInput from "./momentumComponents/TodoInput/TodoInput";
import DateWeather from "./momentumComponents/DateWeather/DateWeather"
import Footer from "./momentumComponents/Footer/Footer";
import {getUserLocation} from "./Actions/locationAction";
import {useDispatch} from "react-redux";

function App() {

    const [icon, setIcon] = useState('');
    const [location, setLocation] = useState('');
    const [locationTemperature, setLocationTemperature] = useState('');
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
    const [inputValue, setInputValue] = useState("");
    const [id, setId] = useState("");


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



    //get user location and give weather update
    // const getUserCity = async (id) => {
    //   let url = `http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${API_KEY}`
    //   const imageUrl = "https://developer.accuweather.com/sites/default/files/";

    //   const response = await fetch(url);
    //   const data = await response.json();

    //   let weatherIcon = data[0].WeatherIcon <= 9 ? "0" + data[0].WeatherIcon : data[0].WeatherIcon;

    //   setIcon(imageUrl + weatherIcon + "-s.png");
    // }



    // //get user location and give weather update
    // const getUserLocation = () => {
    //     navigator.geolocation.getCurrentPosition(
    //       async (position) => {
    //         const { latitude, longitude } = position.coords;

    //         let url = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${latitude}%2C${longitude}&language=en-us&details=true&toplevel=true`;

    //         const response = await fetch(url);
    //         const data = await response.json();
    //         setId(data.Key)
    //         getUserCity(data.Key)
    //       },
    //       () => {
    //         console.log("your browser does not support it");
    //       }
    //     );
        
    // }

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


    // const handleNameValue = (e) => {
    //   setNameValue(String.fromCharCode(e.keyCode));
    //   console.log(String.fromCharCode(e.keyCode));
    // }




    // set editable content (name) to false onBlur
    const handleBlur = () => {
      setNameCondition("false");
    }



    
    // set editable content (name) to true onDoubleClick
    const handleDoubleClick = () => {
      setNameCondition("true");
    }

    
    // main return area
    return (
      <div className="main-app">
        <DateWeather icon={icon} />

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
