import React from 'react';
import { render } from '@testing-library/react';
import DateWeather from '../DateWeather';
import WeatherContextProvider from "../../../context/WeatherContext";

test("should render in the document", () => {
    
    const { getByTestId } = render(<WeatherContextProvider><DateWeather /></WeatherContextProvider>);

    const divElement = getByTestId("date-weather-header");

    expect(divElement).toBeInTheDocument();

    expect(divElement).toMatchSnapshot();

});