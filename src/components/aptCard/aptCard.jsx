import React from "react";
import ApartmentPicture from "../../assets/apartment.jpg";

export default function AptCard({key, liked, apartment, id, title, city, street, building, apartmentNumber, apartmentArea, areaUnit, agentFirstName, agentMiddleName, agentLastName}) {

    return (
        <div key={id}
             className="card col-sm-12 col-md-5 border-0 m-sm-1 m-md-4 p-0 justify-content-center align-middle"
             data-testid="apartmentCard"
        >
            <img className="card-img-top img-fluid" src={ApartmentPicture} alt={`Apartment # ${id}`}/>
            <div className="card-body">
                <h5 className="card-title" data-testid="adName">
                    {title}
                    {/*<i className={getLikeClasses()}
                                          onClick={() => onLike(apartment)}> </i>*/}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    г. {city},
                    <br/>
                    ул. {street},
                    д. {building},
                    кв. {apartmentNumber}</h6>
                <p className="card-text">
                    <i className="bx bxl-codepen"></i> {apartmentArea} {areaUnit}
                    <br/>
                    <i className="bx bx-user"></i> {agentLastName} {agentFirstName} {agentMiddleName}
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