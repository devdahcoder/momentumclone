import React from "react";
import { render } from "@testing-library/react";
import WeatherHourForcast from "../WeatherHourForcast";
import WeatherContextProvider from "../../../context/WeatherContext";

test("should render in the document",  () => {

    const { getByTestId } = render(<WeatherContextProvider><WeatherHourForcast /></WeatherContextProvider>);

    const weatherHourForcast = getByTestId("weatherHourForcast");

    expect(weatherHourForcast).toBeInTheDocument();
    
})