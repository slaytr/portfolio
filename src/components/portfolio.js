import React from 'react';
import './portfolio.css';
import { NavLink, Route, Redirect, Switch } from "react-router-dom";
import frameworkLogo from "../assets/frontend-frameworks.png";
import SaaS from "../assets/SaaS.svg";
import webCode from "../assets/website-code.png"
import AWS from "../assets/aws.png"
import LeetCode from '../assets/github-python.png'
import Blog from '../assets/blog.jpg'

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
        case ('/portfolio/page-3'):
            nextPage = '/portfolio/page-4';
            prevPage = '/portfolio/page-2';
            break;
        case ('/portfolio/page-4'):
            nextPage = '/stack';
            prevPage = '/portfolio/page-3';
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
                <Switch>
                    <Route path={`/portfolio/page-1`} component={PortfolioPageOne} exact/>
                    <Route path={`/portfolio/page-2`} component={PortfolioPageTwo} exact/>
                    <Route path={`/portfolio/page-3`} component={PortfolioPageThree} exact/>
                    <Route path={`/portfolio/page-4`} component={PortfolioPageFour} exact/>
                    <Route path="/portfolio" exact>
                        <Redirect to="/"/>
                    </Route>
                </Switch>
            </div>
            <div className="portfolio-right-column">
                <NavLink to={`${nextPage}`} className="fas fa-greater-than" id="right-arrow"/>
            </div>
        </div>
    )
}

function PortfolioPageOne() {
    return (
        <div className="portfolio-one animated fadeIn fast">
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
            <div className="grid-right-half animated fadeInLeft faster">
                <div className="portfolio-textbox-webcode">
                    <p>Historically, I connected software backends using relational databases like <strong>MySQL</strong>, however, over the past year i've been working with <strong>serverless applications</strong> and <strong>AWS microservices</strong> in the cloud computing space</p>
                    <p>About once a week, I like to brush up on my <strong>Algorithms</strong> and participate in an <strong>Online Coding Competitions</strong>. Just to keep my skills fresh.</p>
                </div>
            </div>
            <div className="grid-left-half animated fadeIn faster">
                <img src={AWS} alt="Website Code" className="aws-logo"/>
            </div>
        </div>
    )
}

function PortfolioPageThree() {
    return (
        <div className="portfolio-two">
            <div className="grid-left-half animated fadeIn faster">
                <img src={webCode} alt="Website Code" className="webCode"/>
            </div>
            <div className="grid-right-half animated fadeInRight faster">
                <div className="portfolio-textbox-webcode">
                    <p>This website is built purely with <strong>React</strong> using a combination of <strong>original</strong> and <strong>open source</strong> code.</p>
                    <p>You can view the thousands of lines of code that compose this website here</p>
                    <a href="https://github.com/slaytr/portfolio" target="_blank" rel="noopener noreferrer">
                        <button id="webcode-download">Website Code Here</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

function PortfolioPageFour() {
    return (
        <div className="portfolio-one animated fadeIn fast">
            <div className="grid-row-content-above">
                <div className="grid-row-content__image">
                    <img src={LeetCode} alt="frontend-frameworks" className="leetcode-image"/>
                </div>
                <div className="portfolio-textbox-webcode">
                    <p>As a hobby, my Github repository lays host to <strong>more than a hundred</strong> of solved algorithmic problems across different coding languages that i've coded, most being written in <strong>Python</strong></p>
                    <a href="https://github.com/slaytr/LeetCode" target="_blank" rel="noopener noreferrer">
                        <button id="webcode-download">Solutions Here</button>
                    </a>
                </div>
            </div>
            <div className="grid-row-content-below">
                <div className="portfolio-textbox-webcode">
                    <p>As an active member of the <strong>Tech Community</strong>, I also frequently keep update to date with the latest technologies, from <strong>Blockchain</strong> to <strong>Machine Learning</strong> via Online Tech Blogs. In fact, I run a small <strong>Tech Blog</strong> myself, which can be found below.</p>
                    <a href="https://medium.com/@billli_91665/architecting-a-solution-34d34098e87a" target="_blank" rel="noopener noreferrer">
                        <button id="webcode-download">My Tech Blog</button>
                    </a>
                </div>
                <div className="grid-row-content__image">
                    <img src={Blog} alt="frontend-frameworks" className="blog-image"/>
                </div>
            </div>
        </div>
    )
}

export default PortfolioPage;