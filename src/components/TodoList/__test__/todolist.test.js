import React from 'react';
import { render } from '@testing-library/react';
import TodoList from "../TodoList";
import TodoContextProvider from "../../../context/TodoContext";

test("should render in the document", () => {

    const { getByTestId } = render(<TodoContextProvider><TodoList /></TodoContextProvider>);

    const todoListElement = getByTestId("todo-list-container");

    expect(todoListElement).toBeInTheDocument();

})