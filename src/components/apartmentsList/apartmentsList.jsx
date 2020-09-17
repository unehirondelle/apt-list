import React from "react";
import AptCard from "../aptCard/aptCard";
import {ApartmentContext} from "../../apartmentsContext";

export default function ApartmentsList({apartments}) {

    return (
        <div className="row mx-auto d-inline-flex" data-testid="apartmentsList">
            {apartments.map(apartment => (
                <ApartmentContext.Provider key={apartment.id} value={apartment}>
                    <AptCard key={apartment.id}
                        // onLike={onLike}
                    />
                </ApartmentContext.Provider>
            ))
            }
        </div>
    );
}