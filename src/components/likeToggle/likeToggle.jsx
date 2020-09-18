import React, {useContext} from "react";
import {ApartmentContext, LikesContext} from "../../state/context";

export default function LikeToggle() {

    let apartment = useContext(ApartmentContext);
    const likeToggled = useContext(LikesContext);

    return (
        <i id={apartment.id} className={getLikeClasses()} onClick={handleApartmentLiked}
        />
    );

    function handleApartmentLiked() {
        likeToggled(apartment.id);
    }

    function getLikeClasses() {
        let classes = "bx ";
        classes += (!apartment.liked) ? "bx-heart" : "bxs-heart";
        return classes;
    }
}
