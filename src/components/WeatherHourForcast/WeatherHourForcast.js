import React, { useContext, useRef } from "react";
import "../../style/global.scss";
import "./weatherforcast.css";

// imported components
import EditLocation from "../EditLocation/EditLocation";
import WeatherDailyList from "../WeatherDailyList/WeatherDailyList";

// imported utils
import { GreetingContext } from "../../context/GreetingContext";
import { WeatherContext } from "../../context/WeatherContext";
import { useOnClickOutside } from "../../hooks";

const WeatherHourForcast = () => {
	const {
		daysWeatherDropdown,
		weatherDailyMore,
		toggleWeatherDailyMore,
		dropDownCurrentWeather,
		weather,
		toggleEditWeather,
		editWeather,
		setDaysWeatherDropdown,
	} = useContext(WeatherContext);

	const { hour } = useContext(GreetingContext);

	const renderIcon = () => {
		let weatherIcon =
			hour > 6 && hour < 18
				? dropDownCurrentWeather?.Day?.Icon
				: dropDownCurrentWeather?.Night?.Icon;

		if (weatherIcon) {
			return (
				<img
					src={
						process.env.PUBLIC_URL +
						"/images/weather/" +
						weatherIcon +
						".png"
					}
					alt="weather-icon"
				/>
			);
		}
	};
	const hourlyForecastRef = useRef(null);
	useOnClickOutside(hourlyForecastRef, () => setDaysWeatherDropdown(false));

	return (
		<div
			ref={hourlyForecastRef}
			data-testid="weatherHourForcast"
			style={{ display: daysWeatherDropdown ? "block" : "none" }}
			className="app-wrapper nipple nipple-top-right"
		>
			<div className="app weather-app ">
				<section className="weather-current">
					<header className="weather-current-header">
						<div className="weather-current-location">
							<div
								className={`weather-location ${
									editWeather ? "hide-weather-location" : ""
								}`}
							>
								<span
									className="weather-location-name"
									title={
										weather &&
										weather.location &&
										weather.location.AdministrativeArea &&
										weather.location.AdministrativeArea
											.EnglishName
									}
									data-test="location-name"
								>
									{weather &&
										weather.location &&
										weather.location.AdministrativeArea &&
										weather.location.AdministrativeArea
											.EnglishName}
								</span>

								<i className="loading-icon"></i>

								<span
									onClick={toggleEditWeather}
									className="weather-location-icon weather-location-edit"
									data-test="edit-icon"
								>
									<i className="icon-edit"></i>
								</span>
							</div>

							<EditLocation />

							<span
								className={`weather-current-conditions ${
									editWeather ? "hide-weather-location" : ""
								}`}
							>
								{dropDownCurrentWeather &&
									dropDownCurrentWeather.Day &&
									dropDownCurrentWeather.Day.IconPhrase}
							</span>
						</div>

						<div
							onClick={toggleWeatherDailyMore}
							className="current-location-more"
						>
							<div
								className="icon-wrapper current-location-more-toggle"
								data-test="more"
							>
								<svg
									className={`icon icon-ellipsis more-icon ${
										editWeather ? "hide-more-icon" : ""
									}`}
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 60 60"
								>
									<path d="M8 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM52 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"></path>
								</svg>
							</div>

							<div
								style={{
									display: weatherDailyMore
										? "block"
										: "none",
								}}
								className="dropdown more-dropdown"
							>
								<ul className="forecast-dropdown-list">
									<li
										className="toggle-hourly has-toggle-switch"
										data-test="toggle-hourly-button"
									>
										<div>Hourly forecast</div>

										<span className="toggle-switch">
											<input
												type="checkbox"
												name="check"
												id=""
												className="time-format-checkbox"
												{...(true
													? { checked: true }
													: {})}
											/>
										</span>
									</li>

									<li
										className="toggle-details has-toggle-switch"
										data-test="toggle-details-button"
									>
										<div>Extra weather info</div>

										<span className="toggle-switch">
											<input
												type="checkbox"
												name="check"
												id=""
												className="time-format-checkbox"
												{...(true
													? { checked: true }
													: {})}
											/>
										</span>
									</li>

									<li className="line"></li>

									<li
										className="toggle-metric has-toggle-switch on"
										data-test="toggle-metrics-button"
									>
										Metric units
										<span className="toggle-switch">
											<input
												type="checkbox"
												name="check"
												id=""
												className="time-format-checkbox"
												{...(true
													? { checked: true }
													: {})}
											/>
										</span>
									</li>

									<li
										className="weather-location-edit-menu"
										data-test="edit-dropdown"
									>
										Edit location
									</li>
								</ul>
							</div>
						</div>
					</header>

					<div className="weather-current-temp-row">
						<div
							className="weather-current-temp-wrapper toggle-hourly"
							data-test="toggle-hourly-div"
						>
							<span
								className="icon icon-weather"
								data-icon="H"
								title={
									dropDownCurrentWeather &&
									dropDownCurrentWeather.Day &&
									dropDownCurrentWeather.Day.IconPhrase
								}
							>
								{renderIcon()}
							</span>

							<span className="weather-current-temp">
								{dropDownCurrentWeather &&
									dropDownCurrentWeather.Temperature &&
									dropDownCurrentWeather.Temperature
										.Maximum &&
									dropDownCurrentWeather.Temperature.Maximum.Value.toFixed()}
								°
							</span>
						</div>
					</div>
				</section>

				<WeatherDailyList />

				{/* <div className="weather-empty empty">
                    <div className="title">See the weather for your area</div>
                    <div className="description">Enter your location to get started</div>
                    <button className="button set-manual-location">
                        <div className="description" data-test="manual-location">Enter Location</div>
                    </button>
                </div>
                <div className="weather-backround-icon">
                    <div>H</div>
                </div> */}

				<section className="weather-row weather-attribution">
					<a
						className="weather-attribution-link"
						href="https://www.accuweather.com/en/ng/apapa/942887/current-weather/942887?lang=en-us&amp;partner=momentum"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="weather-attribution-logo"
							src={`${
								process.env.PUBLIC_URL +
								"/images/logo-accuweather.png"
							}`}
							alt="accurweather"
						/>{" "}
						More weather →
					</a>
				</section>
			</div>
		</div>
	);
};

export default WeatherHourForcast;
