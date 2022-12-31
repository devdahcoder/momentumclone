import React, { useContext } from "react";
import "../../style/global.scss";
import "./timeformatswitch.css";

//imported utils
import { TimeContext } from "../../context/TimeContext";

const TimeFormatSwitch = () => {
	const { toggle24DigitalTime } = useContext(TimeContext);

	return (
		<div
			data-testid="time-format-checkbox-container"
			className="time-format-checkbox-container"
		>
			<input
				type="checkbox"
				name="check"
				id=""
				className="time-format-checkbox"
				{...(toggle24DigitalTime
					? { checked: true }
					: { checked: false })}
			/>
		</div>
	);
};

export default TimeFormatSwitch;
