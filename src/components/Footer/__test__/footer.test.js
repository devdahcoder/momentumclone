import React from "react";
import { render } from "@testing-library/react";
import Footer from "../Footer";
import QuoteContextProvider from "../../../context/QuoteContext";
import BackgroundImageContextProvider from "../../../context/BackgroundImageContext";

test("should render in the document", () => {

    const { getByTestId } = render(
        
        <BackgroundImageContextProvider>

            <QuoteContextProvider>

                <Footer />

            </QuoteContextProvider>

        </BackgroundImageContextProvider>

    );

    const footerElement = getByTestId("footer");

    expect(footerElement).toBeInTheDocument();
});