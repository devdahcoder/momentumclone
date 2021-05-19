import React from "react";
import "./time.css";

//imported components
import TimeFormatSwitch from "../TimeFormatSwitch/TimeFormatSwitch";
import TwentyFourHours from "../TwentyFourHours/TwentyFourHours";
import TwelveHours from "../TwelveHours/TwelveHours";

//imported utils
import {useSelector, useDispatch} from "react-redux";
import {timeDisplay24Hours, timeHide24Hours} from "../../Actions/timeAction";
import {timeDisplayDropDown, timeHideDropDown} from "../../Actions/timeDropDownAction"

const Time = ({getHour, getMinute, getTwentyFourHour}) => {


  const time24HoursDisplay = useSelector(state => state.time.display24Hours);
  const timeDropDownDisplay =  useSelector(state => state.timeDropDown.timeDropDown);

  const dispatch = useDispatch();


  //display 24hours function that dispatch redux action//
  const display24HoursTime = () => {
    if (time24HoursDisplay) {
      dispatch(timeHide24Hours())
    } else {
      dispatch(timeDisplay24Hours())
    }
  }


  const displayDropDown = () => {
    if (timeDropDownDisplay) {
      dispatch(timeHideDropDown())
    } else {
      dispatch(timeDisplayDropDown())
    }
  }

  const handleBlur = () => {
    dispatch(timeHideDropDown())
  }

  return (
    <div className="time-section-container">
      <div className="time-section-wrapper">
        <div className="time-section-display">

        <div className="side-col left">
          <div className="more more-dash">
            <div className="icon-wrapper dash-icon-wrapper more-toggle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.7 490.7"><path d="M245.3 0C110.1 0 0 110.1 0 245.3s110.1 245.3 245.3 245.3 245.3-110.1 245.3-245.3S380.6 0 245.3 0zM245.3 469.3c-123.5 0-224-100.5-224-224s100.5-224 224-224 224 100.5 224 224S368.9 469.3 245.3 469.3z"/><path d="M348.9 333.8L256 240.9V74.7C256 68.8 251.2 64 245.3 64s-10.7 4.8-10.7 10.7v170.7c0 2.8 1.1 5.5 3.1 7.6l96 96c2.1 2.1 4.8 3.1 7.6 3.1 2.7 0 5.5-1 7.6-3.1C353 344.7 353 338 348.9 333.8z"/></svg>
            </div>


            <nav data-v-018521fc="" className="nav align-left">
              <div data-v-018521fc="" data-test="clock-opt" className="nav-item active">
                <svg data-v-018521fc="" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="icon icon-clock">
                  <path d="M346 366a19.94 19.94 0 01-14.14-5.86l-90-90a20 20 0 01-5.86-14.06l-.67-156.33a20 20 0 0119.91-20.09h.09a20 20 0 0120 19.91l.63 148.1 84.18 84.18A20 20 0 01346 366z"></path>
                  <path d="M256 512A256 256 0 0175 75a256 256 0 01362 362 254.33 254.33 0 01-181 75zm0-472a216 216 0 00-152.74 368.74 216 216 0 00305.48-305.48A214.59 214.59 0 00256 40z"></path>
                </svg>
                <span data-v-018521fc="" className="tooltip">Clock</span>
              </div>
              <div data-v-018521fc="" data-test="percent-opt" className="nav-item">
                <svg data-v-018521fc="" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="icon icon-percent"><g>
                  <path d="M256,512A256,256,0,0,1,75,75,256,256,0,0,1,437,437,254.33,254.33,0,0,1,256,512Zm0-472A216,216,0,0,0,103.26,408.74,216,216,0,0,0,408.74,103.26,214.62,214.62,0,0,0,256,40Z"></path>
                  <path d="M192.22,239.42a50.23,50.23,0,1,1,50.23-50.23A50.28,50.28,0,0,1,192.22,239.42Zm0-70.41a20.19,20.19,0,1,0,20.19,20.18A20.21,20.21,0,0,0,192.22,169Z"></path><path d="M321.78,368A50.23,50.23,0,1,1,372,317.81,50.28,50.28,0,0,1,321.78,368Zm0-70.41A20.19,20.19,0,1,0,342,317.81,20.22,20.22,0,0,0,321.78,297.62Z"></path>
                  <path d="M164.38,363.28a16.9,16.9,0,0,1-11.95-28.84L333.51,153.36a16.9,16.9,0,1,1,23.89,23.9L176.33,358.33A16.86,16.86,0,0,1,164.38,363.28Z"></path></g>
                </svg> 
                <span data-v-018521fc="" className="tooltip">Percent Clock</span>
              </div>
            </nav>
          </div>
        </div>

        <div className="main-time-container">
          <div className="main-time-display">
            {time24HoursDisplay === true ? <TwentyFourHours getTwentyFourHour={getTwentyFourHour} getMinute={getMinute} /> : <TwelveHours getHour={getHour} getMinute={getMinute} />}
          </div>
        </div>

        <div className="side-col right">
          <div className="more more-dash">
            <div onBlur={() => handleBlur()} onClick={() => displayDropDown()} style={{opacity: timeDropDownDisplay ? "1" : ""}} className="icon-wrapper dash-icon-wrapper more-toggle">
              <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M432 0h-76c-44.1 0-80 35.9-80 80v76c0 44.1 35.9 80 80 80h76c44.1 0 80-35.9 80-80V80C512 35.9 476.1 0 432 0zM472 156c0 22.1-17.9 40-40 40h-76c-22.1 0-40-17.9-40-40V80c0-22.1 17.9-40 40-40h76c22.1 0 40 17.9 40 40V156z"/><path d="M156 0H80C35.9 0 0 35.9 0 80v76c0 44.1 35.9 80 80 80h76c44.1 0 80-35.9 80-80V80C236 35.9 200.1 0 156 0zM196 156c0 22.1-17.9 40-40 40H80c-22.1 0-40-17.9-40-40V80c0-22.1 17.9-40 40-40h76c22.1 0 40 17.9 40 40V156z"/><path d="M156 276H80c-44.1 0-80 35.9-80 80v76c0 44.1 35.9 80 80 80h76c44.1 0 80-35.9 80-80v-76C236 311.9 200.1 276 156 276zM196 432c0 22.1-17.9 40-40 40H80c-22.1 0-40-17.9-40-40v-76c0-22.1 17.9-40 40-40h76c22.1 0 40 17.9 40 40V432z"/><path d="M492 412c-11 0-20 9-20 20 0 22.1-17.9 40-40 40h-76c-22.1 0-40-17.9-40-40v-76c0-22.1 17.9-40 40-40h76c15.9 0 30.3 9.4 36.7 24 4.4 10.1 16.2 14.7 26.3 10.3 10.1-4.4 14.7-16.2 10.3-26.3C492.6 294.8 463.8 276 432 276h-76c-44.1 0-80 35.9-80 80v76c0 44.1 35.9 80 80 80h76c44.1 0 80-35.9 80-80C512 421 503 412 492 412z"/></svg>
            </div>

            <div style={{display: timeDropDownDisplay ? "block" : "none"}} className="dropdown-container more-dropdown dash-dropdown nipple nipple-top-left ">
              <ul className="time-ul dropdown-list">
                <li onClick={() => display24HoursTime()} className="time-li has-toggle">
                  <span className="dropdown-list-label">24-hour clock</span>
                  <span className="toggle-slider">
                    <TimeFormatSwitch />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Time;
