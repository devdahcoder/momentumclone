import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import Greeting from "../Greeting";
import GreetingContextProvider from "../../../context/GreetingContext"

test("should render in the document", () => {

    const { getByTestId } = render(<GreetingContextProvider><Greeting /></GreetingContextProvider>);

    const greetingElement = getByTestId("greeting-section");

    expect(greetingElement).toBeInTheDocument();

})

test("should be a punctuation", () => {
    
    const { getByTestId } = render(<GreetingContextProvider><Greeting /></GreetingContextProvider>);

    const punctuationElement = getByTestId("punctuation");

    expect(punctuationElement).toHaveTextContent(".");
    
})