import React from 'react';
import { render } from '@testing-library/react';
import PageOverlay from "../PageOverlay";
import BackgroundImageContextProvider from "../../context/BackgroundImageContext";

test("should render in the document", () => {
    
    const { getByTestId } = render(<BackgroundImageContextProvider><PageOverlay /></BackgroundImageContextProvider>);

    const divElement = getByTestId("overlay");

    expect(divElement).toBeInTheDocument();

});