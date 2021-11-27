import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import Quote from "../Quote";
import QuoteContextProvider from "../../../context/QuoteContext";

test("should render in the document", () => {

    const { getByTestId } = render(<QuoteContextProvider><Quote /></QuoteContextProvider>);

    const quoteElement = getByTestId("footer-center-container");

    expect(quoteElement).toBeInTheDocument();

})
