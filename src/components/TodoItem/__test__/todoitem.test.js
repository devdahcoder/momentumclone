import React from 'react';
import { render } from '@testing-library/react';
import TodoItem from "../TodoItem";
import TodoContextProvider from "../../../context/TodoContext";

test("should render in the document", () => {

    const { getByTestId } = render(<TodoContextProvider><TodoItem /></TodoContextProvider>);

    const todoItemElement = getByTestId("todo-item-container");

    expect(todoItemElement).toBeInTheDocument();

})