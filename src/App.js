import React, {useState, useEffect} from 'react';
import Jumbotron from "./components/jumbotron/jumbotron";
import ApartmentsList from "./components/apartmentsList/apartmentsList";
import axios from "axios";
import {LikesContext} from "./state/context";

export default function App() {
    let [apartments, setApartments] = useState([]);

    useEffect(() => {
        axios.get("../apt-list/entities.json")
            .then(res => {
                const apartments = res.data.response;
                apartments.map(apartment => apartment.liked);
                setApartments(apartments);
            });
    }, []);

    return (
        <LikesContext.Provider value={likeToggled}>
            <Jumbotron/>
            <main className="container mb-5">
                <ApartmentsList
                    apartments={apartments}
                />
            </main>
            <footer className="fixed-bottom bg-light text-center font-weight-bold py-3">Irina Plaksina &copy; 2020
            </footer>
        </LikesContext.Provider>
    );

    function likeToggled(id) {
        const updatedLikedApartments = [...apartments];
        const toggledApartment = updatedLikedApartments.find(item => item.id === id);
        toggledApartment.liked = !toggledApartment.liked;
        setApartments(updatedLikedApartments);
        console.log("updateLiked");
    }

}