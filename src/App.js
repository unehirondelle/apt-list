import React, {Component} from 'react';
import NavBar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import ApartmentsList from "./components/apartmentsList";
import axios from "axios";

class App extends Component {
    state = {
        apartments: []
    };

    componentDidMount() {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://raw.githubusercontent.com/FrolovArkadiy/task_for_middle/master/entities.json";
        axios.get(proxyUrl + url)
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
                <NavBar/>
                <Jumbotron/>
                <main className="container">
                    <ApartmentsList
                        apartments={this.state.apartments}
                        onLike={this.handleLike}
                    />
                </main>
                <footer className="fixed-bottom text-center font-weight-bold p-3">Irina Plaksina &copy; 2020</footer>
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
