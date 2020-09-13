import React from 'react';
import ReactDOM from 'react-dom';
import {render} from "@testing-library/react";
import {toHaveTextContent} from "@testing-library/jest-dom";
import ApartmentsList from "./apartmentsList";


it("the AppartmentsList is rendered successfully", () => {
    const props = {
        apartments: [{
            "id": 1,
            "attributes": {
                "title": "3-х комнатная на Минской",
                "address": {
                    "city": "Тюмень",
                    "street": "Минская",
                    "house": "3a",
                    "room": "123"
                },
                "area": 134,
                "unit": "квм"
            },
            "relationships": {
                "attributes": {
                    "first_name": "Василий",
                    "last_name": "Дроздов",
                    "middle_name": "Михайлович"
                }
            }
        },
            {
                "id": 2,
                "attributes": {
                    "title": "1 комнатная на Барабинской",
                    "address": {
                        "city": "Тюмень",
                        "street": "Барабинская",
                        "house": "12",
                        "room": "45"
                    },
                    "area": 34,
                    "unit": "квм"
                },
                "relationships": {
                    "attributes": {
                        "first_name": "Михаил",
                        "last_name": "Иванов",
                        "middle_name": "Демидович"
                    }
                }
            }]
    };
    const div = document.createElement("div");
    ReactDOM.render(<ApartmentsList {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
});