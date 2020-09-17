import React from "react";
import AptCard from "../aptCard/aptCard";

export default function ApartmentsList({apartments}) {

    return (
        <div className="row mx-auto d-inline-flex" data-testid="apartmentsList">
            {apartments.map(apartment => (
                <AptCard key={apartment.id}
                         // onLike={onLike}
                         liked={apartment.liked}
                         apartment={apartment}
                         id={apartment.id}
                         title={apartment.attributes.title}
                         city={apartment.attributes.address.city}
                         street={apartment.attributes.address.street}
                         building={apartment.attributes.address.house}
                         apartmentNumber={apartment.attributes.address.room}
                         apartmentArea={apartment.attributes.area}
                         areaUnit={apartment.attributes.unit}
                         agentFirstName={apartment.relationships.attributes.first_name}
                         agentMiddleName={apartment.relationships.attributes.middle_name}
                         agentLastName={apartment.relationships.attributes.last_name}
                />
            ))
            }
        </div>
    );
}