import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import InputName from "../InputName";
import GreetingContextProvider from "../../../context/GreetingContext"

test("should render in the document", () => {

    const { getByTestId } = render(<GreetingContextProvider><InputName /></GreetingContextProvider>);

    const inputNameElement = getByTestId("input-name-container");

    expect(inputNameElement).toBeInTheDocument();

})
