import React from "react";
import { render } from "@testing-library/react";
import WeatherDailyItem from "../WeatherDailyItem";
import WeatherContextProvider from "../../../context/WeatherContext";

test("should render in the document",  () => {

    const { getByTestId } = render(<WeatherContextProvider><WeatherDailyItem /></WeatherContextProvider>);

    const weatherDailyItemElement = getByTestId("weather-daily-item");

    expect(weatherDailyItemElement).toBeInTheDocument();
    
})