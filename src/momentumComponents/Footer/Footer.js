import React from 'react'
import "./footer.css"


const Footer = () => {
    return (
        <footer>
            <div className="region footer-left-container" id="bottom-left">
                <div id="settings" className="app-container settings-icon-container" data-test="settings" data-justboundclickoutsidehandler="false" data-clickoutsidemouseuphandlerid="a7ezab" data-clickoutsidemousedownhandlerid="z7qp9f">
                    <div className="app-wrapper nipple nipple-bottom-left">
                        <div className="app settings-app" data-test="settings-app">
                            {/* <ul id="nav-menu" className="settings-nav" data-test="nav-menu">
                                <li data-navitem="general" className="main-nav-item active" data-test="nav-menu-general">General</li>
                                <li data-navitem="todo" className="main-nav-item" data-test="nav-menu-todo">Todo</li>
                                <li data-navitem="mantra-settings" className="main-nav-item" data-test="nav-menu-mantra-settings">Mantras</li>
                                <li data-navitem="background-settings" className="main-nav-item" data-test="nav-menu-background-settings">Photos</li>
                                <li data-navitem="quote-settings" className="main-nav-item" data-test="nav-menu-quote-settings">Quotes</li>
                                <li data-navitem="bookmark-settings" className="main-nav-item" data-test="nav-menu-bookmark-settings">Links &amp; Bookmarks</li>
                                <li data-navitem="balance" className="main-nav-item" data-test="nav-menu-balance">Balance</li>
                                <li data-navitem="help" className="main-nav-item secondary secondary-first" data-test="nav-menu-help">Help</li>
                                <li data-navitem="about" className="main-nav-item secondary" data-test="nav-menu-about">About</li>
                                <li data-navitem="upgrade" className="main-nav-item secondary" data-test="nav-menu-upgrade">Upgrade to Plus</li>


                                <div className="user u--no-transition">
                                    <div className="user-info" data-test="user-info" title="adigunolamide200@gmail.com">
                                        <div className="user-avatar-wrapper">
                                            <div className="user-avatar">
                                                <img src="https://www.gravatar.com/avatar/4c57e42ef42f5f1ba3dae5e9cbf3b7bb?s=50&amp;d=mm" alt="heart" />
                                            </div>
                                            <div className="user-avatar-hidden">
                                                <img className="avatar" src="https://www.gravatar.com/avatar/4c57e42ef42f5f1ba3dae5e9cbf3b7bb?s=50&amp;d=mm" alt="heart" />
                                            </div>
                                            <div className="user-badge-wrapper">
                                                <span className="badge badge-plus" data-test="plus">PLUS</span>
                                                <span className="badge badge-team" data-test="team">TEAM</span>
                                            </div>
                                        </div>
                                        <span className="name-wrapper">
                                            <span className="user-info-name">Olamide</span>
                                            <span className="anim-caret u--no-transition">
                                                <svg className="icon anim-caret-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.16 11.75"><path d="M52.16,26.08A5.87,5.87,0,0,1,46.29,32H5.88A5.88,5.88,0,0,1,0,26.08H0a5.87,5.87,0,0,1,5.88-5.87H46.29a5.87,5.87,0,0,1,5.87,5.87Z" transform="translate(0 -20.21)"></path></svg>
                                                <svg className="icon anim-caret-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.16 11.75"><path d="M52.16,26.08A5.87,5.87,0,0,1,46.29,32H5.88A5.88,5.88,0,0,1,0,26.08H0a5.87,5.87,0,0,1,5.88-5.87H46.29a5.87,5.87,0,0,1,5.87,5.87Z" transform="translate(0 -20.21)"></path></svg>
                                            </span>
                                        </span>
                                    </div>
                                        <div className="user-hidden">
                                            <ul className="user-nav">
                                                <li className="action action-profile">Profile</li>
                                                <li className="action action-logout">Log Out</li>
                                            </ul>
                                        <div className="user-close"></div>
                                    </div>
                                </div>

                            </ul> */}
                            {/* <div className="settings-view-container" data-test="settings-view-container">
                                <div id="settings-general" className="settings-view settings-general" data-test="settings-general">
                                    <header className="settings-header">
                                        <h3 data-test="general-header">General</h3>
                                        <p className="description">Customize your dashboard</p>
                                    </header>


                                    <h4>Show</h4>
                                    <ul id="apps-list" className="settings-list options-list">
                                        <li className="slide-toggle has-toggle on" data-related-widget="linksVisible" data-test="settings-general-links">
                                            <input type="checkbox" />
                                            <span className="setting-name">Links</span>
                                            
                                            
                                            <span className="toggle-slider">
                                                <svg className="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                            </span>
                                        
                                        
                                        </li>

                                        <li className="slide-toggle has-toggle" data-related-widget="bookmarksVisible" data-test="settings-general-bookmarks-bar">
                                            <input type="checkbox" />
                                            <span className="setting-name">Bookmarks Bar</span>
                                            
                                            
                                            <span className="toggle-slider">
                                                <svg className="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                            </span>
                                            
                                            
                                        </li>
                                        <li className="slide-toggle has-toggle" data-related-widget="mostVisited" data-test="settings-general-most-visited">
                                            <input type="checkbox" />
                                            <span className="setting-name">Top Sites</span>
                                            
                                            
                                            <span className="toggle-slider">
                                                <svg className="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                            </span>
                                            <span className="option-message">Show most visited websites by default in Bookmarks Bar</span>
                                            
                                        </li>
                                        <li className="slide-toggle has-toggle on" data-related-widget="searchVisible" data-test="settings-general-search">
                                            <input type="checkbox" />
                                            <span className="setting-name">Search</span>
                                            
                                            
                                            <span className="toggle-slider">
                                                <svg className="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                            </span>
                                            
                                            
                                        </li>
                                        <li className="slide-toggle has-toggle on" data-related-widget="weatherVisible" data-test="settings-general-weather">
                                            <input type="checkbox" />
                                            <span className="setting-name">Weather</span>
                                            
                                            
                                            <span className="toggle-slider">
                                                <svg className="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                            </span>
                                            
                                            
                                        </li>
                                        <li className="slide-toggle has-toggle on" data-related-widget="focusVisible" data-test="settings-general-focus">
                                            <input type="checkbox" />
                                            <span className="setting-name">Focus</span>
                                            
                                            
                                            <span className="toggle-slider">
                                                <svg className="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                            </span>
                                            
                                            
                                        </li>
                                        <li className="slide-toggle has-toggle on" data-related-widget="todoVisible" data-test="settings-general-todo">
                                            <input type="checkbox" />
                                            <span className="setting-name">Todo</span>
                                            
                                            
                                            <span className="toggle-slider">
                                                <svg className="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                            </span>
                                            
                                            
                                        </li>
                                        <li className="slide-toggle has-toggle on" data-related-widget="quoteVisible" data-test="settings-general-quote">
                                            <input type="checkbox" />
                                            <span className="setting-name">Quotes</span>
                                            
                                            
                                            <span className="toggle-slider">
                                                <svg className="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                            </span>
                                            
                                            
                                        </li>
                                        <li className="slide-toggle has-toggle on" data-related-widget="mantraVisible" data-test="settings-general-mantras">
                                            <input type="checkbox" />
                                            <span className="setting-name">Mantras</span>
                                            
                                            
                                            <span className="toggle-slider">
                                                <svg className="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                            </span>
                                            <span className="option-message">Simple phrases to build positive mental habits</span>
                                            
                                        </li>
                                        <li className="slide-toggle has-toggle" data-related-widget="countdownVisible" data-test="settings-general-countdown">
                                            <input type="checkbox" />
                                            <span className="setting-name">Countdowns</span>
                                            <span className="badge badge-plus">PLUS</span>
                                            
                                            <span className="toggle-slider">
                                                <svg className="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                            </span>
                                            <span className="option-message">Count down to important dates and deadlines</span>
                                            
                                        </li>
                                        <li className="slide-toggle has-toggle" data-related-widget="metricVisible" data-test="settings-general-metric">
                                            <input type="checkbox" />
                                            <span className="setting-name">Metrics</span>
                                            <span className="badge badge-plus">PLUS</span>
                                            
                                            <span className="toggle-slider">
                                                <svg className="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                            </span>
                                            <span className="option-message">Keep your important metrics at a glance</span>
                                            
                                        </li>
                                        <li className="slide-toggle has-toggle" data-related-widget="notesVisible" data-test="settings-general-notes">
                                            <input type="checkbox" />
                                            <span className="setting-name">Notes</span>
                                            <span className="badge badge-plus">PLUS</span>
                                            
                                            <span className="toggle-slider">
                                                <svg className="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                            </span>
                                            <span className="option-message">Take quick notes and store wisdom to review</span>
                                            
                                        </li>
                                        <li className="slide-toggle has-toggle" data-related-widget="multiClockVisible" data-test="settings-general-world-clocks">
                                            <input type="checkbox" />
                                            <span className="setting-name">World Clocks</span>
                                            <span className="badge badge-plus">PLUS</span>
                                            
                                            <span className="toggle-slider">
                                                <svg className="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                            </span>
                                            <span className="option-message">Keep track of time anywhere on Earth</span>
                                            
                                        </li>
                                    </ul>


                                    <h4>Customize</h4>
                                    <ul id="customize-list" className="settings-list options-list">
                                        <li className="slide-toggle has-toggle" data-related-widget="themeColour" data-test="settings-general-theme">
                                            <span className="setting-name">Theme</span>
                                        
                                            <span className="toggle-options">
                                                <span className="toggle-option themeColour" data-related-widget="themeColour" data-option-value="dark">
                                                    <div className="sub-view"></div>
                                                    <span className="toggle-label">Dark</span>
                                                    
                                                </span>
                                                <span className="toggle-divider">|</span> 
                                                <span className="toggle-option themeColour" data-related-widget="themeColour" data-option-value="light">
                                                    <div className="sub-view"></div>
                                                    <span className="toggle-label">Light</span>
                                                    
                                                </span>
                                                <span className="toggle-divider">|</span> 
                                                <span className="toggle-option themeColour active" data-related-widget="themeColour" data-option-value="system">
                                                    <div className="sub-view"></div>
                                                    <span className="toggle-label">System</span>
                                                    
                                                </span>
                                                <br />
                                                <span className="toggle-option themeColour" data-related-widget="themeColour" data-option-value="photo">
                                                    <div className="sub-view"></div>
                                                    <span className="toggle-label">Photo Match</span>
                                                    <span className="badge badge-plus">PLUS</span>
                                                </span>
                                                <span className="toggle-divider">|</span> 
                                                <span className="toggle-option themeColour" data-related-widget="themeColour" data-option-value="custom" data-test="custom">
                                                    <div data-v-a62956c0="" className="color-picker-wrapper sub-view">
                                                        <span data-v-a62956c0="" data-related-widget="themeColour" data-option-value="custom" className="toggle-label">
                                                            <span data-v-a62956c0="" className="preview"></span> 
                                                            <span data-v-a62956c0="">Custom</span>
                                                        </span>
                                                    </div>
                                                    <span className="toggle-label"></span>
                                                    <span className="badge badge-plus">PLUS</span>
                                                </span>
                                                
                                            </span>
                                        
                                            <div className="option-clear"></div>
                                            </li>
                                                <li className="slide-toggle has-toggle" data-related-widget="themeFont" data-test="settings-general-font">
                                                    <span className="setting-name">Font</span>
                                                    <span className="badge badge-plus">PLUS</span>
                                                    <span className="toggle-options">
                                                        <span className="toggle-option themeFont active" data-related-widget="themeFont" data-option-value="default">
                                                            <div className="sub-view"></div>
                                                            <span className="toggle-label">Classic</span>
                                                            
                                                        </span>
                                                        <span className="toggle-divider">|</span> 
                                                        <span className="toggle-option themeFont" data-related-widget="themeFont" data-option-value="modern">
                                                            <div className="sub-view"></div>
                                                            <span className="toggle-label">Modern</span>
                                                            
                                                        </span>
                                                        <span className="toggle-divider">|</span> 
                                                        <span className="toggle-option themeFont" data-related-widget="themeFont" data-option-value="startup">
                                                            <div className="sub-view"></div>
                                                            <span className="toggle-label">Startup</span>
                                                            
                                                        </span>
                                                        <br />
                                                        <span className="toggle-option themeFont" data-related-widget="themeFont" data-option-value="retro">
                                                            <div className="sub-view"></div>
                                                            <span className="toggle-label">Retro</span>
                                                            
                                                        </span>
                                                        <span className="toggle-divider">|</span> 
                                                        <span className="toggle-option themeFont" data-related-widget="themeFont" data-option-value="warehouse">
                                                            <div className="sub-view"></div>
                                                            <span className="toggle-label">Warehouse</span>
                                                            
                                                        </span>
                                                        <span className="toggle-divider">|</span> 
                                                        <span className="toggle-option themeFont" data-related-widget="themeFont" data-option-value="quirky">
                                                            <div className="sub-view"></div>
                                                            <span className="toggle-label">Quirky</span>
                                                            
                                                        </span>
                                                        
                                                    </span>
                                            
                                                <div className="option-clear"></div>
                                            </li>
                                    </ul>


                                    <h5>Tip</h5>
                                    <p className="tip no-top-margin">Many items in Momentum can be edited by double-clicking on them, including <strong>your name</strong> and your <strong>to-dos</strong>.</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <span className="app-dash setting-icon-toggle" data-test="settings-toggle" data-ob="settings-toggle">
                        <svg className="toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340.274 340.274">
                            <path d="M293.629 127.806l-5.795-13.739c19.846-44.856 18.53-46.189 14.676-50.08l-25.353-24.77-2.516-2.12h-2.937c-1.549 0-6.173 0-44.712 17.48l-14.184-5.719c-18.332-45.444-20.212-45.444-25.58-45.444h-35.765c-5.362 0-7.446-.006-24.448 45.606l-14.123 5.734C86.848 43.757 71.574 38.19 67.452 38.19l-3.381.105-27.27 26.737c-4.138 3.891-5.582 5.263 15.402 49.425l-5.774 13.691C0 146.097 0 147.838 0 153.33v35.068c0 5.501 0 7.44 46.585 24.127l5.773 13.667c-19.843 44.832-18.51 46.178-14.655 50.032l25.353 24.8 2.522 2.168h2.951c1.525 0 6.092 0 44.685-17.516l14.159 5.758c18.335 45.438 20.218 45.427 25.598 45.427h35.771c5.47 0 7.41 0 24.463-45.589l14.195-5.74c26.014 11 41.253 16.585 45.349 16.585l3.404-.096 27.479-26.901c3.909-3.945 5.278-5.309-15.589-49.288l5.734-13.702c46.496-17.967 46.496-19.853 46.496-25.221V151.88c-.005-5.519-.005-7.446-46.644-24.074zM170.128 228.474c-32.798 0-59.504-26.187-59.504-58.364 0-32.153 26.707-58.315 59.504-58.315 32.78 0 59.43 26.168 59.43 58.315-.006 32.177-26.656 58.364-59.43 58.364z" fill="#FFF"></path>
                        </svg>
                    </span>
                </div>
                <div data-v-1040273e="" data-test="background-info-container" className="app-container app-dash photo-info-container show-hover">
                    <div data-v-1040273e="" data-test="background-info-title" className="photo-info-name">Thinadhoo, Maldives</div>
                    <div data-v-1040273e="" className="photo-source">
                        <span data-v-1040273e="" data-test="background-info-source-link" data-url="https://unsplash.com/photos/qnjKufYqIIE" className="photo-source-link">Ibrahim Mushan</span>
                        <span data-v-1040273e="" data-test="control-fav" className="photo-source-control control-heart">
                            <svg height="464pt" viewBox="0 -20 464 464" width="464pt" xmlns="http://www.w3.org/2000/svg">
                                <path d="m340 0c-44.773438.00390625-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.19531275-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0" fill="red"/>
                                <path d="m32 132c0-63.359375 47.550781-122.359375 108.894531-130.847656-5.597656-.769532-11.242187-1.15625025-16.894531-1.152344-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s6-3.113281 16-8.992188c-52.414062-30.824218-216-138.558593-216-283.007812zm0 0" fill="red"/>
                            </svg>
                        </span>
                        <span data-v-1040273e="" title="Skip Photo" data-test="control-skip" className="photo-source-control control-skip">
                            <span data-v-1040273e="" data-test="control-skip-icon-container" className="skip-icon-container">
                                <svg xmlns="http://www.w3.org/2000/svg" height="512" viewBox="0 0 512 512" width="512"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="256" x2="256" y1="481" y2="31"><stop offset="0" stopColor="#5558ff"/><stop offset="1" stopColor="#00c0ff"/></linearGradient><path d="m505.7 183.8-212-150c-4.6-3.3-10.6-3.7-15.6-1.1-5 2.6-8.1 7.7-8.1 13.3v75.4c-150.2 7.8-270 132.5-270 284.6v60c0 7.5 5.5 13.8 12.9 14.9 7.2 1.1 14.4-3.4 16.5-10.7l2.3-8.1c30.8-107.6 127.5-184.2 238.3-190.6v74.6c0 5.6 3.1 10.8 8.1 13.3 5 2.6 11 2.1 15.6-1.1l212-150c3.9-2.8 6.3-7.4 6.3-12.2s-2.3-9.4-6.3-12.2z" fill="url(#SVGID_1_)"/></svg>
                            </span>
                        </span>
                    </div>
                </div>
            </div>


            <div className="footer-center-container">
                <div className="footer-center-display">
                    <p className="footer-center-text-container">
                        <span className="footer-center-body-text">“Nothing can dim the light which shines from within.”</span>
                        <span className="footer-center-text-below">
                            <span className="footer-center-text-below-name">Maya Angelou</span>
                            <span title="like" data-test="like" className="control control-heart">
                                {/* <svg className="love-icon" height="25" viewBox="0 -20 480 480" width="480pt" xmlns="http://www.w3.org/2000/svg"><path d="m348 0c-43 .0664062-83.28125 21.039062-108 56.222656-24.71875-35.183594-65-56.1562498-108-56.222656-70.320312 0-132 65.425781-132 140 0 72.679688 41.039062 147.535156 118.6875 216.480469 35.976562 31.882812 75.441406 59.597656 117.640625 82.625 2.304687 1.1875 5.039063 1.1875 7.34375 0 42.183594-23.027344 81.636719-50.746094 117.601563-82.625 77.6875-68.945313 118.726562-143.800781 118.726562-216.480469 0-74.574219-61.679688-140-132-140zm-108 422.902344c-29.382812-16.214844-224-129.496094-224-282.902344 0-66.054688 54.199219-124 116-124 41.867188.074219 80.460938 22.660156 101.03125 59.128906 1.539062 2.351563 4.160156 3.765625 6.96875 3.765625s5.429688-1.414062 6.96875-3.765625c20.570312-36.46875 59.164062-59.054687 101.03125-59.128906 61.800781 0 116 57.945312 116 124 0 153.40625-194.617188 266.6875-224 282.902344zm0 0"/></svg> */}
                                <svg height="464pt" viewBox="0 -20 464 464" width="464pt" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m340 0c-44.773438.00390625-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.19531275-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0" fill="red"/>
                                    <path d="m32 132c0-63.359375 47.550781-122.359375 108.894531-130.847656-5.597656-.769532-11.242187-1.15625025-16.894531-1.152344-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s6-3.113281 16-8.992188c-52.414062-30.824218-216-138.558593-216-283.007812zm0 0" fill="red"/>
                                </svg>
                            
                            </span>

                            <span data-v-f7053094="" data-test="skip" title="Skip Quote" className="control control-skip">
                                <span data-v-f7053094="" className="icon-container">
                                    {/* <svg id="Capa_1" enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="256" x2="256" y1="481.01" y2="30.99"><stop offset="0" stopColor="#5558ff"/><stop offset="1" stopColor="#00c0ff"/></linearGradient><path d="m505.73 183.801-212-150c-4.6-3.296-10.606-3.721-15.586-1.128-5.01 2.563-8.145 7.705-8.145 13.33v75.396c-150.204 7.822-269.999 132.495-269.999 284.604v60c0 7.485 5.508 13.813 12.92 14.854 7.233 1.055 14.424-3.428 16.494-10.723l2.314-8.101c30.762-107.636 127.471-184.218 238.272-190.605v74.575c0 5.625 3.135 10.767 8.145 13.33 4.98 2.593 10.986 2.139 15.586-1.128l212-150c3.926-2.813 6.27-7.354 6.27-12.202s-2.345-9.39-6.271-12.202z" fill="url(#SVGID_1_)"/></svg> */}
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 512 512" width="512"><path d="m505.7 183.8-212-150c-4.6-3.2-10.6-3.7-15.6-1.1-5 2.6-8.1 7.7-8.1 13.3v75.4c-70.5 3.6-136.2 32.8-186.5 83.1-53.8 53.8-83.5 125.4-83.5 201.5v60c0 8.3 6.8 15 15 15 6.6 0 12.6-4.4 14.4-10.9l2.3-8.1c30.8-107.6 127.5-184.2 238.3-190.6v74.6c0 5.6 3.1 10.7 8.1 13.3 5 2.6 11 2.2 15.6-1.1l212-150c4-2.8 6.3-7.4 6.3-12.2s-2.4-9.4-6.3-12.2zm-205.7 133.3v-61c0-8.3-6.7-15-15-15-32.2 0-63.9 5.2-94.3 15.5-68.6 23.3-125.1 70.8-160.1 131.6 9.2-132.3 119.8-237.1 254.4-237.1 8.3 0 15-6.7 15-15v-61l171 121z" fill="hsl(0, 0%, 100%)"/></svg> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" height="512" viewBox="0 0 512 512" width="512"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="256" x2="256" y1="481" y2="31"><stop offset="0" stopColor="#5558ff"/><stop offset="1" stopColor="#00c0ff"/></linearGradient><path d="m505.7 183.8-212-150c-4.6-3.3-10.6-3.7-15.6-1.1-5 2.6-8.1 7.7-8.1 13.3v75.4c-150.2 7.8-270 132.5-270 284.6v60c0 7.5 5.5 13.8 12.9 14.9 7.2 1.1 14.4-3.4 16.5-10.7l2.3-8.1c30.8-107.6 127.5-184.2 238.3-190.6v74.6c0 5.6 3.1 10.8 8.1 13.3 5 2.6 11 2.1 15.6-1.1l212-150c3.9-2.8 6.3-7.4 6.3-12.2s-2.3-9.4-6.3-12.2z" fill="url(#SVGID_1_)"/></svg>
                                </span>
                            </span>
                            <span data-v-f7053094="" title="share" data-test="share" className="control control-twitter">
                                {/* <svg className="icon-twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.9 52.9"><path d="M52.4 9.7c-0.4-0.2-0.8-0.2-1.2 0 -0.4 0.3-1.2 0.6-2 0.8 2-2.3 2.1-3.8 2.1-4.2 0-0.4-0.2-0.7-0.6-0.8 -0.3-0.2-0.7-0.1-1 0.1 -2.3 1.7-4.6 2-6 2.1 -2.1-2-4.8-3.1-7.7-3.1 -6.2 0-11.2 5.1-11.2 11.4 0 0.5 0 1.1 0.1 1.6C14.2 17.4 5.5 7.1 5.4 7c-0.2-0.2-0.5-0.4-0.9-0.4 -0.3 0-0.6 0.2-0.8 0.5C0.7 12.5 2.8 17.2 4.7 19.9c-0.3-0.2-0.6-0.4-0.8-0.5 -0.3-0.2-0.7-0.3-1-0.1 -0.3 0.2-0.6 0.5-0.6 0.9 -0.1 5.1 2.4 8 4.7 9.7 -0.3 0-0.6 0.1-0.8 0.3 -0.2 0.3-0.3 0.6-0.2 1 1.6 5.2 5.5 7 8 7.6 -5.1 4-12.7 2.7-12.8 2.7 -0.5-0.1-0.9 0.2-1.1 0.6 -0.2 0.4-0.1 0.9 0.3 1.2 5.4 4.1 11.9 5 16.6 5 3.5 0 6.1-0.5 6.3-0.6 23.7-5.6 24.4-27.3 24.3-30.9 4.4-4.1 5.1-5.7 5.3-6.1C52.9 10.3 52.8 9.9 52.4 9.7zM45.9 15.7c-0.2 0.2-0.3 0.5-0.3 0.8 0.1 1 1.3 23.6-22.7 29.3 -0.1 0-9.7 2-17.9-2.1 3.5-0.1 8.5-1 12-4.9 0.3-0.3 0.3-0.7 0.2-1.1 -0.2-0.4-0.5-0.6-0.9-0.6 0 0 0 0 0 0 0 0-5.3 0-7.7-5 1 0.1 2.2 0 3.1-0.4 0.4-0.2 0.6-0.6 0.6-1 0-0.4-0.4-0.8-0.8-0.9 -0.3-0.1-6.1-1.4-6.9-7.7 0.9 0.4 2 0.7 3.1 0.5 0.4-0.1 0.7-0.3 0.8-0.7s0-0.8-0.3-1c-0.2-0.2-5.7-5.1-3.1-11.4 2.8 3 11.2 10.7 21.3 10.1 0.3 0 0.6-0.2 0.7-0.4 0.2-0.2 0.2-0.5 0.2-0.8 -0.2-0.8-0.3-1.6-0.3-2.3 0-5.2 4.1-9.4 9.2-9.4 2.5 0 4.8 1 6.6 2.8 0.2 0.2 0.4 0.3 0.7 0.3 1.1 0 2.8-0.1 4.8-0.9 -0.6 0.7-1.4 1.6-2.6 2.5 -0.3 0.3-0.5 0.7-0.3 1.2 0.2 0.4 0.6 0.7 1 0.6 0.2 0 1.4-0.1 2.8-0.4C48.2 13.4 47.2 14.4 45.9 15.7z"/></svg> */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.7 490.7"><path d="M487.8 92.9c-3.3-3.6-8.5-4.5-12.8-2.3 -4.4 2-9 3.7-13.6 4.9 7.3-9.3 12.8-19.9 16.2-31.2 1.5-5.7-1.9-11.5-7.6-13 -3-0.8-6.3-0.2-8.9 1.6 -16.2 8.8-33.5 15.5-51.3 20.1 -36.8-34.7-92.8-39-134.5-10.4 -32.1 21.7-49.8 59.2-46.1 97.8 -69.6-5.9-133.6-40.4-176.9-95.3 -2.2-2.7-5.6-4.2-9.1-4 -3.5 0.2-6.7 2.2-8.5 5.2 -14.7 24-18.9 52.9-11.8 80.1 3.7 14 10 27.1 18.5 38.8 -3.9-1.9-7.5-4.2-10.8-6.9 -4.6-3.7-11.3-3-15 1.6 -1.5 1.9-2.4 4.3-2.4 6.7 0.6 39.5 22.3 75.6 56.8 94.7 -4.7-0.6-9.3-1.6-13.7-2.9 -5.6-1.7-11.6 1.5-13.3 7.1 -0.7 2.5-0.6 5.1 0.5 7.5 15 33.6 44.9 58.1 80.8 66.1 -34.2 19.3-73.5 27.4-112.5 23.2 -5.1-0.6-9.8 2.4-11.4 7.3 -1.6 4.8 0.5 10.1 4.9 12.6 47.8 28.4 102.1 43.8 157.7 44.8 53.3-0.2 105.3-16.1 149.6-45.8 84.5-56.1 137.2-156.8 129.9-247 18.1-13.4 33.8-29.7 46.4-48.3C491.6 101.8 491.1 96.5 487.8 92.9z" fill="#03A9F4"/></svg>

                            </span>
                        </span>
                    </p>
                </div>
            </div>
            



            <div className="region footer-right-container">
                <div id="todo" className="footer-todo-container todo show show-fade-in" data-test="todo" style={{}} data-justboundclickoutsidehandler="false" data-clickoutsidemouseuphandlerid="sb4gnm" data-clickoutsidemousedownhandlerid="6rh19o">
                    <div style={{display: "none"}} className="app-wrapper nipple nipple-bottom-right">
	                    <div className="app todo-app" style={{height: "auto", width: "320px", overflowY: "hidden",}}>
                            <div className="drop-zone drop-left-zone">
                                <span className="bar left-bar">
                                    <span className="bar-name"></span>
                                </span>
		                    </div>

                            <div className="drop-zone drop-right-zone">
                                <span className="bar right-bar">
                                    <span className="bar-name"></span>
                                </span>
                            </div>

		                <header className="header todo-header momentum-todo has-assignee" data-test="todo-header">
                            <div className="todo-header-row">
	                            <div className="list-color" style={{backgroundColor: "rgba(0,0,0,0)"}}></div>


	                            <div className="active-list-container has-icon" data-test="todo-list-chooser">
                                    <img className="provider-icon" src="" />
		                            <span className="list-name active-list-name " title="Today" data-test="todo-active-list-title">Today</span> 
                                    <div className="list-chooser-toggle icon-wrapper" style={{display: "inline-flex"}}>
                                        <svg className="icon icon-angle-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.751 55.751">
                                            <path d="M31.836 43.006c.282-.281.518-.59.725-.912L54.17 20.485a5.403 5.403 0 0 0 0-7.638 5.403 5.403 0 0 0-7.638 0l-18.608 18.61L9.217 12.753A5.4 5.4 0 0 0 0 16.571a5.363 5.363 0 0 0 1.582 3.816l21.703 21.706c.207.323.445.631.729.913a5.367 5.367 0 0 0 3.91 1.572 5.37 5.37 0 0 0 3.912-1.572z"></path>
                                        </svg>
                                    </div>
		                            <ul className="dropdown list-chooser nipple nipple-top-left" data-test="todo-list-dropdown" style={{display: "none"}}>
                                        <ul data-test="inbox" data-list-id="1-inbox">
	                                        <li className="todo-list-choice " data-list-id="1-inbox">
		                                        <div className="list-color" style={{backgroundColor: ""}}>&nbsp;</div>
                                                <span className="list-name">Inbox</span>
                                                <span className="todo-count">0</span>
	                                        </li>
                                        </ul>
                                        <ul data-test="today" data-list-id="1-today">
                                            <li className="todo-list-choice-active " data-list-id="1-today">
                                                <div className="list-color" style={{backgroundColor: ""}}>&nbsp;</div>
                                                <span className="list-name">Today</span>
                                                <span className="todo-count">0</span>
                                            </li>
                                        </ul>
                                        <ul data-test="done" data-list-id="1-done">
                                            <li className="todo-list-choice " data-list-id="1-done">
                                                <div className="list-color" style={{backgroundColor: ""}}>&nbsp;</div>
                                                <span className="list-name">Done</span>
                                                <span className="todo-count"> </span>
                                            </li>
                                        </ul>
                                        <li className="todo-list-add-row">
                                            <div id="list-new" className="upsell-row">
                                                <div className="copy">+ New List</div>
                                                <span className="badge badge-plus">Plus</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

	                            <div className="todo-actions">
		                            <div className="more" id="todo-top-menu">
                                        <div className="icon-wrapper more-toggle" data-test="todo-item-dropdown-toggle">
		                                    <svg className="icon icon-ellipsis" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                                                <path d="M8 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM52 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"></path>
                                            </svg>
                                        </div>
                                        <div className="dropdown todo-actions-dropdown" style={{display: "none", opacity: "0", height: "auto"}}>
                                            <ul className="dropdown-list">
                                                <li data-itemid="c310" title="Automatically set top todo as focus" data-test="dropdown-autofocus">
                                                    <span className="dropdown-list-icon-wrapper">
                                                        <svg className="dropdown-list-icon icon icon-autofocus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124.512 124.512">
                                                            <path d="M113.956 57.006l-97.4-56.2c-4-2.3-9 .6-9 5.2v112.5c0 4.6 5 7.5 9 5.2l97.4-56.2c4-2.401 4-8.2 0-10.5z"></path>
                                                        </svg>
                                                    </span>
                                                    <span className="dropdown-list-label">Autofocus</span>
                                                    <span className="badge badge-plus">PLUS</span>
                                                </li>
                                                <li data-itemid="c311" className="line">
                                                    <span className="dropdown-list-label"></span>
                                                </li>
                                                <li data-itemid="c317" title="Connect to a third party to-do list" data-test="dropdown-add-integration">
                                                    <span className="dropdown-list-label">Add integration</span>
                                                    <span className="badge badge-plus">PLUS</span>
                                                </li>
                                                <li data-itemid="c318" className="no-icon">
                                                    <span className="dropdown-list-label">Settings</span>
                                                </li>
                                            </ul>
                                        <ul className="dropdown-list dropdown-detail"></ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </header>

		            <div className="todo-list-wrapper" style={{minHeight: "152px", maxHeight: "152px"}}>
			            <ol className="todo-list is-empty" style={{maxHeight: "152px", minHeight: "152px", opacity: "1"}} data-test-list-loaded="">
                            <li className="empty">
	                            <p className="title empty-title">Add a todo to get started</p>
                                <div className="description empty-link" data-target-list-id="1-inbox" data-use-command="">
                                    Switch to Inbox
                                    <i className="icon icon-angle-right"></i>
                                </div>
	                            <button className="button new-todo-button" data-test="todo-new-empty">New Todo</button>
                            </li>
                        </ol>
		            </div>



                    <div className="footer-input new-todo-footer" style={{visibility:"hidden"}}>
                        <input id="todo-new" className="todo-input todo-new" type="text" placeholder="New Todo" data-test="todo-new-input" autoComplete="off" />
                    </div>
                </div>
            </div>
                    <span className="app-dash toggle footer-todo-toggle" data-test="todo-app-dash" data-ob="todo-app-dash">Todo</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
