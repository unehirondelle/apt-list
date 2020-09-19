import React, {useContext} from "react";
import ApartmentPicture from "../../assets/apartment.jpg";
import {ApartmentContext} from "../../state/context";
import LikeToggle from "../likeToggle/likeToggle";

export default function AptCard() {
    const apartment = useContext(ApartmentContext);
    const {title, address, area, unit} = apartment.attributes;
    const {city, street, house, room} = address;
    const {first_name, middle_name, last_name} = apartment.relationships.attributes;

    return (
        <div key={apartment.id}
             className="card col-sm-12 col-md-5 border-0 m-sm-1 m-md-4 p-0 justify-content-center align-middle"
             data-testid="apartmentCard"
        >
            <img className="card-img-top img-fluid" src={ApartmentPicture} alt={`Apartment # ${apartment.id}`}/>
            <div className="card-body">
                <h5 className="card-title" data-testid="adName">
                    {title}
                    <LikeToggle key={apartment.id} />
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    г. {city},
                    <br/>
                    ул. {street},
                    д. {house},
                    кв. {room}</h6>
                <p className="card-text">
                    <i className="bx bxl-codepen"/> {area} {unit}
                    <br/>
                    <i className="bx bx-user"/> {last_name} {first_name} {middle_name}
                </p>
            </div>
        </div>
    );

}