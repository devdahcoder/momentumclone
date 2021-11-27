import React from 'react';
import { render } from '@testing-library/react';
import EditLocation from '../EditLocation';
import WeatherContextProvider from "../../../context/WeatherContext";
test("should render in the document", () => {
    
    const { getByTestId } = render(<WeatherContextProvider><EditLocation /></WeatherContextProvider>);

    const editLocationElement = getByTestId("current-location-group");

    expect(editLocationElement).toBeInTheDocument();

});