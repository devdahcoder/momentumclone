import React from "react";
import "../../style/global.scss";

const TwentyFourHours = ({ getTwentyFourHour, getMinute }) => {
	return (
		<div data-testid="twelve-four-hours-time" className="time">
			{getTwentyFourHour}:{getMinute}
		</div>
	);
};

export default TwentyFourHours;
