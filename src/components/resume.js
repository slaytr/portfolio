import React from 'react';
import './resume.css'
import {PDFObject} from "react-pdfobject";

function ResumePage() {
    return (
        <section className="resume-page">
            <div className="resume-intro">
                <h1>My Resume</h1>
                <p>A short one page history of my skills and experience</p>
                <a href="https://bill-portfolio-assets.s3-ap-southeast-2.amazonaws.com/cv.pdf" download="bill-li-cv.pdf">
                    <button id="resume-download">Click Here to Download</button>
                </a>
            </div>
            <div className="resume">
                <PDFObject url="https://bill-portfolio-assets.s3-ap-southeast-2.amazonaws.com/cv.pdf" width="600px" height="820px"/>
            </div>
        </section>
    )
}

export default ResumePage;