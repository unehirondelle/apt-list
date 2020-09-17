import React, {useContext} from "react";
import ApartmentPicture from "../../assets/apartment.jpg";
import {ApartmentContext} from "../../context";

export default function AptCard() {
    const apartment = useContext(ApartmentContext);

    return (
        <div key={apartment.id}
             className="card col-sm-12 col-md-5 border-0 m-sm-1 m-md-4 p-0 justify-content-center align-middle"
             data-testid="apartmentCard"
        >
            <img className="card-img-top img-fluid" src={ApartmentPicture} alt={`Apartment # ${apartment.id}`}/>
            <div className="card-body">
                <h5 className="card-title" data-testid="adName">
                    {apartment.attributes.title}
                    {/*<i className={getLikeClasses()}
                                          onClick={() => onLike(apartment)}> </i>*/}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    г. {apartment.attributes.address.city},
                    <br/>
                    ул. {apartment.attributes.address.street},
                    д. {apartment.attributes.address.house},
                    кв. {apartment.attributes.address.room}</h6>
                <p className="card-text">
                    <i className="bx bxl-codepen"></i> {apartment.attributes.area} {apartment.attributes.unit}
                    <br/>
                    <i className="bx bx-user"></i> {apartment.relationships.attributes.last_name} {apartment.relationships.attributes.first_name} {apartment.relationships.attributes.middle_name}
                </p>
            </div>
        </div>
    );

    /* getLikeClasses()
     {
         let classes = "bx ";
         classes += (this.props.liked === false) ? "bx-heart" : "bxs-heart";
         return classes;
     }*/
}