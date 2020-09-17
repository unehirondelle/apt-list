import React from "react";
import AptCard from "../aptCard/aptCard";
import {ApartmentContext} from "../../context";

export default function ApartmentsList({apartments}) {

    return (
        <div className="row mx-auto d-inline-flex" data-testid="apartmentsList">
            {apartments.map(apartment => (
                <ApartmentContext.Provider value={apartment}>
                    <AptCard key={apartment.id}
                        // onLike={onLike}
                    />
                </ApartmentContext.Provider>
            ))
            }
        </div>
    );
}