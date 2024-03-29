import React, { useContext } from "react";
import "../../style/global.scss";
import "./greeting.css";

// imported components
import GreetingDropdown from "../GreetingDropdown/GreetingDropdown";
import InputName from "../InputName/InputName";

// imported utils
import { GreetingContext } from "../../context/GreetingContext";

const Greeting = () => {
	const {
		name,
		editName,
		isEditingName,
		greeting,
		greetingDropdown,
		toggleGreetingDropdown,
	} = useContext(GreetingContext);

	return (
		<div data-testid="greeting-section" className="greeting-section">
			<div className="greeting-display">
				<div className="greeting-side-col"></div>

				<div className="greeting-text-container">
					<span className="greeting-text-content">
						<span className="greeting-message">
							{name ? greeting : "Please enter your name"}{" "}
						</span>

						<span className="greeting-name-container">
							<span className="greeting-name-wrapper">
								{
									// name && name ? <span onDoubleClick={editName} className="greeting-user-name" data-test="name">{name && name}</span> : <InputName />
									isEditingName || !name ? (
										<InputName />
									) : (
										<span
											onDoubleClick={editName}
											className="greeting-user-name"
											data-test="name"
										>
											{name}
										</span>
									)
								}
							</span>

							<span
								data-testid="punctuation"
								className="punctuation"
							>
								.
							</span>
						</span>
					</span>
				</div>

				<div className="greeting-side-col">
					<div className="greeting-menu-display more-dash">
						<div
							onClick={toggleGreetingDropdown}
							className="greeting-menu-wrapper icon-wrapper dash-icon-wrapper more-toggle"
						>
							<svg
								style={{ opacity: greetingDropdown ? "1" : "" }}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 60 60"
								className="icon icon-ellipsis more-icon dash-icon"
							>
								<path d="M8 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM52 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"></path>
							</svg>
						</div>

						<GreetingDropdown />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Greeting;
