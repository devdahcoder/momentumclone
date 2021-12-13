import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import InputName from "../InputName";
import GreetingContextProvider from "../../../context/GreetingContext"

test("should render in the document", () => {

    const { getByTestId } = render(<GreetingContextProvider><InputName /></GreetingContextProvider>);

    const inputNameElement = getByTestId("input-name-container");

    expect(inputNameElement).toHaveClass("input-name-container");

    expect(inputNameElement).toBeInTheDocument();

    expect(inputNameElement).toMatchSnapshot();

})


test("should render name input", () => {

    const { getByTestId } = render(<GreetingContextProvider><InputName /></GreetingContextProvider>);

    const inputName = getByTestId("input-name");

    fireEvent.change(inputName, { target: { value: "John" } });

    expect(inputName).toMatchSnapshot();

    expect(inputName).toBeInTheDocument();

});