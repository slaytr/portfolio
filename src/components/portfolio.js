import React from 'react';
import './portfolio.css';
import { NavLink, Route } from "react-router-dom";
import frameworkLogo from "../assets/frontend-frameworks.png";
import SaaS from "../assets/SaaS.svg";
import webCode from "../assets/website-code.png"

function PortfolioPage() {

    let nextPage = '';
    let prevPage = '';

    switch (window.location.pathname) {
        case ('/portfolio'):
            nextPage = '/portfolio/page-1';
            prevPage = '/';
            break;
        case ('/portfolio/page-1'):
            nextPage = '/portfolio/page-2';
            prevPage = '/portfolio';
            break;
        case ('/portfolio/page-2'):
            nextPage = '/portfolio/page-3';
            prevPage = '/portfolio/page-1';
            break;
        default:
            break;
    }

    return (
        <div className="portfolio-layout">
            <div className="portfolio-left-column">
                <NavLink to={`${prevPage}`} className="fas fa-less-than" id="left-arrow"/>
            </div>
            <div>
                <Route path={`/portfolio/page-1`} component={PortfolioPageOne} exact/>
                <Route path={`/portfolio/page-2`} component={PortfolioPageTwo} exact/>
            </div>
            <div className="portfolio-right-column">
                <NavLink to={`${nextPage}`} className="fas fa-greater-than" id="right-arrow"/>
            </div>
        </div>
    )
}

function PortfolioPageOne() {
    return (
        <div className="portfolio-one animated fadeInRight fast">
            <div className="grid-row-content-above">
                <div className="grid-row-content__image">
                    <img src={frameworkLogo} alt="frontend-frameworks" className="framework-logo"/>
                </div>
                <div className="portfolio-textbox">
                    <p>Over 2 years of <strong>commercial</strong> experience developing user interfaces and experiences
                        using popular frontend frameworks <strong>React</strong> and <strong>Vue</strong> as a <strong>Full-Stack
                            developer</strong></p>
                </div>
            </div>
            <div className="grid-row-content-below">
                <div className="portfolio-textbox">
                    <p>Helped bring success to three different companies, working with
                        both <strong>Agile</strong> and <strong>Waterfall</strong> project management models to produce
                        high quality <strong>Software as a Service (SaaS)</strong> products</p>
                </div>
                <div className="grid-row-content__image">
                    <img src={SaaS} alt="frontend-frameworks" className="framework-logo"/>
                </div>
            </div>
        </div>
    )
}

function PortfolioPageTwo() {
    return (
        <div className="portfolio-two">
            <div className="grid-left-half animated fadeIn faster">
                <img src={webCode} alt="Website Code" className="webCode"/>
            </div>
            <div className="grid-right-half animated fadeInRight fast">
                <div className="portfolio-textbox-webcode">
                    <p>This website is built purely with <strong>React</strong> using a combination of <strong>original</strong> and <strong>open source</strong> code.</p>
                    <p>You can view the thousands of lines of code that compose this website here</p>
                    <a href="/">
                        <button id="webcode-download">Website Code Here</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PortfolioPage;