import React from "react";
import "../css/MainContent.css"
import travelgrid from "../images/travelgrid.jpg"

export default function MainContent(){
    return(
        <div className="center-this">
            <img className="img-fluid" src={travelgrid}/>
            <h2>Online Experiences</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis delectus dolore dolorem eos error est quasi quo sint. Aut commodi nulla perferendis praesentium quae quaerat, qui suscipit ullam voluptatem?</p>
        </div>
    )
}