import React from 'react';

function FirstFeature () {
    return (
        <>
            <section className="content-feature-first">
                <div className="layout-container">
                    <div className="content-feature--layout layout-grid layout-grid-2">
                        <video className="video-left" autoPlay loop muted playsInline src="videos/girl-sitting.mp4"/>
                        {/*<img src="./images/girl-sitting.png" alt="#" className="image-left"/>*/}
                        <div>
                            <h2>Leading you into inspiration</h2>
                            <p className="paragraph-description first-paragraph">Everyone perceives modern world as
                                volatile, diverse and complex. For this reason, we deliver the platform that helps
                                international students to find themselves in a new socio-cultural environment.</p>
                            <p className="paragraph-description second-paragraph">Discover special places, feel
                                well-versed and, last but not least, breathe life into your ideas! Create unique,
                                unforgettable experiences.</p>
                            <p className="paragraph-description one-word">Confidently.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FirstFeature;