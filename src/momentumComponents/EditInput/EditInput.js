import React, {useContext} from 'react';
import "./editinput.css";


// imported utils
import {TodoContext} from "../../context/TodoContext"



const EditInput = () => {

    const {
        newTodoInput, 
        isEditing, 
        handleEditSubmit,
        handleNewTodoInput,
    } = useContext(TodoContext);



    return (
        <section style={{ display: isEditing ? "block" : "none" }}>
            <form action="" onSubmit={handleEditSubmit}>
                <div className="input-form-display">
                    <label htmlFor="">What is your main Focus today?</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        onChange={handleNewTodoInput}
                        value={newTodoInput}
                        autoFocus
                    // { ...( isEditing ? { autoFocus: true } : { autoFocus: false } ) }
                    />
                </div>
            </form>
        
        </section>
    );
};

export default EditInput