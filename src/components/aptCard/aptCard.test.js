import React from 'react';
import ReactDOM from 'react-dom';
import {render} from "@testing-library/react";
import AptCard from "./aptCard";


it("the ApartmentCard is rendered successfully", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AptCard/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("renders the AptCard correctly", () => {

    const {getByTestId} = render(<AptCard className="card"/>);
    const ancestor = getByTestId("apartmentCard");
    const descendant = getByTestId("adName");
    expect(getByTestId('apartmentCard')).toBeVisible();
    expect(ancestor).toContainElement(descendant);
    expect(descendant).not.toContainElement(ancestor);
});