import React from "react";
import Background from "../assets/matthieu-gouiffes-iFRtKyim2Hs-unsplash.jpg";

let jumbotronPicture = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: "top left"
}

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid" style={jumbotronPicture}>
            <div className="container" >
                <h1 className="display-4">Квартиры в Тюмени</h1>
                <p className="lead">Выберите квартиру мечты</p>
            </div>
        </div>
    )
}

export default Jumbotron;
