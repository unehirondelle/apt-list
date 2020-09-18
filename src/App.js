import React, {useState, useEffect} from 'react';
import Jumbotron from "./components/jumbotron/jumbotron";
import ApartmentsList from "./components/apartmentsList/apartmentsList";
import axios from "axios";
import {LikesContext} from "./state/context";

const localStorageKey = "apartmentsListStorage";

export default function App() {
    let [apartments, setApartments] = useState([]);

    useEffect(() => {
        const storedApartments = JSON.parse(localStorage.getItem(localStorageKey));
        if (storedApartments) setApartments(storedApartments);
        console.log("getFromStorage")
    }, []);

    useEffect(() => {
        axios.get("../apt-list/entities.json")
            .then(res => {
                const apartments = res.data.response;
                apartments.map(apartment => apartment.liked = false);
                setApartments(apartments);
                console.log("getData")
            });
    }, []);

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(apartments));
        console.log("writeToStorage");
    }, [apartments]);

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