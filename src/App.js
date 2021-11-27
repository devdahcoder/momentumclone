import React, {useContext, useEffect, useState} from "react";
import "./App.css";

// imported components
import Overlay from "./PageOverlay/PageOverlay"
import TimeGreet from "./momentumComponents/TimeGreet/TimeGreet";
import TodoInput from "./momentumComponents/TodoInput/TodoInput";
import DateWeather from "./momentumComponents/DateWeather/DateWeather";
import Footer from "./momentumComponents/Footer/Footer";

// imported utils
import TodoContextProvider from "./context/TodoContext";
import TimeContextProvider from "./context/TimeContext";
import QuoteContextProvider from "./context/QuoteContext";
import {BackgroundImageContext} from "./context/BackgroundImageContext";
import BackgroundImageContextProvider from "./context/BackgroundImageContext";

function App() {

    const { backgroundImage, backgroundIsLoading } = useContext(BackgroundImageContext);

    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {

      setIsLoading(false);

    }, [])

    console.log(isLoading);

    return (
      <div data-testid="main-app">
      
        <BackgroundImageContextProvider>

          <Overlay />

        </BackgroundImageContextProvider>

        <div className="main-app">

          <div className="backgrounds">

            <div className="background">

              <div data-test="background-item" className="background-item" style={{backgroundImage: backgroundImage ? `url(${backgroundImage?.urls?.full})` : ""}}></div>

            </div>

            <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/download.png'})` }} className="background-overlay"></div>

          </div>
          
          <div className={`show-app ${backgroundIsLoading ? "show-app-component" : ""}`}>

            <div className="region full"></div>

            <DateWeather />

            <div className="center-above"></div>

            <TimeContextProvider>

              <TimeGreet />

            </TimeContextProvider>

            <TodoContextProvider>

              <TodoInput />

            </TodoContextProvider>

            <QuoteContextProvider>

              <Footer />

            </QuoteContextProvider>
            
          </div>

          {/* <div className="overlay drop-overlay">
            <p>Drop to upload backgrounds <span className="badge badge-plus">PLUS</span></p>
          </div> */}
        </div>
      
      </div>

    );

}

export default App;
