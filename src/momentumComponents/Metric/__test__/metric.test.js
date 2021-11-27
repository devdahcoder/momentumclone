import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import Metric from "../Metric";
import WeatherContextProvider from "../../../context/WeatherContext"

test("should render in the document", () => {

    const { getByTestId } = render(<WeatherContextProvider><Metric /></WeatherContextProvider>);

    const metricElement = getByTestId("weather-metric");

    expect(metricElement).toBeInTheDocument();

})
