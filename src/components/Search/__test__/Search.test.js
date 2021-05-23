import React from "react";
import ReactDOM from "react-dom";
import Search from "../Search";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Search/>, div)
})

it("renders Search correctly", () => {
    const { getByTestId } = render(<Search/>)
    const contentInput = getByTestId("input");
    
    fireEvent.change(contentInput, {
        target: { value: "Batman" }
      });

    expect(contentInput.value).toBe('Batman')
})