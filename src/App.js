import React, {useState, useEffect} from 'react';
import Jumbotron from "./components/jumbotron/jumbotron";
import ApartmentsList from "./components/apartmentsList/apartmentsList";
import axios from "axios";

const localStorageKey = "apartmentsListStorage";

export default function App() {
    let [apartments, setApartments] = useState([]);

    useEffect(() => {
        axios.get("../apt-list/entities.json")
            .then(res => {
                const apartments = res.data.response;
                apartments.map(item => item.liked = false);
                localStorage.setItem(localStorageKey, JSON.stringify(apartments));
            });
    }, [apartments]);

    useEffect(() => {
        const storedApartments = JSON.parse(localStorage.getItem(localStorageKey));
        if (storedApartments) setApartments(storedApartments);
    }, []);

    return (
        <>
            <Jumbotron/>
            <main className="container mb-5">
                <ApartmentsList
                    apartments={apartments}
                    // onLike={handleLike}
                />
            </main>
            <footer className="fixed-bottom bg-light text-center font-weight-bold py-3">Irina Plaksina &copy; 2020
            </footer>
        </>
    );

    /*function handleLike(aptLiked) {
        let apartmentsList = [...apartments];
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
    }*/
}


/*
class App extends Component {
    state = {
        apartments: []
    };

    componentDidMount() {
        axios.get("../apt-list/entities.json")
            .then(res => {
                const apartments = res.data.response;
                apartments.forEach(apartment => {
                    apartment.liked = false;
                })
                this.setState({apartments: apartments});
            });
    }

}*/
