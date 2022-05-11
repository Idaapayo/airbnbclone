import React from "react"
import travel1 from "../images/travel1.jpeg"
import travel2 from "../images/travel2.jpeg"
import travel3 from "../images/travel3.jpeg"
import imgs from "../images/img.jpeg"
import "../css/card.css"

export default function Card(props){

    let badgeText

    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if (props.location === "Online"){
        badgeText = "ONLINE"
    }

    return (

        <div className="d-flex ">
            <div className="card custom-card">
                {badgeText && <div className="card-badge">{badgeText}</div>}
                <img src={imgs} className="card-img-top resize-img" alt="..."/>
                    <div className="card-body mb-5 ">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">description: {props.description}</p>
                            <p className="card-text">Ratings: {props.stats.rating}</p>
                            <p className="card-text">Reviews: {props.stats.reviewCount}</p>
                            <p className="card-text">Price: {props.price}</p>
                        </div>
                    </div>
            </div>
        </div>

    )
}