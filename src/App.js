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
        let apartmentsList = [...this.state.apartments];
        const index = apartmentsList.indexOf(aptLiked);
        apartmentsList[index] = {...aptLiked};
        let likedValue = apartmentsList[index].liked;
        console.log("likedStart", likedValue);
        if (likedValue === false) {
            apartmentsList[index].liked = true;
            this.setState({apartments: apartmentsList});
            console.log("clickedID", apartmentsList[index].id);
            console.log("likedClicked", likedValue);
            console.log("likedAptResult", apartmentsList[index]);
        } else {
            apartmentsList[index].liked = false;
            this.setState({apartments: apartmentsList});
            console.log("unlikedApts", apartmentsList);
            console.log("likedClicked", likedValue);
        }
    }
}

export default App;
