import React, {useContext} from 'react';
import "./footer.css";

// imported components
import Quote from "../Quote/Quote"
import Notification from "../Notification/Notification"

// imported utils
import {BackgroundImageContext} from "../../context/BackgroundImageContext";

const Footer = () => {

    const {backgroundImage, getBackgroundImage} = useContext(BackgroundImageContext);
    
    return (
        <footer>
            
            <div data-testid="footer" className=" region footer-left-container" id="bottom-left">

                <div id="settings" className="app-container settings-icon-container" data-justboundclickoutsidehandler="false" data-clickoutsidemouseuphandlerid="a7ezab" data-clickoutsidemousedownhandlerid="z7qp9f">
                    
                    <div className="app-wrapper nipple nipple-bottom-left">
                        
                        <div className="app settings-app" >
                            {/* setting component */}
                        </div>
                    
                    </div>
                    
                    <Notification />
                    
                    <span className="app-dash setting-icon-toggle" data-test="settings-toggle" data-ob="settings-toggle">
                        
                        <svg className="toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340.274 340.274">
                            
                            <path d="M293.629 127.806l-5.795-13.739c19.846-44.856 18.53-46.189 14.676-50.08l-25.353-24.77-2.516-2.12h-2.937c-1.549 0-6.173 0-44.712 17.48l-14.184-5.719c-18.332-45.444-20.212-45.444-25.58-45.444h-35.765c-5.362 0-7.446-.006-24.448 45.606l-14.123 5.734C86.848 43.757 71.574 38.19 67.452 38.19l-3.381.105-27.27 26.737c-4.138 3.891-5.582 5.263 15.402 49.425l-5.774 13.691C0 146.097 0 147.838 0 153.33v35.068c0 5.501 0 7.44 46.585 24.127l5.773 13.667c-19.843 44.832-18.51 46.178-14.655 50.032l25.353 24.8 2.522 2.168h2.951c1.525 0 6.092 0 44.685-17.516l14.159 5.758c18.335 45.438 20.218 45.427 25.598 45.427h35.771c5.47 0 7.41 0 24.463-45.589l14.195-5.74c26.014 11 41.253 16.585 45.349 16.585l3.404-.096 27.479-26.901c3.909-3.945 5.278-5.309-15.589-49.288l5.734-13.702c46.496-17.967 46.496-19.853 46.496-25.221V151.88c-.005-5.519-.005-7.446-46.644-24.074zM170.128 228.474c-32.798 0-59.504-26.187-59.504-58.364 0-32.153 26.707-58.315 59.504-58.315 32.78 0 59.43 26.168 59.43 58.315-.006 32.177-26.656 58.364-59.43 58.364z" fill="#FFF"></path>
                        
                        </svg>
                    
                    </span>

                </div>

                <div className="app-container app-dash photo-info-container show-hover">
                    
                    <div className="photo-info-location">{`${backgroundImage && backgroundImage?.location?.city}, ${ backgroundImage && backgroundImage?.location?.country}`}</div>

                    <div className="photo-source">

                        <div data-url="https://unsplash.com/photos/qnjKufYqIIE" className="photo-source-link">{`${backgroundImage && backgroundImage?.user?.name}`}</div>
                        
                        <span className="photo-source-control control-heart-container">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-dash-heart-empty" viewBox="0 0 953 1000" fill="#fff">
                                
                                <path d="M1 329q7-115 79-191h2l2-2q88-76 199-76t191 70q32-28 67-45l2-2h2q56-23 117-23 88-2 161 43t110 124v2l2 4q30 106 10 202t-80 175q-62 88-162 172 0 2-2 2-49 45-107 90-34 25-59 41-33 23-55 23l-6 2-5-2q-28-3-59-29-10-6-21-16t-16-13h-2q-246-188-328-340v-2q-49-94-42-209zm85 10q-6 86 33 162 74 135 303 310h2q6 6 18 16t19 14q8 6 15 10 8-2 14-6 22-14 51-37 58-43 105-88 94-80 151-161 107-142 58-298-27-57-78-88t-113-29q-43 0-86 17-39 22-68 57l-32 43-35-43q-52-65-141-73t-161 53q-49 55-55 141z"/>
                            
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-dash-heart" viewBox="0 0 953 1000" fill="#fff">
                                
                                <path d="M1 329q7-115 79-191h2l2-2q88-76 199-76t191 70q32-28 67-45l2-2h2q56-23 117-23 88-2 161 43t110 124v2l2 4q30 106 10 202t-80 175q-62 88-162 172 0 2-2 2-49 45-107 90-34 25-59 41-33 23-55 23l-6 2-5-2q-28-3-59-29-10-6-21-16t-16-13h-2Q125 692 43 540v-2Q-6 444 1 329zm85"/>
                            
                            </svg>
                        
                        </span>

                        <span onClick={getBackgroundImage} title="Skip Photo" data-test="control-skip" className="photo-source-control control-skip-container">
                            
                            <span data-test="control-skip-icon-container" className="skip-icon-container">
                                
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249.05 132.12" className="icon icon-skip">
                                    
                                    <circle cx="115.5" cy="108.62" r="23"></circle>
                                    <path d="M291.5,281A22.5,22.5,0,1,1,269,303.5,22.52,22.52,0,0,1,291.5,281m0-1A23.5,23.5,0,1,0,315,303.5,23.5,23.5,0,0,0,291.5,280Z" transform="translate(-176 -194.88)"></path>
                                    <path d="M399,257.5a135.18,135.18,0,0,0-41.16-42.17c-22.7-14.74-49.38-21.92-75.15-20.2a108.71,108.71,0,0,0-65.16,27c-19.91,17.5-33.76,41.79-41.18,72.19a13.52,13.52,0,0,0,9.92,16.32,13.66,13.66,0,0,0,3.21.38,13.51,13.51,0,0,0,13.11-10.3c6.07-24.92,17.1-44.54,32.76-58.31a82,82,0,0,1,49.13-20.32c20-1.33,40.81,4.32,58.65,15.9A108.07,108.07,0,0,1,374,268.51l-30,13.2,72.43,40.36,8.6-76Z" transform="translate(-176 -194.88)" className="arrow"></path>
                                
                                </svg>
                            
                            </span>
                        
                        </span>
                    
                    </div>
                
                </div>

            </div>

            <Quote />

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
