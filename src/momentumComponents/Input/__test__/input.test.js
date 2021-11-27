import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import Input from "../Input";
import TodoContextProvider from "../../../context/TodoContext"

test("should render in the document", () => {

    const { getByTestId } = render(<TodoContextProvider><Input /></TodoContextProvider>);

    const inputElement = getByTestId("todo-input-container");

    expect(inputElement).toBeInTheDocument();

})
