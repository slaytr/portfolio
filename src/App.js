import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PDFObject } from "react-pdfobject";

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
        {/*  <div className="resume">*/}
        {/*      <PDFObject url="https://bill-portfolio-assets.s3-ap-southeast-2.amazonaws.com/cv.pdf" width="600px" height="800px"/>*/}
        {/*  </div>*/}
      </div>
    );
  }
}

export default App;
