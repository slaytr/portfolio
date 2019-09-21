import React from 'react';
import './portfolio.css';
import {NavLink} from "react-router-dom";
import frameworkLogo from "../assets/frontend-frameworks.png";
import SaaS from "../assets/SaaS.svg";

function PortfolioPage() {
    return (
        <div className="portfolio-layout">
            <div className="portfolio-left-column">
                <NavLink to="/" className="fas fa-less-than" id="left-arrow"></NavLink>
            </div>
            <div className="portfolio-one">
                <div className="grid-row-content-above">
                    <div className="grid-row-content__image">
                        <img src={frameworkLogo} alt="frontend-frameworks" className="framework-logo"/>
                    </div>
                    <div className="portfolio-textbox">
                        <p>Over 2 years of <strong>commercial</strong> experience developing user interfaces and experiences using popular frontend frameworks <strong>React</strong> and <strong>Vue</strong> as a <strong>Full-Stack developer</strong></p>
                    </div>
                </div>
                <div className="grid-row-content-below">
                    <div className="portfolio-textbox">
                        <p>Helped bring success to three different companies, working with both <strong>Agile</strong> and <strong>Waterfall</strong> project management models to produce <strong>Software as a Service (SaaS)</strong> products</p>
                    </div>
                    <div className="grid-row-content__image">
                        <img src={SaaS} alt="frontend-frameworks" className="framework-logo"/>
                    </div>
                </div>
            </div>
            <div className="portfolio-right-column">
                <NavLink to="/" className="fas fa-greater-than" id="right-arrow"></NavLink>
            </div>
        </div>
    )
}

export default PortfolioPage;