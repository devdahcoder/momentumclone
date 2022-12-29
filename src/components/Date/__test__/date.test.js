import React from 'react';
import { render } from '@testing-library/react';
import Date from "../Date";
import DateContextProvider from "../../../context/DateContext";

test("should render in the document", () => {

    const { getByTestId } = render(<DateContextProvider><Date /></DateContextProvider>);

    const dateElement = getByTestId("date-element");

    expect(dateElement).toBeInTheDocument();

    expect(dateElement).toHaveClass("date-top-left");

    expect(dateElement).toMatchSnapshot();

})

test("should render in the document", () => {

    const { getByTestId } = render(<DateContextProvider><Date /></DateContextProvider>);

    const dateElement = getByTestId("show-fade");

    expect(dateElement).toBeInTheDocument();

    expect(dateElement).toHaveClass("app-container weather show show-fade-in");

})

test("should render in the document", () => {

    const { getByTestId } = render(<DateContextProvider><Date /></DateContextProvider>);

    const dateElement = getByTestId("data-metric-item-test");

    expect(dateElement).toBeInTheDocument();

    expect(dateElement).toHaveClass("app-dash date-metric-item");

})


test ("should render in the document", () => {
    
    const { getByTestId } = render(<DateContextProvider><Date /></DateContextProvider>);

    const dateElement = getByTestId("date-unit");

    expect(dateElement).toBeInTheDocument();

    expect(dateElement).toHaveClass("unit hide");
    
})
