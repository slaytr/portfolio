import React from 'react';
import './App.css';
import HomePage from "./components/home";
import ResumePage from "./components/resume";
import PortfolioPage from "./components/portfolio";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import StackPage from "./components/stack";

class App extends React.Component {

    isPortfolio = () => {
        if ( window.location.pathname.length >= 10 || window.location.pathname === "/") {
            if ( window.location.pathname.slice(0,10) ) return true
        }
        return false
    };

    render() {
        return (
            <div className="layout">
                <Router>
                    <div className="brand">
                        <NavLink to="/" id="text-brand">
                            Bill
                        </NavLink>
                    </div>
                    <div className="content">
                        <header id="menu">
                            <NavLink to="/portfolio" isActive={this.isPortfolio} className="menu-item" id="portfolio" activeStyle={{
                                color: "#FCFCFC",
                                backgroundColor: "#333333",
                                borderRadius: "0 0 10px 10px"
                            }}>
                                Portfolio
                            </NavLink>
                            <NavLink to="/stack" className="menu-item" id="stack" activeStyle={{
                                color: "#FCFCFC",
                                backgroundColor: "#333333",
                                borderRadius: "0 0 10px 10px"
                            }}>
                                Stack
                            </NavLink>
                            <NavLink to="/resume" className="menu-item" id="resume" activeStyle={{
                                color: "#FCFCFC",
                                backgroundColor: "#333333",
                                borderRadius: "0 0 10px 10px"
                            }}>
                                Resume
                            </NavLink>
                        </header>
                        <Route path="/" component={HomePage} exact/>
                        <Route path="/portfolio" component={PortfolioPage}/>
                        <Route path="/resume" component={ResumePage}/>
                        <Route path="/stack" component={StackPage}/>
                    </div>
                </Router>

            </div>
        );
    }
}

export default App;
