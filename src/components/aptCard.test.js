import React from 'react';
import ReactDOM from 'react-dom';
import {render} from "@testing-library/react";
import {toBeVisible} from "@testing-library/jest-dom";
import AptCard from "./aptCard";


it("the ApartmentCard is rendered successfully", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AptCard/>, div);
    ReactDOM.unmountComponentAtNode(div);
})

it("renders the AptCard correctly", () => {

    const {getByTestId} = render(<AptCard className="card"/>);
    expect(getByTestId('apartmentCard')).toBeVisible();
})