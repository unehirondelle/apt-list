import React, {Component} from 'react';
import Jumbotron from "./components/jumbotron";
import ApartmentsList from "./components/apartmentsList";
import axios from "axios";

class App extends Component {
    state = {
        apartments: []
    };

    componentDidMount() {
        axios.get("../entities.json")
            .then(res => {
                const apartments = res.data.response;
                apartments.forEach(apartment => {
                    apartment.liked = false;
                })
                this.setState({apartments: apartments});
            });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron/>
                <main className="container mb-5">
                    <ApartmentsList
                        apartments={this.state.apartments}
                        onLike={this.handleLike}
                    />
                </main>
                <footer className="fixed-bottom bg-light text-center font-weight-bold py-3">Irina Plaksina &copy; 2020
                </footer>
            </React.Fragment>
        );
    }

    handleLike = aptLiked => {
        let apartmentsList = [...this.state.apartments];
        const index = apartmentsList.indexOf(aptLiked);
        apartmentsList[index] = {...aptLiked};
        let likedValue = apartmentsList[index].liked;
        if (likedValue === false) {
            apartmentsList[index].liked = true;
            this.setState({apartments: apartmentsList});
        } else {
            apartmentsList[index].liked = false;
            this.setState({apartments: apartmentsList});
        }
    }
}

export default App;
