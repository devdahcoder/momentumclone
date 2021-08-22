import React, {useState, useEffect} from "react";
import "./App.css";
import Overlay from "./PageOverlay/PageOverlay"
import TimeGreet from "./momentumComponents/TimeGreet/TimeGreet";
import TodoInput from "./momentumComponents/TodoInput/TodoInput";
import DateWeather from "./momentumComponents/DateWeather/DateWeather"
import Footer from "./momentumComponents/Footer/Footer";
import {getUserLocation} from "./Actions/locationAction";
import {useDispatch, useSelector} from "react-redux";
import store from "store"



function App() {
    const [getAmPm, setAmPm] = useState("");
    const [getHour, setHour] = useState("");
    const [getTwentyFourHour, setTwentyFourHour] = useState("");
    const [getMinute, setMinute] = useState("");
    const [todoList, setTodoList] = useState([]);
    const dispatch = useDispatch();
    const backgroundImage = useSelector(state => state.background.backgroundImage);

    useEffect(() => {
      const getTodo = store.get("todo");
      if (getTodo) {
          // dispatch(addTodo(todos));
          setTodoList(getTodo);
          console.log(getTodo);
      }

      // setTodos(store.get("todo"));
      // console.log(store.get("todo"));
    }, [])

    // useEffect(() => {
    //   dispatch(getUserLocation());
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

    
    return (
      <>
        <Overlay />
        <div className="main-app">
          <div data-v-684a4388="" className="backgrounds">
            <div data-v-684a4388="" className="background">
              <div data-v-684a4388="" data-test="background-item" className="background-item" style={{backgroundImage: backgroundImage ? `url(${backgroundImage.urls.full})` : ""}}></div>
            </div>
            <div data-v-684a4388="" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/download.png'})` }} className="background-overlay"></div>
          </div>
          
          <div className="show-app">

            <div className="region full"></div>

            {/* <DateWeather /> */}

            <div className="center-above"></div>


            <TimeGreet 
              getAmPm={getAmPm} 
              getMinute={getMinute} 
              getHour={getHour} 
              getTwentyFourHour={getTwentyFourHour}

            />
            

            <TodoInput todoList={todoList} />

            <Footer />
          </div>

          {/* <div className="overlay drop-overlay">
            <p>Drop to upload backgrounds <span className="badge badge-plus">PLUS</span></p>
          </div> */}
        </div>
      
      </>
    );
}

export default App;
