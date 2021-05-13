import React, {useState, useEffect} from "react";
import "./App.css";
import TimeGreet from "./momentumComponents/TimeGreet/TimeGreet";
// import Weather from "./momentumComponents/weather";
import TodoInput from "./momentumComponents/TodoInput/TodoInput";
// import TodoList from "./momentumComponents/TodoList/TodoList"
// import Input from "./momentumComponents/Input/Input";
import DateWeather from "./momentumComponents/DateWeather/DateWeather"
import Footer from "./momentumComponents/Footer/Footer";


// //imported packages
// import { v4 as uuid } from "uuid";

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



    // const API_KEY = process.env.REACT_APP_API_KEY
    const API_KEY = "P0BEZ1EdgkfLR5R4chm5ChWLQyJMkHtJ";
    // const API_KEY = "ab726d7c7530e07f9e68e4756723249d";
    

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
    const getUserCity = async (id) => {
      let url = `http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${API_KEY}`

      const response = await fetch(url);
      const data = await response.json();
      console.log(data[0]);

      // let WeatherUi = data[0];

      // let {WeatherIcon} = WeatherUi;

      setIcon(data[0].WeatherIcon);
    }

    // useEffect(() => {
    //   getUserCity(id);
    // }, [id]);


    //get user location and give weather update
    const getUserLocation = () => {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            let url = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${latitude}%2C${longitude}&language=en-us&details=true&toplevel=true`;

            const response = await fetch(url);
            const data = await response.json();
            setId(data.Key)
            console.log(data);
            getUserCity(data.Key)
          },
          () => {
            console.log("your browser does not support it");
          }
        );
        
    }

    useEffect(() => {
      getUserLocation();
    }, []);


    // //get user location and give weather update
    // const getUserCity = async (id) => {
    //   let url = `http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${API_KEY}`

    //   const response = await fetch(url);
    //   const data = await response.json();
    //   console.log(data[0]);

    //   // let WeatherUi = data[0];

    //   // let {WeatherIcon} = WeatherUi;

    //   // setIcon(data[0].WeatherIcon)


    // }

    // useEffect(() => {
    //   getUserCity(id);
    // }, [id]);




    // const getUserLocation = () => {
    //     navigator.geolocation.getCurrentPosition(
    //       (position) => {
    //         const { latitude, longitude } = position.coords;

    //         let url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

    //         fetch(url)
    //           .then((response) => response.json())
    //           .then((data) => {
    //             console.log(data);
    //             const { name, clouds, sys, weather } = data;
    //             setIcon(
    //               `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
    //             );
    //             setLocation(`${name}, ${sys.country}`);
    //             setLocationTemperature(`${clouds.all}`);
    //           })
    //           .catch((error) => {
    //             console.log("Something went wrong", error);
    //           });
    //       },
    //       () => {
    //         console.log("your browser does not support it");
    //       }
    //     );
        
    // }

    // useEffect(() => {
    //   getUserLocation();
    // }, []);



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



    //tell what time of the day if it is morning afternoon or evening
    const greetings = () => {
      let todayGreeting = new Date();

      let hour = todayGreeting.getHours();

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
        {/* <Weather
          icon={icon}
          location={location}
          locationTemperature={locationTemperature}
        /> */}

        <DateWeather icon={icon} />

        <TimeGreet 
          //time props
          getAmPm={getAmPm} 
          getMinute={getMinute} 
          getHour={getHour} 
          getTwentyFourHour={getTwentyFourHour}
          //greeting props
          greeting={greeting}
          nameCondition={nameCondition}
          // handleNameValue={handleNameValue}
          name={name}
          handleBlur={handleBlur}
          handleDoubleClick={handleDoubleClick}
        />

        <TodoInput />


        <Footer />
      </div>
    );
}

export default App;







            // const { LocalizedName, key } = data;
            // setLocation(`${LocalizedName}`);
            // setId(key);

            // fetch(url)
            //   .then((response) => response.json())
            //   .then((data) => {
            //     console.log(data);
            //     const { LocalizedName, key } = data;
            //     setIcon(
            //       `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
            //     );
            //     setLocation(`${LocalizedName}`);
            //     setId(key);
            //     // setLocationTemperature(`${clouds.all}`);
            //   })
            //   .catch((error) => {
            //     console.log("Something went wrong", error);
            //   });