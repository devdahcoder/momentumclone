import React, {useState, useEffect} from 'react';
import "./input.css";

//imported packages
import {v4 as uuid} from "uuid";
import { useDispatch, useSelector } from 'react-redux';
import store from "store";

//imported utils
import {addTodo} from "../../Actions/todoAction";


const Input = () => {

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [input, setInput] = useState([])
  const todoList = useSelector(state => state.todo.todos);



  // handle submit for todo
  const handleTodoSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      const newTodo = {id: uuid(), value: inputValue, completed: false};
      setInput(newTodo);
    } else {
      alert("cant happen");
    }
    setInputValue("");
  }

  const handleTodoInput = (e) => {
    setInputValue(e.target.value);
  }

  useEffect(() => {
    const getTodo = store.get("todo");
    

    if (getTodo) {
      setInput(getTodo);
    }
    
  }, [])

  useEffect(() => {
    dispatch(addTodo(input));
  }, [input])


  useEffect(() => {
    store.set("todo", input);
  }, [input])


  


  return (
    <section style={{ display: todoList.length > 0 ? "none" : "block" }}>
      <form action="" onSubmit={handleTodoSubmit}>
        <div className="input-form-display">
            <label htmlFor="">What is your main Focus today?</label>
            <input
              type="text"
              name=""
              id=""
              onChange={handleTodoInput}
              value={inputValue}
            />
        </div>
      </form>
    
    </section>
  );
};

export default Input























































// import React, {useState, useEffect} from 'react';
// import "./input.css";

// //imported packages
// import {v4 as uuid} from "uuid";
// import { useDispatch, useSelector } from 'react-redux';
// import store from "store";

// //imported utils
// import {addTodo} from "../../Actions/todoAction";


// const Input = () => {

//   // const dispatch = useDispatch();
//   const [inputValue, setInputValue] = useState("");
//   // const todos = useSelector(state => state.todo.todos);


//   // handle submit for todo
//   const handleTodoSubmit = (e) => {
//     e.preventDefault();
//     if (inputValue.trim() !== "") {
//       const newTodo = {id: uuid(), value: inputValue, completed: false};
//       store.set("todo", newTodo);
//     } else {
//       alert("cant happen");
//     }
//     setInputValue("");
//   }


//   // useEffect(() => {
//   //     const todos = store.get("todo");
//   //     if (todos) {
//   //         dispatch(addTodo(todos));
//   //     }
//   // }, [])


//   //handle todo input
//   const handleTodoInput = (e) => {
//     setInputValue(e.target.value);
//   }

//   // useEffect(() => {
//   //   const getTodo = store.get("todo");
//   //   // if (getTodo) {
//   //   //     // dispatch(addTodo(todos));
//   //   //     // setTodoList(getTodo);
//   //   //     console.log(getTodo);
//   //   //     dispatch(addTodo(getTodo));
//   //   // }
//   //   dispatch(addTodo(getTodo));

//   // //   // setTodos(store.get("todo"));
//   // //   // console.log(store.get("todo"));
//   // }, [])


//   return (
//     <section /*style={{ display: todos.length === 0 ? "block" : "none" }}*/>
//       <form action="" onSubmit={handleTodoSubmit}>
//         <div className="input-form-display">
//             <label htmlFor="">What is your main Focus today?</label>
//             <input
//               type="text"
//               name=""
//               id=""
//               onChange={handleTodoInput}
//               value={inputValue}
//             />
//         </div>
//       </form>
    
//     </section>
//   );
// };

// export default Input
