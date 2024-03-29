import React, {useContext} from "react";
import "./timedropdownselect.css"

//imported utils
import {TimeContext} from "../../context/TimeContext"

const TimeDropDownSelect = () => {

    const {
        toggleOtherTimeDropDown
    } = useContext(TimeContext);

    return (
        
        <nav data-testid="time-drop-down-select" style={{visibility: toggleOtherTimeDropDown ? "visible" : "hidden"}} className="nav align-left">

            <div data-v-018521fc="" data-test="clock-opt" className="nav-item active">

                <svg data-v-018521fc="" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="icon icon-clock">

                    <path d="M346 366a19.94 19.94 0 01-14.14-5.86l-90-90a20 20 0 01-5.86-14.06l-.67-156.33a20 20 0 0119.91-20.09h.09a20 20 0 0120 19.91l.63 148.1 84.18 84.18A20 20 0 01346 366z"></path>

                    <path d="M256 512A256 256 0 0175 75a256 256 0 01362 362 254.33 254.33 0 01-181 75zm0-472a216 216 0 00-152.74 368.74 216 216 0 00305.48-305.48A214.59 214.59 0 00256 40z"></path>
                
                </svg>

                <span data-v-018521fc="" className="tooltip">Clock</span>

            </div>

            <div data-v-018521fc="" data-test="pomodoro-opt" className="nav-item">

                <svg data-v-018521fc="" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="icon icon-pomodoro">
                    
                    <path d="M427.252 93.939c-42.503-26.268-97.046-35.291-143.541-25.641l.01-.021C293.236 49.25 309.9 40 334.667 40c11.046 0 20-8.954 20-20s-8.954-20-20-20C303.084 0 274.696 11.109 256 	37.029 237.305 11.111 208.918 0 177.333 0c-11.046 0-20 8.954-20 20s8.954 20 20 20c24.333 0 40.828 8.919 50.428 27.267.18.343.351.687.523 1.031C126.652 47.206 0 110.518 0 255.958 0 394.862 96.599 512 256 512c159.009 0 256-116.731 256-256.042 0-70.703-30.098-128.243-84.748-162.019zm-180.196 22.616a20.07 20.07 0 0 0 17.889 0c68.531-34.269 218.655-.395 206.296 158.778h-96.574V256c0-11.046-8.954-20-20-20s-20 8.954-20 20v19.333H276v-58.667c0-11.046-8.954-20-20-20s-20 8.954-20 20v58.667h-58.667V256c0-11.046-8.954-20-20-20s-20 8.954-20 20v19.333H40.76C28.521 117.712 177.219 81.638 247.056 116.555zM256 472c-111.908 0-185.684-65.315-208.727-156.667h417.453C441.728 406.508 368.115 472 256 472zm33.809-92.476c7.811 7.811 7.811 20.474 0 28.284-7.811 7.811-20.474 7.81-28.284 0L256 402.284l-5.524 5.524c-7.811 7.811-20.474 7.811-28.284 0s-7.811-20.474 0-28.284l19.667-19.667c7.811-7.811 20.474-7.811 28.284 0z"></path>
                
                </svg>

                <span data-v-018521fc="" className="tooltip">Pomodoro</span>
            
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

    )
}

export default TimeDropDownSelect
