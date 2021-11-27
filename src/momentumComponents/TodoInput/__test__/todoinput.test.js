import React from "react";
import { render } from "@testing-library/react";
import TodoInput from "../TodoInput";
import TodoContextProvider from "../../../context/TodoContext";

test("should render in the document", () => {
    
    const { getByTestId } = render(<TodoContextProvider><TodoInput /></TodoContextProvider>);

    const todoInputElement = getByTestId("todo-input-container");

    expect(todoInputElement).toBeInTheDocument();

});