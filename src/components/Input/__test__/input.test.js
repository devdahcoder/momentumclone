import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import Input from "../Input";
import TodoContextProvider from "../../../context/TodoContext"

test("should render in the document", () => {

    const { getByTestId } = render(<TodoContextProvider><Input /></TodoContextProvider>);

    const inputElement = getByTestId("todo-input-container");

    expect(inputElement).toBeInTheDocument();

    expect(inputElement).toHaveClass("main-todo-input-form-section");

})

// testing input
test("should render input", () => {
    
    const { getByTestId } = render(<TodoContextProvider><Input /></TodoContextProvider>);

    const todoInput = getByTestId("name-input");

    fireEvent.change(todoInput, { target: { value: "test" } });

    expect(todoInput).toBeInTheDocument();

    expect(todoInput).toHaveClass("name editing pulse");
    
})
