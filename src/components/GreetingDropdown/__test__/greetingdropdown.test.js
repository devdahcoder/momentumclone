import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import GreetingDropDown from "../GreetingDropdown";
import GreetingContextProvider from "../../../context/GreetingContext"

test("should render in the document", () => {

    const { getByTestId } = render(<GreetingContextProvider><GreetingDropDown /></GreetingContextProvider>);

    const greetingDropDownElement = getByTestId("greeting-more-dropdown");

    expect(greetingDropDownElement).toBeInTheDocument();

})
