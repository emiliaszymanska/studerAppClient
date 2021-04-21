import React from 'react';

function FundamentalsElement({src, altText, headerText, introText, firstElement, secondElement, thirdElement}) {
    return (
        <div className="element-card element-card--fundamentals">
            <div className="element-wrapper layout-grid">
                <img className="card-image" src={src} alt={altText}/>
                <span className="card-header"><strong>{headerText}</strong></span>
                <span className="card-intro"><small>{introText}</small></span>
            </div>
            <ul className="element-list element-list--fundamentals layout-grid">
                <li>{firstElement}</li>
                <li>{secondElement}</li>
                <li>{thirdElement}</li>
            </ul>
        </div>
    )
}

export default FundamentalsElement;