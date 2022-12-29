import React, { useContext, useEffect, useState } from "react";
import "./style/app.scss";

// imported components
import Overlay from "./PageOverlay/PageOverlay";
import DateWeather from "./components/DateWeather/DateWeather";
import Footer from "./components/Footer/Footer";
import TimeGreet from "./components/TimeGreet/TimeGreet";
import TodoInput from "./components/TodoInput/TodoInput";

// imported utils
import BackgroundImageContextProvider, {
	BackgroundImageContext,
} from "./context/BackgroundImageContext";
import QuoteContextProvider from "./context/QuoteContext";
import TimeContextProvider from "./context/TimeContext";
import TodoContextProvider from "./context/TodoContext";

function App() {
	const { backgroundImage, backgroundIsLoading } = useContext(
		BackgroundImageContext
	);

	// const [isLoading, setIsLoading] = useState(true);

	// useEffect(() => {

	//   setIsLoading(false);

	// }, [])

	// console.log(isLoading);

	return (
		<div data-testid="main-app" className="">
			<BackgroundImageContextProvider>
				<Overlay />
			</BackgroundImageContextProvider>

			<div className="main-app opacity-100">
				<div className="backgrounds">
					<div className="background">
						<div data-test="background-item" className="background-item" style={{backgroundImage: backgroundImage ? `url(${backgroundImage?.urls?.full})` : ""}}></div>
					</div>

					<div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/download.png'})` }} className="background-overlay"></div>
				</div>

				<div
					className={`show-app ${
						backgroundIsLoading ? "show-app-component" : ""
					}`}
				>
					<div className="region full"></div>

					<DateWeather />

					<div className="center-above"></div>

					<TimeContextProvider>
						<TimeGreet />
					</TimeContextProvider>

					<TodoContextProvider>
						<TodoInput />
					</TodoContextProvider>

					<QuoteContextProvider>
						<Footer />
					</QuoteContextProvider>
				</div>

				{/* <div className="overlay drop-overlay">
            <p>Drop to upload backgrounds <span className="badge badge-plus">PLUS</span></p>
          </div> */}
			</div>
		</div>
	);
}

export default App;
