import React from 'react';
import { render } from '@testing-library/react';
import DateWeather from '../DateWeather';

test("should render in the document", () => {
    
    const { getByTestId } = render(<DateWeather />);

    const divElement = getByTestId("date-weather-header");

    expect(divElement).toBeInTheDocument();

});