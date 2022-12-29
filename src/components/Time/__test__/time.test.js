import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import Time from "../Time";
import TimeContextProvider from "../../../context/TimeContext";

test("should render in the document", () => {

    const { getByTestId } = render(<TimeContextProvider><Time /></TimeContextProvider>);

    const timeElement = getByTestId("time-section-container");

    expect(timeElement).toBeInTheDocument();

})
