import React, {useState, useEffect} from "react";
import "./App.css"
import Weather from "./momentumComponents/weather";
import Time from "./momentumComponents/time";
import Greeting from "./momentumComponents/greeting";
import TodoList from "./momentumComponents/TodoList";
import Input from "./momentumComponents/Input";
import { v4 as uuid } from "uuid";

function App() {

    
    const [icon, setIcon] = useState('');
    const [location, setLocation] = useState('');
    const [locationTemperature, setLocationTemperature] = useState('');
    const [getAmPm, setAmPm] = useState("");
    const [getHour, setHour] = useState("");
    const [getMinute, setMinute] = useState("");
    const [greeting, setGreeting] = useState("");
    const [name, setName] = useState("Dele");

    // please contribute if you have an idea how to get value 
    // of an editable content and YES i tried using String.fromCharCode

    // const [nameValue, setNameValue] = useState("");
    const [nameCondition, setNameCondition] = useState(true); 
    const [todo, setTodo] = useState([]);
    const [inputValue, setInputValue] = useState("");






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




    // get user location and give weather update

    const getUserLocation = () => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;

            let url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=your API_KEY goes here`;

            fetch(url)
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                const { name, clouds, sys, weather } = data;
                setIcon(
                  `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
                );
                setLocation(`${name}, ${sys.country}`);
                setLocationTemperature(`${clouds.all}`);
              })
              .catch(() => {
                console.log("Something went wrong");
              });
          },
          () => {
            console.log("your browser does not support it");
          }
        );
        
    }

    useEffect(() => {
      getUserLocation();
    }, []);





    //give user time 
    useEffect(() => {
      const interval = setInterval(() => {
        const getDay = new Date();

        const getHour = getDay.getHours();
        const getMinute = getDay.getMinutes();

        const amPm = getHour >= 12 ? "PM" : "AM";
        setAmPm(amPm);

        const hour = getHour % 12 || 12;
        setHour(hour);

        setMinute(getMinute);
      }, 1000);
      return () => clearInterval(interval)
    }, [])








    // tell what time of the day if it is morning afternoon or evening
    const greetings = () => {
      let todayGreeting = new Date();

      let hour = todayGreeting.getHours();

      if (hour < 12) {
        setGreeting("Good morning,");
      } else if (hour < 15) {
        setGreeting("Good afternoon,");
      } else {
        setGreeting("Good evening,");
      }
    };
    
    useEffect(() => {
      greetings();
    }, [])




    //handle todo input
    const handleTodoInput = (e) => {
      setInputValue(e.target.value);
    }




    // handle submit for todo
    const handleTodoSubmit = (e) => {
      e.preventDefault();
      if (inputValue !== "") {
        const newTodo = {id: uuid(), value: inputValue, completed: false};
        setTodo([newTodo, ...todo]);
      } else {
        alert("cant happen")
      }

      setInputValue("");
      
    }




    // handle deleting todo
    const handleDeleteTodo = (id) => {
      const newTodo = todo.filter((todo) => id !== todo.id);
      setTodo(newTodo)
    }




    // handle condition if todo is checked
    const markTodo = (id) => {
      setTodo(
        todo.map((items) => {
          if (items.id === id) {
            return {
              ...items, completed: !items.completed
            }
          }
          return items;
        })
      );
    }


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
      <div>
        <Weather
          icon={icon}
          location={location}
          locationTemperature={locationTemperature}
        />

        <Time 
          getAmPm={getAmPm} 
          getMinute={getMinute} 
          getHour={getHour} 
        />

        <Input
          inputValue={inputValue}
          handleTodoInput={handleTodoInput}
          handleTodoSubmit={handleTodoSubmit}
          todo={todo}
        />

        <Greeting
          greeting={greeting}
          nameCondition={nameCondition}
          // handleNameValue={handleNameValue}
          name={name}
          handleBlur={handleBlur}
          handleDoubleClick={handleDoubleClick}
        />

        <TodoList
          todo={todo}
          inputValue={inputValue}
          handleTodoInput={handleTodoInput}
          handleTodoSubmit={handleTodoSubmit}
          handleDeleteTodo={handleDeleteTodo}
          markTodo={markTodo}
        />
      </div>
    );
}

export default App;


