import React from "react";
import { render } from "@testing-library/react";
import Weather from "../Weather";
import WeatherContextProvider from "../../../context/WeatherContext";

test("should render in the document", () => {

    const { getByTestId } = render(<WeatherContextProvider><Weather /></WeatherContextProvider>);

    const weatherElement = getByTestId("weather-top-right");

    expect(weatherElement).toBeInTheDocument();

})