import React from 'react';
import "./setting.css";

const Setting = () => {
    return (
        <>
            <ul id="nav-menu" className="settings-nav" data-test="nav-menu">

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

                                <svg className="icon anim-caret-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.16 11.75">
                                    
                                    <path d="M52.16,26.08A5.87,5.87,0,0,1,46.29,32H5.88A5.88,5.88,0,0,1,0,26.08H0a5.87,5.87,0,0,1,5.88-5.87H46.29a5.87,5.87,0,0,1,5.87,5.87Z" transform="translate(0 -20.21)"></path>

                                </svg>

                                <svg className="icon anim-caret-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.16 11.75">

                                    <path d="M52.16,26.08A5.87,5.87,0,0,1,46.29,32H5.88A5.88,5.88,0,0,1,0,26.08H0a5.87,5.87,0,0,1,5.88-5.87H46.29a5.87,5.87,0,0,1,5.87,5.87Z" transform="translate(0 -20.21)"></path>

                                </svg>

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

            </ul>

            <div className="settings-view-container" data-test="settings-view-container">

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

                                <svg className="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">

                                    <circle cx="50" cy="50" r="50"></circle>

                                </svg>

                            </span>
                        
                        </li>

                        <li className="slide-toggle has-toggle" data-related-widget="bookmarksVisible" data-test="settings-general-bookmarks-bar">

                            <input type="checkbox" />

                            <span className="setting-name">Bookmarks Bar</span>
                            
                            <span className="toggle-slider">

                                <svg className="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    
                                    <circle cx="50" cy="50" r="50"></circle>
                                    
                                </svg>

                            </span>
                            
                        </li>

                        <li className="slide-toggle has-toggle" data-related-widget="mostVisited" data-test="settings-general-most-visited">

                            <input type="checkbox" />

                            <span className="setting-name">Top Sites</span>
                            
                            <span className="toggle-slider">

                                <svg className="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">

                                    <circle cx="50" cy="50" r="50"></circle>
                                
                                </svg>
                            
                            </span>

                            <span className="option-message">Show most visited websites by default in Bookmarks Bar</span>
                            
                        </li>

                        <li className="slide-toggle has-toggle on" data-related-widget="searchVisible" data-test="settings-general-search">

                            <input type="checkbox" />

                            <span className="setting-name">Search</span>
                            
                            <span className="toggle-slider">

                                <svg className="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    
                                    <circle cx="50" cy="50" r="50"></circle>
                                
                                </svg>

                            </span>
                            
                        </li>

                        <li className="slide-toggle has-toggle on" data-related-widget="weatherVisible" data-test="settings-general-weather">

                            <input type="checkbox" />

                            <span className="setting-name">Weather</span>
                            
                            <span className="toggle-slider">

                                <svg className="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">

                                    <circle cx="50" cy="50" r="50"></circle>
                                
                                </svg>

                            </span>
                            
                        </li>

                        <li className="slide-toggle has-toggle on" data-related-widget="focusVisible" data-test="settings-general-focus">

                            <input type="checkbox" />

                            <span className="setting-name">Focus</span>
                            
                            <span className="toggle-slider">

                                <svg className="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    
                                    <circle cx="50" cy="50" r="50"></circle>
                                
                                </svg>
                                
                            </span>
                            
                        </li>

                        <li className="slide-toggle has-toggle on" data-related-widget="todoVisible" data-test="settings-general-todo">

                            <input type="checkbox" />

                            <span className="setting-name">Todo</span>
                            
                            <span className="toggle-slider">

                                <svg className="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    
                                    <circle cx="50" cy="50" r="50"></circle>
                                
                                </svg>

                            </span>
                            
                        </li>

                        <li className="slide-toggle has-toggle on" data-related-widget="quoteVisible" data-test="settings-general-quote">

                            <input type="checkbox" />

                            <span className="setting-name">Quotes</span>
                            
                            <span className="toggle-slider">

                                <svg className="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">

                                    <circle cx="50" cy="50" r="50"></circle>

                                </svg>

                            </span>
                            
                        </li>

                        <li className="slide-toggle has-toggle on" data-related-widget="mantraVisible" data-test="settings-general-mantras">

                            <input type="checkbox" />

                            <span className="setting-name">Mantras</span>
                            
                            
                            <span className="toggle-slider">

                                <svg className="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">

                                    <circle cx="50" cy="50" r="50"></circle>

                                </svg>

                            </span>

                            <span className="option-message">Simple phrases to build positive mental habits</span>
                            
                        </li>

                        <li className="slide-toggle has-toggle" data-related-widget="countdownVisible" data-test="settings-general-countdown">

                            <input type="checkbox" />

                            <span className="setting-name">Countdowns</span>

                            <span className="badge badge-plus">PLUS</span>
                            
                            <span className="toggle-slider">

                                <svg className="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">

                                    <circle cx="50" cy="50" r="50"></circle>

                                </svg>

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

                                <svg className="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">

                                    <circle cx="50" cy="50" r="50"></circle>

                                </svg>

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

            </div>

        </>

    )
}

export default Setting
