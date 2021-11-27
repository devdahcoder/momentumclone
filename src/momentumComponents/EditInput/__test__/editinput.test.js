import React from "react";
import { render } from '@testing-library/react';
import EditInput from "../EditInput";


test("should render in the document", () => {

    const { getByTestId } = render(<EditInput />);

    const editInputElement = getByTestId("edit-input-container");

    expect(editInputElement).toBeInTheDocument();
    
})