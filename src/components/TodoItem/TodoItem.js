import React, { useContext } from "react";
import "../../style/global.scss";
import "./todoitem.css";

// imported utils
import { TodoContext } from "../../context/TodoContext";

// imported component
import TodoDropDown from "../TodoDropDown/TodoDropDown";

const TodoItem = ({ todo }) => {
	const { toggleTodo, todoDropdown, toggleTodoDropdown } =
		useContext(TodoContext);

	const { id, value, completed } = todo;

	return (
		<div
			data-testid="todo-item-container"
			className="todo-list-item-container"
		>
			<span className="side-col todo-checkbox-container">
				<span
					style={{ opacity: completed ? "1" : "" }}
					data-test="complete"
					className="control todo-checkbox"
				>
					<input
						onClick={() => toggleTodo(id)}
						type="checkbox"
						name=""
						id=""
						{...(completed
							? { checked: true }
							: { checked: false })}
					/>

					<label
						style={{ opacity: completed ? "1" : "" }}
						htmlFor=""
					></label>
				</span>
			</span>

			<span
				className="today-todo"
				style={{ textDecoration: completed ? "line-through" : "none" }}
			>
				{value}
			</span>

			<div
				onBlur={toggleTodoDropdown}
				className="side-col todo-delete-container"
			>
				<div
					style={{ opacity: completed || todoDropdown ? "1" : "" }}
					data-test="delete"
					className="control todo-delete"
				>
					<div
						onClick={toggleTodoDropdown}
						className="icon-wrapper dash-icon-wrapper"
					>
						<svg
							style={{
								opacity: completed || todoDropdown ? "1" : "",
							}}
							height="17"
							width="17"
							data-v-c8d4d4da=""
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 60 60"
							className="icon icon-ellipsis more-icon dash-icon"
						>
							<path
								data-v-c8d4d4da=""
								d="M8 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM52 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"
							></path>
						</svg>
					</div>

					<TodoDropDown todo={todo} />
				</div>
			</div>
		</div>
	);
};

export default TodoItem;
