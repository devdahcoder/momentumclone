import React, {useContext} from 'react';
import "./tododropdown.css";

// imported utils
import {TodoContext} from "../../context/TodoContext"

const TodoDropDown = ({id, completed}) => {

    const {editTodo, deleteTodo, todoDropdown,} = useContext(TodoContext);

    return (
        <div style={{display: todoDropdown ? "block": "none"}} data-test="dropdown" className="todo-dropdown-container more-dropdown app dash-dropdown nipple nipple-top-left">
          <ul data-test="dropdown-options" className="todo-dropdown-ul">
            

            {
              completed && completed ?
                <>
                  <li onClick={() => editTodo(id)} data-v-20431cdb="" className="focus-edit" data-test="edit">
                    <div data-test="drop-down-wrapper" className="dropdown-list-label-wrapper">
                      <span className="dropdown-list-icon-wrapper">
                        <svg data-v-20431cdb="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropdown-list-icon icon icon-edit">
                          <path data-v-20431cdb="" d="M15.067 3.986a.5.5 0 0 0-.708-.001L3.437 14.91a.5.5 0 0 0 0 .707l4.948 4.948a.5.5 0 0 0 .707 0L20.009 9.648a.5.5 0 0 0 0-.706l-4.942-4.956zM2.43 16.8a.5.5 0 0 0-.84.237L.084 23.314a.501.501 0 0 0 .603.602l6.272-1.5a.5.5 0 0 0 .237-.84L2.43 16.8zM23.2 2.924L21.077.8a2.5 2.5 0 0 0-3.532 0l-1.418 1.417a.5.5 0 0 0 0 .707l4.95 4.949a.5.5 0 0 0 .707 0L23.2 6.454a2.5 2.5 0 0 0 0-3.53z"></path>
                        </svg>
                      </span>

                      <span data-test="name" className="dropdown-list-label">Edit</span>
                    </div>
                  </li>

                  <li onClick={() => deleteTodo(id)} data-v-20431cdb="" className="focus-clear" data-test="clear">
                    <div data-test="drop-down-wrapper" className="dropdown-list-label-wrapper">
                      <span className="dropdown-list-icon-wrapper">
                        <svg data-v-20431cdb="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982" className="dropdown-list-icon icon icon-delete">
                          <path data-v-20431cdb="" d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"></path>
                        </svg>
                      </span>
                      <span data-test="name" className="dropdown-list-label">Clear</span>
                    </div>
                  </li>
                </>
                :
                <>
                  <li onClick={() => editTodo(id)} data-v-20431cdb="" className="focus-edit" data-test="edit">
                    <div data-test="drop-down-wrapper" className="dropdown-list-label-wrapper">
                      <span className="dropdown-list-icon-wrapper">
                        <svg data-v-20431cdb="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982" className="dropdown-list-icon icon icon-delete">
                          <path data-v-20431cdb="" d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"></path>
                        </svg>
                      </span>

                      <span data-test="name" className="dropdown-list-label">Clear</span>
                    </div>
                  </li>

                  <li onClick={() => deleteTodo(id)} data-v-20431cdb="" className="focus-clear" data-test="clear">
                    <div data-test="drop-down-wrapper" className="dropdown-list-label-wrapper">
                      <span className="dropdown-list-icon-wrapper">
                        <svg data-v-20431cdb="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982" class="dropdown-list-icon icon icon-new"><path data-v-20431cdb="" d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"></path>
                        </svg>
                      </span>
                      <span data-test="name" className="dropdown-list-label">New</span>
                    </div>
                  </li>
                </>

          
              }


            <li data-v-20431cdb="" className="pomodoro-timer" data-test="pomodoro-timer">
              <div data-test="drop-down-wrapper" className="dropdown-list-label-wrapper">
                <span className="dropdown-list-icon-wrapper">
                  <svg data-v-20431cdb="" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="dropdown-list-icon icon icon-pomodoro">
                    <path data-v-20431cdb="" d="M427.252 93.939c-42.503-26.268-97.046-35.291-143.541-25.641l.01-.021C293.236 49.25 309.9 40 334.667 40c11.046 0 20-8.954 20-20s-8.954-20-20-20C303.084 0 274.696 11.109 256 	37.029 237.305 11.111 208.918 0 177.333 0c-11.046 0-20 8.954-20 20s8.954 20 20 20c24.333 0 40.828 8.919 50.428 27.267.18.343.351.687.523 1.031C126.652 47.206 0 110.518 0 255.958 0 394.862 96.599 512 256 512c159.009 0 256-116.731 256-256.042 0-70.703-30.098-128.243-84.748-162.019zm-180.196 22.616a20.07 20.07 0 0 0 17.889 0c68.531-34.269 218.655-.395 206.296 158.778h-96.574V256c0-11.046-8.954-20-20-20s-20 8.954-20 20v19.333H276v-58.667c0-11.046-8.954-20-20-20s-20 8.954-20 20v58.667h-58.667V256c0-11.046-8.954-20-20-20s-20 8.954-20 20v19.333H40.76C28.521 117.712 177.219 81.638 247.056 116.555zM256 472c-111.908 0-185.684-65.315-208.727-156.667h417.453C441.728 406.508 368.115 472 256 472zm33.809-92.476c7.811 7.811 7.811 20.474 0 28.284-7.811 7.811-20.474 7.81-28.284 0L256 402.284l-5.524 5.524c-7.811 7.811-20.474 7.811-28.284 0s-7.811-20.474 0-28.284l19.667-19.667c7.811-7.811 20.474-7.811 28.284 0z"></path>
                  </svg>
                </span>
                <span data-test="name" className="dropdown-list-label">Start Pomodoro Timer</span>
                
              </div>
            </li>
            <li data-v-20431cdb="" className="toggle-autofocus" data-test="autofocus">
              <div data-test="drop-down-wrapper" className="dropdown-list-label-wrapper">
                <span className="dropdown-list-icon-wrapper">
                  <svg data-v-20431cdb="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124.512 124.512" className="dropdown-list-icon icon icon-autofocus">
                    <path data-v-20431cdb="" d="M113.956 57.006l-97.4-56.2c-4-2.3-9 .6-9 5.2v112.5c0 4.6 5 7.5 9 5.2l97.4-56.2c4-2.401 4-8.2 0-10.5z"></path>
                  </svg>
                </span>
                <span data-test="name" className="dropdown-list-label">Turn on Autofocus</span>
                
              </div>
            </li>
          </ul>
        </div>
    )
}

export default TodoDropDown
