import React, {useEffect, useState} from 'react';
import "./date.css"


//imported packages
import moment from "moment"


const Date = () => {
    const [day, setDay] = useState();
    const [date, setDate] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
        const currentDateTime = moment();

        setDay(currentDateTime.format("dddd"));
        setDate(currentDateTime.format("MMMM Do YYYY"))
        
    }, 1000);
        return () => clearInterval(interval)
    }, [])


    
    return (
        // <div className="region date-top-left">
        //     {/* <Moment format='MMMM Do YYYY'>{currentDateTime}</Moment>
        //     <Moment format="dddd">{currentDateTime}</Moment> */}
        //     {date}
            
        //     <div id="quicklinks" className="header-date-container quicklinks links" data-test="undefined" style={{}}>
        //         <span className="app-dash toggle Links-toggle" data-test="links-app-dash" data-ob="links-app-dash">{day}</span>
        //         <div class="app-wrapper app-placeholder nipple nipple-top-left">
        //             <div class="app links-app" style={{height:"70px", width:"260px"}}>
        //                 <div class="app-placeholder-loading">
        //                     <i class="loading-icon"></i>Loading...
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div id="dashlinks" class="dashlinks"></div>
        // </div>
        <div className="date-top-left">
            <div className="app-container weather show show-fade-in" data-test="weather">
                <div className="app-dash date-metric-item" title={date} data-test="app-dash">
                    <div className="date-metric-stat">
                        <div>
                            <span className="unit hide">{date}</span>
                        </div>
                    </div>
                    
                    <div className="location metric-label data" data-test="location" title={day}>
                        <span className="metric-label-name">{day}</span>
                    </div>
                    <span className="metric-message"></span>
                </div>
            </div>
        </div>
    )
}

export default Date