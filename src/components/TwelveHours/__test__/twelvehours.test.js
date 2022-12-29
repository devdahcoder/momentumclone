import React from 'react';
import { render } from '@testing-library/react';
import TwelveHours from "../TwelveHours";

test("should render in the document", () => {

    const { getByTestId } = render(<TwelveHours />);

    const twelveHoursElement = getByTestId("twelve-hours-time");

    expect(twelveHoursElement).toBeInTheDocument();

})