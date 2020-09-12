import React, {Component} from 'react';
import './App.css';
import NavBar from "./components/navbar";
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
                <main className="container">
                    <ApartmentsList
                        apartments={this.state.apartments}
                        onLike={this.handleLike}
                    />
                </main>
            </React.Fragment>
        );
    }

    handleLike = aptLiked => {
        const apartmentsList = [...this.state.apartments];
        const index = apartmentsList.indexOf(aptLiked);
        apartmentsList[index] = {...aptLiked};
        let liked = apartmentsList[index].liked;
        if (liked === false) {
            liked = true;
            this.setState({apartments: apartmentsList});
        } else {
            liked = false;
            this.setState({apartments: apartmentsList});
        }
    }
}

export default App;