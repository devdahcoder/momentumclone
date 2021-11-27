import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import TimeFormatSwitch from "../TimeFormatSwitch";
import TimeContextProvider from "../../../context/TimeContext";

test("should render in the document", () => {

    const { getByTestId } = render(<TimeContextProvider><TimeFormatSwitch /></TimeContextProvider>);

    const timeFormatSwitchElement = getByTestId("time-format-checkbox-container");

    expect(timeFormatSwitchElement).toBeInTheDocument();

})
