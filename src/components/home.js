import React from 'react';
import './home.css'
import {NavLink} from "react-router-dom";

function HomePage() {
    return (
        <section className="home">
            <div className="home-intro animated fadeIn">
                <h1>My Portfolio</h1>
                <p>Hi i'm Bill and this is a collection of my work</p>
            </div>
            <div className="home-right-column">
                <NavLink to="/portfolio/page-1" className="fas fa-greater-than" id="right-arrow"></NavLink>
            </div>
        </section>
    )
}

export default HomePage;