import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import BackgroundImageContextProvider from "../context/BackgroundImageContext";

test("should be in the document", () => {
    
    const { getByTestId } = render(<BackgroundImageContextProvider><App /></BackgroundImageContextProvider>);

    const divElement = getByTestId("main-app");

    expect(divElement).toBeInTheDocument();

});