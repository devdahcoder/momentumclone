import React, {useState} from "react";
import "./time.css";

//imported components
import TimeFormatSwitch from "../TimeFormatSwitch/TimeFormatSwitch";

const Time = ({getHour, getMinute, getTwentyFourHour}) => {

  const [dropdown, setDropDown] = useState("false");

  const displayDropDown = () => {
    setDropDown("true");
  }

  const hideDropDown = () => {
    setDropDown("false");
  }

  return (
    <div className="time-section-container">
      <div className="time-section-wrapper">
        <div className="time-section-display">

        <div className="side-col left">
          <div className="more more-dash">
            <div className="icon-wrapper dash-icon-wrapper more-toggle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
                <path d="M472 432h-24V280c0-4.4-3.6-8-8-8 -2.6 0-5 1.3-6.5 3.4l-112 160c-2.5 3.6-1.6 8.6 2 11.1 1.3 0.9 2.9 1.4 4.6 1.4h104v24c0 4.4 3.6 8 8 8s8-3.6 8-8v-24h24c4.4 0 8-3.6 8-8S476.4 432 472 432zM432 432h-88.6L432 305.4V432z"/><path d="M328 464h-94.7l88.1-103.7c0.2-0.2 0.4-0.5 0.6-0.7 16.6-24.5 11-57.7-12.6-75.6 -28.7-20.6-68.7-14.1-89.3 14.6C212.2 309.5 208 322.6 208 336c0 4.4 3.6 8 8 8s8-3.6 8-8c0-26.5 21.5-48 48-48 10 0 19.8 3.2 28 9 16.5 12.7 20.4 36 8.8 53.3l-98.9 116.5c-2.9 3.4-2.4 8.4 0.9 11.3 1.4 1.2 3.3 1.9 5.2 1.9h112c4.4 0 8-3.6 8-8S332.4 464 328 464z"/><path d="M216.2 424.2c0.2-4.4-3.3-8.1-7.7-8.3 0 0 0 0 0 0C104.1 412 20.3 328.4 16.3 224H48c4.4 0 8-3.6 8-8s-3.6-8-8-8H16.3C20.3 103.8 103.8 20.3 208 16.3V40c0 4.4 3.6 8 8 8s8-3.6 8-8V16.3c102.8 4 185.7 85.3 191.6 188l-31.2-31.2c-3.2-3.1-8.2-3-11.3 0.2 -3 3.1-3 8 0 11.1l44.7 44.7c0.8 1 1.9 1.8 3.2 2.3 0.3 0.1 0.6 0.2 1 0.2 0.5 0.2 1.1 0.3 1.7 0.4 0.1 0 0.2 0 0.2 0 0.1 0 0.2 0 0.2 0 0.6 0 1.2-0.2 1.8-0.4 0.3 0 0.7-0.1 1-0.2 1.1-0.4 2.1-1 2.9-1.8l45.3-45.2c3.1-3.2 3-8.2-0.2-11.3 -3.1-3-8-3-11.1 0l-32 32C425.9 90.4 331.4 0.3 216.6 0.1 216.4 0.1 216.2 0 216 0s-0.4 0.1-0.6 0.1C96.6 0.3 0.3 96.6 0.1 215.4 0.1 215.6 0 215.8 0 216s0.1 0.4 0.1 0.6c0.2 115.9 91.9 211 207.8 215.3h0.3C212.5 431.8 216 428.4 216.2 424.2z"/><path d="M323.5 108.5c-3.1-3.1-8.2-3.1-11.3 0L226.2 194.5c-6.5-2.9-13.9-2.9-20.4 0l-40.7-40.7c-3.2-3.1-8.2-3-11.3 0.2 -3 3.1-3 8 0 11.1l40.6 40.6c-5.7 11.9-0.6 26.2 11.3 31.9 9.2 4.4 20.1 2.5 27.3-4.7 7.2-7.2 9.1-18.1 4.6-27.3l85.9-85.9C326.6 116.7 326.6 111.6 323.5 108.5zM221.7 221.7c0 0 0 0 0 0 -3.2 3-8.1 3-11.3 0 -3.1-3.1-3.1-8.2 0-11.3 3.1-3.1 8.2-3.1 11.3 0C224.8 213.5 224.8 218.5 221.7 221.7z"/>
              </svg>
            </div>


            <nav data-v-018521fc="" className="nav align-left">
              <div data-v-018521fc="" data-test="clock-opt" className="nav-item active">
                <svg data-v-018521fc="" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="icon icon-clock">
                  <path d="M346 366a19.94 19.94 0 01-14.14-5.86l-90-90a20 20 0 01-5.86-14.06l-.67-156.33a20 20 0 0119.91-20.09h.09a20 20 0 0120 19.91l.63 148.1 84.18 84.18A20 20 0 01346 366z"></path>
                  <path d="M256 512A256 256 0 0175 75a256 256 0 01362 362 254.33 254.33 0 01-181 75zm0-472a216 216 0 00-152.74 368.74 216 216 0 00305.48-305.48A214.59 214.59 0 00256 40z"></path>
                </svg>
                <span data-v-018521fc="" className="tooltip">Clock</span>
              </div>
              {/* <div data-v-018521fc="" data-test="pomodoro-opt" className="nav-item">
                <svg data-v-018521fc="" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="icon icon-pomodoro">
                  <path d="M427.252 93.939c-42.503-26.268-97.046-35.291-143.541-25.641l.01-.021C293.236 49.25 309.9 40 334.667 40c11.046 0 20-8.954 20-20s-8.954-20-20-20C303.084 0 274.696 11.109 256 	37.029 237.305 11.111 208.918 0 177.333 0c-11.046 0-20 8.954-20 20s8.954 20 20 20c24.333 0 40.828 8.919 50.428 27.267.18.343.351.687.523 1.031C126.652 47.206 0 110.518 0 255.958 0 394.862 96.599 512 256 512c159.009 0 256-116.731 256-256.042 0-70.703-30.098-128.243-84.748-162.019zm-180.196 22.616a20.07 20.07 0 0 0 17.889 0c68.531-34.269 218.655-.395 206.296 158.778h-96.574V256c0-11.046-8.954-20-20-20s-20 8.954-20 20v19.333H276v-58.667c0-11.046-8.954-20-20-20s-20 8.954-20 20v58.667h-58.667V256c0-11.046-8.954-20-20-20s-20 8.954-20 20v19.333H40.76C28.521 117.712 177.219 81.638 247.056 116.555zM256 472c-111.908 0-185.684-65.315-208.727-156.667h417.453C441.728 406.508 368.115 472 256 472zm33.809-92.476c7.811 7.811 7.811 20.474 0 28.284-7.811 7.811-20.474 7.81-28.284 0L256 402.284l-5.524 5.524c-7.811 7.811-20.474 7.811-28.284 0s-7.811-20.474 0-28.284l19.667-19.667c7.811-7.811 20.474-7.811 28.284 0z"></path>
                </svg>
                <span data-v-018521fc="" className="tooltip">Pomodoro <span data-v-018521fc="" className="badge badge-plus">Plus</span></span>
              </div> */}
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
            {getTwentyFourHour}:{getMinute}
          </div>
        </div>

        <div className="side-col right">
          <div className="more more-dash">
            <div onBlur={hideDropDown} onClick={displayDropDown} className="icon-wrapper dash-icon-wrapper more-toggle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 385 385"><path d="M12 120.3h360.9c6.6 0 12-5.4 12-12 0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12C0 114.9 5.4 120.3 12 120.3z"/><path d="M372.9 180.5H12c-6.6 0-12 5.4-12 12s5.4 12 12 12h360.9c6.6 0 12-5.4 12-12S379.6 180.5 372.9 180.5z"/><path d="M372.9 264.7H132.3c-6.6 0-12 5.4-12 12 0 6.6 5.4 12 12 12h240.6c6.6 0 12-5.4 12-12C385 270.1 379.6 264.7 372.9 264.7z"/></svg>
            </div>



            <div style={{display: dropdown === "true" ? "block" : "none"}} className="dropdown-container more-dropdown dash-dropdown nipple nipple-top-left ">
              <ul className="time-ul dropdown-list">
                <li className="time-li has-toggle">
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
