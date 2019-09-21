import React from 'react';
import './stack.css'

function StackPage() {
    return (
        <section className="stack-page">
            <div className="stack-intro">
                <h1>My Stack</h1>
                <p>Collection of different languages, frameworks and tools I have used to develop enterprise software</p>
                <a href="https://stackshare.io/slaytr/portfolio" target="_blank" rel="noopener noreferrer">
                    <button id="stack-download">Link to Stackshare.io</button>
                </a>
            </div>
            <div className="stack">
                <embed src="https://embed.stackshare.io/stacks/embed/fe1f082e04bf031a8db61c7597dec7" className="stack-share"></embed>
            </div>
        </section>
    )
}

export default StackPage;
