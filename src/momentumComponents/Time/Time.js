import React, {useContext} from "react";
import "./time.css";
import "../../style/global.css";

//imported components
import TwentyFourHours from "../TwentyFourHours/TwentyFourHours";
import TwelveHours from "../TwelveHours/TwelveHours";
import TimeDropdownSelect from "../TimeDropdownSelect/TimeDropdownSelect"
import TimeSwitchDropdown from "../TimeSwitchDropdown/TimeSwitchDropdown"

//imported utils
import {TimeContext} from "../../context/TimeContext"

const Time = () => {

  const {
    time, 
    toggleDisplayDigitalTimeDropDown,
    toggle24DigitalTime,
    toggleDisplayOtherTimeDropDown,
    toggleDigitalTimeDropDown,
    toggleOtherTimeDropDown,
  } = useContext(TimeContext);
  const {getHour, getMinute, getTwentyFourHour} = time;

  return (
    <div className="time-section-container">

      <div className="time-section-wrapper">

        <div className="time-section-display">

        <div className="side-col more-time-left">

          <div className="more more-time-container" onClick={toggleDisplayOtherTimeDropDown}>

            <div  className="icon-wrapper more-dash-icon-wrapper more-toggle">

              <svg data-v-018521fc="" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"  className="active-mode more-dash-icon time-icon" style={{opacity: toggleOtherTimeDropDown ? "1" : ""}}>
                
                <path d="M346 366a19.94 19.94 0 01-14.14-5.86l-90-90a20 20 0 01-5.86-14.06l-.67-156.33a20 20 0 0119.91-20.09h.09a20 20 0 0120 19.91l.63 148.1 84.18 84.18A20 20 0 01346 366z"></path>
                
                <path d="M256 512A256 256 0 0175 75a256 256 0 01362 362 254.33 254.33 0 01-181 75zm0-472a216 216 0 00-152.74 368.74 216 216 0 00305.48-305.48A214.59 214.59 0 00256 40z"></path>
              
              </svg>

            </div>

            <TimeDropdownSelect />

          </div>

        </div>

        <div className="main-time-container">

          <span className="main-time-display">

            {toggle24DigitalTime === true ? <TwentyFourHours getTwentyFourHour={getTwentyFourHour} getMinute={getMinute} /> : <TwelveHours getHour={getHour} getMinute={getMinute} />}
          
          </span>

        </div>

        <div className="side-col time-right">

          <div className="more more-dash" style={{position: "relative"}}>

            <div onClick={toggleDisplayDigitalTimeDropDown}  className="icon-wrapper dash-icon-wrapper more-toggle">
              
              <svg data-v-c8d4d4da="" style={{opacity: toggleDigitalTimeDropDown ? "1" : ""}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" className="more-icon time-icon"><path data-v-c8d4d4da="" d="M8 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM52 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"></path></svg>
            
            </div>

            <TimeSwitchDropdown />
            
          </div>

        </div>

      </div>
      
        <div dir="ltr" className="time-resize-sensor" >

          <div className="resize-sensor-expand" >

            <div className="inner-time-sensor"></div>

          </div>

          <div className="resize-sensor-shrink" >

            <div className="time-resize-shrink"></div>

          </div>
          
        </div>

      </div>

    </div>
    
  );
}

export default Time;
