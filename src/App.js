import React, {Component} from 'react';
import './App.css';
import NavBar from "./components/navbar";
import AptCard from "./components/aptCard";

class App extends Component {
    state = {};

    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <main className="container">
                    <AptCard/>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
