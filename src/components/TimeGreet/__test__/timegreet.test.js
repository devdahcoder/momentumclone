import React from 'react';
import {render} from '@testing-library/react';
import TimeGreet from '../TimeGreet';
import TimeContextProvider from "../../../context/TimeContext";

test("should render in the document", () => {

    const { getByTestId } = render(<TimeContextProvider><TimeGreet /></TimeContextProvider>);

    const timeGreetingElement = getByTestId("time-greet-container");

    expect(timeGreetingElement).toBeInTheDocument();

})