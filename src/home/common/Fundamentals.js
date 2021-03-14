import React from 'react';

function Fundamentals () {
    return (
        <>
            <section className="content-fundamentals">
                <div className="layout-container">
                    <h2>Our fundamentals</h2>
                    <p className="paragraph-description">That's what we believe in</p>

                    <div className="content-fundamentals--layout layout-grid layout-grid-3">
                        <div className="element-card element-card--fundamentals">
                            <div className="element-wrapper layout-grid">
                                <img className="card-image" src="/icons/lifebelt.svg" alt="Lifebelt icon"/>
                                <span className="card-header"><strong>Support</strong></span>
                                <span className="card-intro"><small>Feel comfortable</small></span>
                            </div>
                            <ul className="element-list element-list--fundamentals layout-grid">
                                <li>Make new friends</li>
                                <li>Get first-hand information</li>
                                <li>Begin your adventure safely</li>
                            </ul>
                        </div>

                        <div className="element-card element-card--fundamentals">
                            <div className="element-wrapper layout-grid">
                                <img className="card-image" src="/icons/lighthouse.svg" alt="Lighthouse icon"/>
                                <span className="card-header"><strong>Guidance</strong></span>
                                <span className="card-intro"><small>We're here to help you</small></span>
                            </div>
                            <ul className="element-list element-list--fundamentals layout-grid">
                                <li>Get some useful tips</li>
                                <li>Manage your time efficiently</li>
                                <li>Discover many possibilities</li>
                            </ul>
                        </div>

                        <div className="element-card element-card--fundamentals">
                            <div className="element-wrapper layout-grid">
                                <img className="card-image" src="/icons/light-bulb.svg" alt="Light-bulb icon"/>
                                <span className="card-header"><strong>Ideas</strong></span>
                                <span className="card-intro"><small>Be inspired</small></span>
                            </div>
                            <ul className="element-list element-list--fundamentals layout-grid">
                                <li>Find fantastic places</li>
                                <li>Enrich your stay abroad</li>
                                <li>Make an impact</li>
                            </ul>
                        </div>
                    </div>

                    <div className="element-cta element-cta-main layout-flex">
                        <p>Every journey has a starting point</p>
                        <a href="#" className="element-button button-standard button-first">
                            Create a free account</a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Fundamentals;