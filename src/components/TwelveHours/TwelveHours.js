import React from "react";
import "../../style/global.scss";

const TwelveHours = ({ getHour, getMinute }) => {
	return (
		<div data-testid="twelve-hours-time" className="time">
			{getHour}:{getMinute}
		</div>
	);
};

export default TwelveHours;
