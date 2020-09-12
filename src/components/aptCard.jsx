import React, {Component} from "react";

class AptCard extends Component {

    render() {
        return (
            <div key={this.props.id} className="card" style={{width: 18 + 'rem'}}>
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.title} <i className={this.getLikeClasses()}
                                              onClick={() => this.props.onLike(this.props.apartment)}> </i>
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        г. {this.props.city},
                        ул. {this.props.street},
                        д. {this.props.building},
                        кв. {this.props.apartmentNumber}</h6>
                    <p className="card-text">
                        площадь: {this.props.apartmentArea} {this.props.areaUnit}
                        <br/>
                        агент: {this.props.agentLastName} {this.props.agentFirstName} {this.props.agentMiddleName}
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