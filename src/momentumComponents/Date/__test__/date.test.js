import React from 'react';
import { render } from '@testing-library/react';
import Date from "../Date";
import DateContextProvider from "../../../context/DateContext";

test("should render in the document", () => {

    const { getByTestId } = render(<DateContextProvider><Date /></DateContextProvider>);

    const dateElement = getByTestId("date-top-left");

    expect(dateElement).toBeInTheDocument();

})