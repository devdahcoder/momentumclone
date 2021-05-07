import React from 'react'
import "./footer.css"


const Footer = () => {
    return (
        <footer>
            <div class="region bottom-left" id="bottom-left">
                <div id="settings" class="app-container settings" data-test="settings" data-justboundclickoutsidehandler="false" data-clickoutsidemouseuphandlerid="a7ezab" data-clickoutsidemousedownhandlerid="z7qp9f">
                    <div class="app-wrapper nipple nipple-bottom-left">
                        <div class="app settings-app" data-test="settings-app">
                            {/* <ul id="nav-menu" class="settings-nav" data-test="nav-menu">
                                <li data-navitem="general" class="main-nav-item active" data-test="nav-menu-general">General</li>
                                <li data-navitem="todo" class="main-nav-item" data-test="nav-menu-todo">Todo</li>
                                <li data-navitem="mantra-settings" class="main-nav-item" data-test="nav-menu-mantra-settings">Mantras</li>
                                <li data-navitem="background-settings" class="main-nav-item" data-test="nav-menu-background-settings">Photos</li>
                                <li data-navitem="quote-settings" class="main-nav-item" data-test="nav-menu-quote-settings">Quotes</li>
                                <li data-navitem="bookmark-settings" class="main-nav-item" data-test="nav-menu-bookmark-settings">Links &amp; Bookmarks</li>
                                <li data-navitem="balance" class="main-nav-item" data-test="nav-menu-balance">Balance</li>
                                <li data-navitem="help" class="main-nav-item secondary secondary-first" data-test="nav-menu-help">Help</li>
                                <li data-navitem="about" class="main-nav-item secondary" data-test="nav-menu-about">About</li>
                                <li data-navitem="upgrade" class="main-nav-item secondary" data-test="nav-menu-upgrade">Upgrade to Plus</li>


                                <div class="user u--no-transition">
                                    <div class="user-info" data-test="user-info" title="adigunolamide200@gmail.com">
                                        <div class="user-avatar-wrapper">
                                            <div class="user-avatar">
                                                <img src="https://www.gravatar.com/avatar/4c57e42ef42f5f1ba3dae5e9cbf3b7bb?s=50&amp;d=mm" alt="heart" />
                                            </div>
                                            <div class="user-avatar-hidden">
                                                <img class="avatar" src="https://www.gravatar.com/avatar/4c57e42ef42f5f1ba3dae5e9cbf3b7bb?s=50&amp;d=mm" alt="heart" />
                                            </div>
                                            <div class="user-badge-wrapper">
                                                <span class="badge badge-plus" data-test="plus">PLUS</span>
                                                <span class="badge badge-team" data-test="team">TEAM</span>
                                            </div>
                                        </div>
                                        <span class="name-wrapper">
                                            <span class="user-info-name">Olamide</span>
                                            <span class="anim-caret u--no-transition">
                                                <svg class="icon anim-caret-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.16 11.75"><path d="M52.16,26.08A5.87,5.87,0,0,1,46.29,32H5.88A5.88,5.88,0,0,1,0,26.08H0a5.87,5.87,0,0,1,5.88-5.87H46.29a5.87,5.87,0,0,1,5.87,5.87Z" transform="translate(0 -20.21)"></path></svg>
                                                <svg class="icon anim-caret-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.16 11.75"><path d="M52.16,26.08A5.87,5.87,0,0,1,46.29,32H5.88A5.88,5.88,0,0,1,0,26.08H0a5.87,5.87,0,0,1,5.88-5.87H46.29a5.87,5.87,0,0,1,5.87,5.87Z" transform="translate(0 -20.21)"></path></svg>
                                            </span>
                                        </span>
                                    </div>
                                        <div class="user-hidden">
                                            <ul class="user-nav">
                                                <li class="action action-profile">Profile</li>
                                                <li class="action action-logout">Log Out</li>
                                            </ul>
                                        <div class="user-close"></div>
                                    </div>
                                </div>

                            </ul> */}
                            {/* <div class="settings-view-container" data-test="settings-view-container">
                                <div id="settings-general" class="settings-view settings-general" data-test="settings-general">
                                    <header class="settings-header">
                                        <h3 data-test="general-header">General</h3>
                                        <p class="description">Customize your dashboard</p>
                                    </header>


                                    <h4>Show</h4>
                                    <ul id="apps-list" class="settings-list options-list">
                                        <li class="slide-toggle has-toggle on" data-related-widget="linksVisible" data-test="settings-general-links">
                                            <input type="checkbox" />
                                            <span class="setting-name">Links</span>
                                            
                                            
                                            <span class="toggle-slider">
                                                <svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                            </span>
                                        
                                        
                                        </li>

                                        <li class="slide-toggle has-toggle" data-related-widget="bookmarksVisible" data-test="settings-general-bookmarks-bar">
                                            <input type="checkbox" />
                                            <span class="setting-name">Bookmarks Bar</span>
                                            
                                            
                                            <span class="toggle-slider">
                                                <svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                            </span>
                                            
                                            
                                        </li>
                                        <li class="slide-toggle has-toggle" data-related-widget="mostVisited" data-test="settings-general-most-visited">
                                            <input type="checkbox" />
                                            <span class="setting-name">Top Sites</span>
                                            
                                            
                                            <span class="toggle-slider">
                                                <svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                            </span>
                                            <span class="option-message">Show most visited websites by default in Bookmarks Bar</span>
                                            
                                        </li>
                                        <li class="slide-toggle has-toggle on" data-related-widget="searchVisible" data-test="settings-general-search">
                                            <input type="checkbox" />
                                            <span class="setting-name">Search</span>
                                            
                                            
                                            <span class="toggle-slider">
                                                <svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                            </span>
                                            
                                            
                                        </li>
                                        <li class="slide-toggle has-toggle on" data-related-widget="weatherVisible" data-test="settings-general-weather">
                                            <input type="checkbox" />
                                            <span class="setting-name">Weather</span>
                                            
                                            
                                            <span class="toggle-slider">
                                                <svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                            </span>
                                            
                                            
                                        </li>
                                        <li class="slide-toggle has-toggle on" data-related-widget="focusVisible" data-test="settings-general-focus">
                                            <input type="checkbox" />
                                            <span class="setting-name">Focus</span>
                                            
                                            
                                            <span class="toggle-slider">
                                                <svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                            </span>
                                            
                                            
                                        </li>
                                        <li class="slide-toggle has-toggle on" data-related-widget="todoVisible" data-test="settings-general-todo">
                                            <input type="checkbox" />
                                            <span class="setting-name">Todo</span>
                                            
                                            
                                            <span class="toggle-slider">
                                                <svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                            </span>
                                            
                                            
                                        </li>
                                        <li class="slide-toggle has-toggle on" data-related-widget="quoteVisible" data-test="settings-general-quote">
                                            <input type="checkbox" />
                                            <span class="setting-name">Quotes</span>
                                            
                                            
                                            <span class="toggle-slider">
                                                <svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                            </span>
                                            
                                            
                                        </li>
                                        <li class="slide-toggle has-toggle on" data-related-widget="mantraVisible" data-test="settings-general-mantras">
                                            <input type="checkbox" />
                                            <span class="setting-name">Mantras</span>
                                            
                                            
                                            <span class="toggle-slider">
                                                <svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                            </span>
                                            <span class="option-message">Simple phrases to build positive mental habits</span>
                                            
                                        </li>
                                        <li class="slide-toggle has-toggle" data-related-widget="countdownVisible" data-test="settings-general-countdown">
                                            <input type="checkbox" />
                                            <span class="setting-name">Countdowns</span>
                                            <span class="badge badge-plus">PLUS</span>
                                            
                                            <span class="toggle-slider">
                                                <svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                            </span>
                                            <span class="option-message">Count down to important dates and deadlines</span>
                                            
                                        </li>
                                        <li class="slide-toggle has-toggle" data-related-widget="metricVisible" data-test="settings-general-metric">
                                            <input type="checkbox" />
                                            <span class="setting-name">Metrics</span>
                                            <span class="badge badge-plus">PLUS</span>
                                            
                                            <span class="toggle-slider">
                                                <svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                            </span>
                                            <span class="option-message">Keep your important metrics at a glance</span>
                                            
                                        </li>
                                        <li class="slide-toggle has-toggle" data-related-widget="notesVisible" data-test="settings-general-notes">
                                            <input type="checkbox" />
                                            <span class="setting-name">Notes</span>
                                            <span class="badge badge-plus">PLUS</span>
                                            
                                            <span class="toggle-slider">
                                                <svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                            </span>
                                            <span class="option-message">Take quick notes and store wisdom to review</span>
                                            
                                        </li>
                                        <li class="slide-toggle has-toggle" data-related-widget="multiClockVisible" data-test="settings-general-world-clocks">
                                            <input type="checkbox" />
                                            <span class="setting-name">World Clocks</span>
                                            <span class="badge badge-plus">PLUS</span>
                                            
                                            <span class="toggle-slider">
                                                <svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                            </span>
                                            <span class="option-message">Keep track of time anywhere on Earth</span>
                                            
                                        </li>
                                    </ul>


                                    <h4>Customize</h4>
                                    <ul id="customize-list" class="settings-list options-list">
                                        <li class="slide-toggle has-toggle" data-related-widget="themeColour" data-test="settings-general-theme">
                                            <span class="setting-name">Theme</span>
                                        
                                            <span class="toggle-options">
                                                <span class="toggle-option themeColour" data-related-widget="themeColour" data-option-value="dark">
                                                    <div class="sub-view"></div>
                                                    <span class="toggle-label">Dark</span>
                                                    
                                                </span>
                                                <span class="toggle-divider">|</span> 
                                                <span class="toggle-option themeColour" data-related-widget="themeColour" data-option-value="light">
                                                    <div class="sub-view"></div>
                                                    <span class="toggle-label">Light</span>
                                                    
                                                </span>
                                                <span class="toggle-divider">|</span> 
                                                <span class="toggle-option themeColour active" data-related-widget="themeColour" data-option-value="system">
                                                    <div class="sub-view"></div>
                                                    <span class="toggle-label">System</span>
                                                    
                                                </span>
                                                <br />
                                                <span class="toggle-option themeColour" data-related-widget="themeColour" data-option-value="photo">
                                                    <div class="sub-view"></div>
                                                    <span class="toggle-label">Photo Match</span>
                                                    <span class="badge badge-plus">PLUS</span>
                                                </span>
                                                <span class="toggle-divider">|</span> 
                                                <span class="toggle-option themeColour" data-related-widget="themeColour" data-option-value="custom" data-test="custom">
                                                    <div data-v-a62956c0="" class="color-picker-wrapper sub-view">
                                                        <span data-v-a62956c0="" data-related-widget="themeColour" data-option-value="custom" class="toggle-label">
                                                            <span data-v-a62956c0="" class="preview"></span> 
                                                            <span data-v-a62956c0="">Custom</span>
                                                        </span>
                                                    </div>
                                                    <span class="toggle-label"></span>
                                                    <span class="badge badge-plus">PLUS</span>
                                                </span>
                                                
                                            </span>
                                        
                                            <div class="option-clear"></div>
                                            </li>
                                                <li class="slide-toggle has-toggle" data-related-widget="themeFont" data-test="settings-general-font">
                                                    <span class="setting-name">Font</span>
                                                    <span class="badge badge-plus">PLUS</span>
                                                    <span class="toggle-options">
                                                        <span class="toggle-option themeFont active" data-related-widget="themeFont" data-option-value="default">
                                                            <div class="sub-view"></div>
                                                            <span class="toggle-label">Classic</span>
                                                            
                                                        </span>
                                                        <span class="toggle-divider">|</span> 
                                                        <span class="toggle-option themeFont" data-related-widget="themeFont" data-option-value="modern">
                                                            <div class="sub-view"></div>
                                                            <span class="toggle-label">Modern</span>
                                                            
                                                        </span>
                                                        <span class="toggle-divider">|</span> 
                                                        <span class="toggle-option themeFont" data-related-widget="themeFont" data-option-value="startup">
                                                            <div class="sub-view"></div>
                                                            <span class="toggle-label">Startup</span>
                                                            
                                                        </span>
                                                        <br />
                                                        <span class="toggle-option themeFont" data-related-widget="themeFont" data-option-value="retro">
                                                            <div class="sub-view"></div>
                                                            <span class="toggle-label">Retro</span>
                                                            
                                                        </span>
                                                        <span class="toggle-divider">|</span> 
                                                        <span class="toggle-option themeFont" data-related-widget="themeFont" data-option-value="warehouse">
                                                            <div class="sub-view"></div>
                                                            <span class="toggle-label">Warehouse</span>
                                                            
                                                        </span>
                                                        <span class="toggle-divider">|</span> 
                                                        <span class="toggle-option themeFont" data-related-widget="themeFont" data-option-value="quirky">
                                                            <div class="sub-view"></div>
                                                            <span class="toggle-label">Quirky</span>
                                                            
                                                        </span>
                                                        
                                                    </span>
                                            
                                                <div class="option-clear"></div>
                                            </li>
                                    </ul>


                                    <h5>Tip</h5>
                                    <p class="tip no-top-margin">Many items in Momentum can be edited by double-clicking on them, including <strong>your name</strong> and your <strong>to-dos</strong>.</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <span class="app-dash toggle" data-test="settings-toggle" data-ob="settings-toggle">
                        <svg class="toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340.274 340.274">
                            <path d="M293.629 127.806l-5.795-13.739c19.846-44.856 18.53-46.189 14.676-50.08l-25.353-24.77-2.516-2.12h-2.937c-1.549 0-6.173 0-44.712 17.48l-14.184-5.719c-18.332-45.444-20.212-45.444-25.58-45.444h-35.765c-5.362 0-7.446-.006-24.448 45.606l-14.123 5.734C86.848 43.757 71.574 38.19 67.452 38.19l-3.381.105-27.27 26.737c-4.138 3.891-5.582 5.263 15.402 49.425l-5.774 13.691C0 146.097 0 147.838 0 153.33v35.068c0 5.501 0 7.44 46.585 24.127l5.773 13.667c-19.843 44.832-18.51 46.178-14.655 50.032l25.353 24.8 2.522 2.168h2.951c1.525 0 6.092 0 44.685-17.516l14.159 5.758c18.335 45.438 20.218 45.427 25.598 45.427h35.771c5.47 0 7.41 0 24.463-45.589l14.195-5.74c26.014 11 41.253 16.585 45.349 16.585l3.404-.096 27.479-26.901c3.909-3.945 5.278-5.309-15.589-49.288l5.734-13.702c46.496-17.967 46.496-19.853 46.496-25.221V151.88c-.005-5.519-.005-7.446-46.644-24.074zM170.128 228.474c-32.798 0-59.504-26.187-59.504-58.364 0-32.153 26.707-58.315 59.504-58.315 32.78 0 59.43 26.168 59.43 58.315-.006 32.177-26.656 58.364-59.43 58.364z" fill="#FFF"></path>
                        </svg>
                    </span>
                </div>
                <div data-v-1040273e="" data-test="background-info-container" class="app-container app-dash photo-info show-hover">
                    <div data-v-1040273e="" data-test="background-info-title" class="title">Thinadhoo, Maldives</div>
                    <div data-v-1040273e="" class="source">
                        <span data-v-1040273e="" data-test="background-info-source-link" data-url="https://unsplash.com/photos/qnjKufYqIIE" class="source-link">Ibrahim Mushan / Unsplash</span>
                        <span data-v-1040273e="" data-test="control-fav" class="control control-heart">
                            <img data-v-1040273e="" src="img/icon-heart-empty.svg" class="icon icon-dash-heart-empty" alt="heart icon" /> 
                            <img data-v-1040273e="" src="img/icon-heart.svg" class="icon icon-dash-heart" alt="heart icon" />
                        </span>
                        <span data-v-1040273e="" title="Skip Photo" data-test="control-skip" class="control control-skip">
                            <span data-v-1040273e="" data-test="control-skip-icon-container" class="icon-container">
                                <svg data-v-1040273e="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249.05 132.12" class="icon icon-skip">
                                    <circle data-v-1040273e="" cx="115.5" cy="108.62" r="23"></circle>
                                    <path data-v-1040273e="" d="M291.5,281A22.5,22.5,0,1,1,269,303.5,22.52,22.52,0,0,1,291.5,281m0-1A23.5,23.5,0,1,0,315,303.5,23.5,23.5,0,0,0,291.5,280Z" transform="translate(-176 -194.88)"></path> 
                                    <path data-v-1040273e="" d="M399,257.5a135.18,135.18,0,0,0-41.16-42.17c-22.7-14.74-49.38-21.92-75.15-20.2a108.71,108.71,0,0,0-65.16,27c-19.91,17.5-33.76,41.79-41.18,72.19a13.52,13.52,0,0,0,9.92,16.32,13.66,13.66,0,0,0,3.21.38,13.51,13.51,0,0,0,13.11-10.3c6.07-24.92,17.1-44.54,32.76-58.31a82,82,0,0,1,49.13-20.32c20-1.33,40.81,4.32,58.65,15.9A108.07,108.07,0,0,1,374,268.51l-30,13.2,72.43,40.36,8.6-76Z" transform="translate(-176 -194.88)" class="arrow"></path>
                                </svg>
                            </span>
                        </span>
                </div>
                </div>
            </div>


            <div class="region bottom">
                <div data-v-f7053094="" data-test="quote" class="app-container app-dash quote">
                    <p data-v-f7053094="" class="body">
                        <span data-v-f7053094="" data-test="body-text" class="body-text">“Nothing can dim the light which shines from within.”</span>
                        <span data-v-f7053094="" data-test="below" class="below">
                            <span data-v-f7053094="" data-test="source" class="source">Maya Angelou</span>
                            <span data-v-f7053094="" data-test="control-fav" class="control control-heart">
                                <img data-v-f7053094="" src="img/icon-heart-empty.svg" class="icon-dash-heart-empty icon" alt="heart" />
                            </span>
                            <span data-v-f7053094="" data-test="skip" title="Skip Quote" class="control control-skip">
                                <span data-v-f7053094="" class="icon-container">
                                    <svg data-v-f7053094="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249.05 132.12" class="icon icon-skip">
                                        <circle data-v-f7053094="" cx="115.5" cy="108.62" r="23"></circle>
                                        <path data-v-f7053094="" d="M291.5,281A22.5,22.5,0,1,1,269,303.5,22.52,22.52,0,0,1,291.5,281m0-1A23.5,23.5,0,1,0,315,303.5,23.5,23.5,0,0,0,291.5,280Z" transform="translate(-176 -194.88)"></path>
                                        <path data-v-f7053094="" d="M399,257.5a135.18,135.18,0,0,0-41.16-42.17c-22.7-14.74-49.38-21.92-75.15-20.2a108.71,108.71,0,0,0-65.16,27c-19.91,17.5-33.76,41.79-41.18,72.19a13.52,13.52,0,0,0,9.92,16.32,13.66,13.66,0,0,0,3.21.38,13.51,13.51,0,0,0,13.11-10.3c6.07-24.92,17.1-44.54,32.76-58.31a82,82,0,0,1,49.13-20.32c20-1.33,40.81,4.32,58.65,15.9A108.07,108.07,0,0,1,374,268.51l-30,13.2,72.43,40.36,8.6-76Z" transform="translate(-176 -194.88)" class="arrow"></path>
                                    </svg>
                                </span>
                            </span>
                            <span data-v-f7053094="" title="share" data-test="share" class="control control-twitter">
                                <i data-v-f7053094="" class="icon icon-twitter"></i>
                            </span>
                        </span>
                    </p>
                </div>
            </div>
            <div class="region bottom-right">
                <div id="todo" class="app-container todo show show-fade-in" data-test="todo" style={{}} data-justboundclickoutsidehandler="false" data-clickoutsidemouseuphandlerid="sb4gnm" data-clickoutsidemousedownhandlerid="6rh19o">
                    <div class="app-wrapper nipple nipple-bottom-right">
	                    <div class="app todo-app" style={{height: "auto", width: "320px", overflowY: "hidden",}}>
                            <div class="drop-zone drop-left-zone">
                                <span class="bar left-bar">
                                    <span class="bar-name"></span>
                                </span>
		                    </div>

                            <div class="drop-zone drop-right-zone">
                                <span class="bar right-bar">
                                    <span class="bar-name"></span>
                                </span>
                            </div>

		                <header class="header todo-header momentum-todo has-assignee" data-test="todo-header">
                            <div class="todo-header-row">
	                            <div class="list-color" style={{backgroundColor: "rgba(0,0,0,0)"}}></div>


	                            <div class="active-list-container has-icon" data-test="todo-list-chooser">
                                    <img class="provider-icon" src="" />
		                            <span class="list-name active-list-name " title="Today" data-test="todo-active-list-title">Today</span> 
                                    <div class="list-chooser-toggle icon-wrapper" style={{display: "inline-flex"}}>
                                        <svg class="icon icon-angle-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.751 55.751">
                                            <path d="M31.836 43.006c.282-.281.518-.59.725-.912L54.17 20.485a5.403 5.403 0 0 0 0-7.638 5.403 5.403 0 0 0-7.638 0l-18.608 18.61L9.217 12.753A5.4 5.4 0 0 0 0 16.571a5.363 5.363 0 0 0 1.582 3.816l21.703 21.706c.207.323.445.631.729.913a5.367 5.367 0 0 0 3.91 1.572 5.37 5.37 0 0 0 3.912-1.572z"></path>
                                        </svg>
                                    </div>
		                            <ul class="dropdown list-chooser nipple nipple-top-left" data-test="todo-list-dropdown" style={{display: "none"}}>
                                        <ul data-test="inbox" data-list-id="1-inbox">
	                                        <li class="todo-list-choice " data-list-id="1-inbox">
		                                        <div class="list-color" style={{backgroundColor: ""}}>&nbsp;</div>
                                                <span class="list-name">Inbox</span>
                                                <span class="todo-count">0</span>
	                                        </li>
                                        </ul>
                                        <ul data-test="today" data-list-id="1-today">
                                            <li class="todo-list-choice-active " data-list-id="1-today">
                                                <div class="list-color" style={{backgroundColor: ""}}>&nbsp;</div>
                                                <span class="list-name">Today</span>
                                                <span class="todo-count">0</span>
                                            </li>
                                        </ul>
                                        <ul data-test="done" data-list-id="1-done">
                                            <li class="todo-list-choice " data-list-id="1-done">
                                                <div class="list-color" style={{backgroundColor: ""}}>&nbsp;</div>
                                                <span class="list-name">Done</span>
                                                <span class="todo-count"> </span>
                                            </li>
                                        </ul>
                                        <li class="todo-list-add-row">
                                            <div id="list-new" class="upsell-row">
                                                <div class="copy">+ New List</div>
                                                <span class="badge badge-plus">Plus</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

	                            <div class="todo-actions">
		                            <div class="more" id="todo-top-menu">
                                        <div class="icon-wrapper more-toggle" data-test="todo-item-dropdown-toggle">
		                                    <svg class="icon icon-ellipsis" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                                                <path d="M8 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM52 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"></path>
                                            </svg>
                                        </div>
                                        <div class="dropdown todo-actions-dropdown" style={{display: "none", opacity: "0", height: "auto"}}>
                                            <ul class="dropdown-list">
                                                <li data-itemid="c310" title="Automatically set top todo as focus" data-test="dropdown-autofocus">
                                                    <span class="dropdown-list-icon-wrapper">
                                                        <svg class="dropdown-list-icon icon icon-autofocus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124.512 124.512">
                                                            <path d="M113.956 57.006l-97.4-56.2c-4-2.3-9 .6-9 5.2v112.5c0 4.6 5 7.5 9 5.2l97.4-56.2c4-2.401 4-8.2 0-10.5z"></path>
                                                        </svg>
                                                    </span>
                                                    <span class="dropdown-list-label">Autofocus</span>
                                                    <span class="badge badge-plus">PLUS</span>
                                                </li>
                                                <li data-itemid="c311" class="line">
                                                    <span class="dropdown-list-label"></span>
                                                </li>
                                                <li data-itemid="c317" title="Connect to a third party to-do list" data-test="dropdown-add-integration">
                                                    <span class="dropdown-list-label">Add integration</span>
                                                    <span class="badge badge-plus">PLUS</span>
                                                </li>
                                                <li data-itemid="c318" class="no-icon">
                                                    <span class="dropdown-list-label">Settings</span>
                                                </li>
                                            </ul>
                                        <ul class="dropdown-list dropdown-detail"></ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </header>

		            <div class="todo-list-wrapper" style={{minHeight: "152px", maxHeight: "152px"}}>
			            <ol class="todo-list is-empty" style={{maxHeight: "152px", minHeight: "152px", opacity: "1"}} data-test-list-loaded="">
                            <li class="empty">
	                            <p class="title empty-title">Add a todo to get started</p>
                                <div class="description empty-link" data-target-list-id="1-inbox" data-use-command="">
                                    Switch to Inbox
                                    <i class="icon icon-angle-right"></i>
                                </div>
	                            <button class="button new-todo-button" data-test="todo-new-empty">New Todo</button>
                            </li>
                        </ol>
		            </div>



                    <div class="footer-input new-todo-footer" style={{visibility:"hidden"}}>
                        <input id="todo-new" class="todo-input todo-new" type="text" placeholder="New Todo" data-test="todo-new-input" autocomplete="off" />
                    </div>
                </div>
            </div>
            <span class="app-dash toggle Todo-toggle" data-test="todo-app-dash" data-ob="todo-app-dash">Todo</span>
        </div>
    </div>
        </footer>
    )
}

export default Footer
