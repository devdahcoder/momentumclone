import React from "react";
import { render } from "@testing-library/react";
import WeatherDailyList from "../WeatherDailyList";
import WeatherContextProvider from "../../../context/WeatherContext";

test("should render in the document",  () => {

    const { getByTestId } = render(<WeatherContextProvider><WeatherDailyList /></WeatherContextProvider>);

    const weatherDailyListElement = getByTestId("weather-daily-list");

    expect(weatherDailyListElement).toBeInTheDocument();
    
})