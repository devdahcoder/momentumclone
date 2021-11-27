import React from 'react';
import { render } from '@testing-library/react';
import TwentyFourHours from "../TwentyFourHours";

test("should render in the document", () => {

    const { getByTestId } = render(<TwentyFourHours />);

    const twentyFourHoursElement = getByTestId("twelve-four-hours-time");

    expect(twentyFourHoursElement).toBeInTheDocument();

})