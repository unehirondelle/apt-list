import React, {Component} from "react";
import axios from "axios";

class AptCard extends Component {
    state = {
        apartments: [],
        liked: false
    };

    componentDidMount() {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://raw.githubusercontent.com/FrolovArkadiy/task_for_middle/master/entities.json";
        axios.get(proxyUrl + url)
            .then(res => {
                const apartments = res.data.response;
                console.log("data", res.data.response);
                this.setState({apartments: apartments});

            });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.apartments.map(apartment => (
                    <div className="card" style={{width: 18 + 'rem'}}>
                        <div className="card-body">
                            <h5 className="card-title">
                                {apartment.attributes.title} <i className={this.getLikeClasses()}
                                                                onClick={() => this.handleLike()}> </i>
                            </h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                                г. {apartment.attributes.address.city},
                                ул. {apartment.attributes.address.street},
                                д. {apartment.attributes.address.house},
                                кв. {apartment.attributes.address.room}</h6>
                            <p className="card-text">
                                площадь: {apartment.attributes.area} {apartment.attributes.unit}
                                <br/>
                                агент: {apartment.relationships.attributes.last_name} {apartment.relationships.attributes.first_name} {apartment.relationships.attributes.middle_name}
                            </p>
                        </div>
                    </div>
                ))
                }
            </React.Fragment>
        );
    }

    getLikeClasses() {
        let classes = "bx ";
        classes += (this.state.liked === false) ? "bx-heart" : "bxs-heart";
        return classes;
    }

    handleLike() {
        let checked = this.state.liked;
        if (checked === false) {
            checked = true;
            this.setState({liked: checked});
        } else {
            checked = false;
            this.setState({liked: checked});
        }
    }
}

export default AptCard;