import React, {Component} from "react";
import AptCard from "./aptCard";

class ApartmentsList extends Component {
    render() {
        const {onLike, apartments} = this.props;
        return (
            <div className="row mx-auto d-inline-flex">
                {apartments.map(apartment => (
                    <AptCard key={apartment.id}
                             onLike={onLike}
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
}

export default ApartmentsList;