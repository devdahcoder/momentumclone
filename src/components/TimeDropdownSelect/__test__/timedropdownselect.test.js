import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import TimeDropDownSelect from "../TimeDropDownSelect";
import TimeContextProvider from "../../../context/TimeContext";

test("should render in the document", () => {

    const { getByTestId } = render(<TimeContextProvider><TimeDropDownSelect /></TimeContextProvider>);

    const timeDropDownSelectElement = getByTestId("time-drop-down-select");

    expect(timeDropDownSelectElement).toBeInTheDocument();

})
