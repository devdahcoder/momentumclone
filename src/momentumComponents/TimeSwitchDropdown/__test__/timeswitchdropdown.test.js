import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import TimeSwitchDropdown from "../TimeSwitchDropdown";
import TimeContextProvider from "../../../context/TimeContext";

test("should render in the document", () => {

    const { getByTestId } = render(<TimeContextProvider><TimeSwitchDropdown /></TimeContextProvider>);

    const timeSwitchDropDownElement = getByTestId("right-dropdown-container");

    expect(timeSwitchDropDownElement).toBeInTheDocument();

})
