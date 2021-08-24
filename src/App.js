import React, {useEffect} from "react";
import "./App.css";
import Overlay from "./PageOverlay/PageOverlay"
import TimeGreet from "./momentumComponents/TimeGreet/TimeGreet";
import TodoInput from "./momentumComponents/TodoInput/TodoInput";
import DateWeather from "./momentumComponents/DateWeather/DateWeather"
import Footer from "./momentumComponents/Footer/Footer";
import {getUserLocation} from "./Actions/locationAction";
import {useDispatch, useSelector} from "react-redux";
// import store from "store"
import TodoContextProvider from "./context/TodoContext"
import TimeContextProvider from "./context/TimeContext";


function App() {

    const dispatch = useDispatch();
    const backgroundImage = useSelector(state => state.background.backgroundImage);

    useEffect(() => {
      dispatch(getUserLocation());
    }, []);

    
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

            <DateWeather />

            <div className="center-above"></div>


            <TimeContextProvider>
              <TimeGreet />
            </TimeContextProvider>
            
            

            <TodoContextProvider>
              <TodoInput />
            </TodoContextProvider>

            

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
