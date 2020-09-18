import React, {useContext, useState} from "react";
import {ApartmentContext} from "../../state/context";

export default function LikeToggle() {
    let [liked, toggleLike] = useState(false);

    let apartment = useContext(ApartmentContext);

    return (
        <i id={apartment.id} className={getLikeClasses()} onClick={handleLikeToggle}/>
    )

    function handleLikeToggle(event) {
       if(event) toggleLike(!liked);
    }

    function getLikeClasses() {
        let classes = "bx ";
        classes += (!liked) ? "bx-heart" : "bxs-heart";
        return classes;
    }
}