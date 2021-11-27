import React from 'react';
import { render } from '@testing-library/react';
import TodoItem from "../TodoGreetMessage";

test("should render in the document", () => {

    const { getByTestId } = render(<TodoItem />);

    const todoGreetingMessageElement = getByTestId("todo-greeting-message-container");

    expect(todoGreetingMessageElement).toBeInTheDocument();

})