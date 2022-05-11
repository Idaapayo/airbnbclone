import React  from "react";
import "../css/Navbar.css";

export default function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 color-red">Airbnb</span>
                </div>
            </nav>
        </div>
    )
}