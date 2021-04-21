import React from 'react';
import FundamentalsElement from "./FundamentalsElement";

function Fundamentals() {
    return (
        <>
            <section className="content-fundamentals">
                <div className="layout-container">
                    <h2>Our fundamentals</h2>
                    <p className="paragraph-description">That's what we believe in</p>

                    <div className="content-fundamentals--layout layout-grid layout-grid-3">
                        <FundamentalsElement src={"/icons/lifebelt.svg"} altText={"Lifebelt"} headerText={"Support"}
                                             introText={"Feel comfortable"} firstElement={"Make new friends"}
                                             secondElement={"Get first-hand information"}
                                             thirdElement={"Begin your adventure safely"}/>
                        <FundamentalsElement src={"/icons/lighthouse.svg"} altText={"Lighthouse"}
                                             headerText={"Guidance"}
                                             introText={"We're here to help you"} firstElement={"Get some useful tips"}
                                             secondElement={"Manage your time efficiently"}
                                             thirdElement={"Discover many possibilities"}/>
                        <FundamentalsElement src={"/icons/light-bulb.svg"} altText={"Light-bulb"} headerText={"Ideas"}
                                             introText={"Be inspired"} firstElement={"Find fantastic places"}
                                             secondElement={"Enrich your stay abroad"}
                                             thirdElement={"Make an impact"}/>
                    </div>

                    <div className="element-cta element-cta-main layout-flex">
                        <p>Every journey has a starting point</p>
                        <a href="/" className="element-button button-standard button-first">
                            Create a free account</a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Fundamentals;