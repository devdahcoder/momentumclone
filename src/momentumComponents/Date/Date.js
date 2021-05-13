import React from 'react';
import "./Date.css"


const Date = () => {
    return (
        <div className="region date-top-left">
            <div id="quicklinks" className="header-date-container quicklinks links" data-test="undefined" style={{}}>
                <span className="app-dash toggle Links-toggle" data-test="links-app-dash" data-ob="links-app-dash">23, 4, 2020</span>
                {/* <div class="app-wrapper app-placeholder nipple nipple-top-left">
                    <div class="app links-app" style={{height:"70px", width:"260px"}}>
                        <div class="app-placeholder-loading">
                            <i class="loading-icon"></i>Loading...
                        </div>
                    </div>
                </div> */}
            </div>
            <div id="dashlinks" class="dashlinks"></div>
        </div>
    )
}

export default Date