import React from 'react';
import { render } from '@testing-library/react';
// import "@testing-library/jest-dom/extend-expect"
import TodoDropDown from "../TodoDropDown";
import TodoContextProvider from "../../../context/TodoContext";

test("should render in the document", () => {

    const { getByTestId } = render(<TodoContextProvider><TodoDropDown /></TodoContextProvider>);

    const todoDropDownElement = getByTestId("todo-drop-down-container");

    expect(todoDropDownElement).toBeInTheDocument();

})

