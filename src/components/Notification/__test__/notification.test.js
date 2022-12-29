import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import Notification from "../Notification";

test("should render in the document", () => {

    const { getByTestId } = render(<Notification />);

    const notificationElement = getByTestId("notification-container");

    expect(notificationElement).toBeInTheDocument();

})
