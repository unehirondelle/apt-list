import React, {Component} from "react";
import ApartmentPicture from "../assets/apartments/deborah-cortelazzi-gREquCUXQLI-unsplash.jpg";

class AptCard extends Component {

    render() {
        return (
            <div key={this.props.id} className="card col-4 border-0 m-3 justify-content-center align-middle ">
                <img className="card-img-top img-thumbnail img-fluid" src={ApartmentPicture} alt={`Apartment # ${this.props.id}`}/>
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.title} <i className={this.getLikeClasses()}
                                              onClick={() => this.props.onLike(this.props.apartment)}> </i>
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        г. {this.props.city},
                        <br/>
                        ул. {this.props.street},
                        д. {this.props.building},
                        кв. {this.props.apartmentNumber}</h6>
                    <p className="card-text">
                        <i className="bx bxl-codepen"></i> {this.props.apartmentArea} {this.props.areaUnit}
                        <br/>
                        <i className="bx bx-user"></i> {this.props.agentLastName} {this.props.agentFirstName} {this.props.agentMiddleName}
                    </p>
                </div>
            </div>
        );
    }

    getLikeClasses() {
        let classes = "bx ";
        classes += (this.props.liked === false) ? "bx-heart" : "bxs-heart";
        return classes;
    }
}

export default AptCard;