import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  render() {
    return (
      <div className="content">
        <div className="brand">
          <span id="text-brand">Bill</span>
        </div>
        <div className="home">
          <h1>My Portfolio</h1>
          <p>
            A collection of my work
          </p>
        </div>
      </div>
    );
  }
}

export default App;
