import React from 'react';

function FirstFeature () {
    return (
        <>
            <section className="content-feature-first">
                <div className="layout-container">
                    <div className="content-feature--layout layout-grid layout-grid-2">
                        {/*<video class="video-left" autoplay loop muted playsinline src="videos/girl-sitting.mp4"/>*/}
                        <img src="./images/girl-sitting.png" alt="#" className="image-left"/>
                        <div>
                            <h2>Leading you into inspiration</h2>
                            <p className="paragraph-description">Lorem ipsum dolor sit amet, consec adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, q
                                nostrud exercitation ullamco nisi eq</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FirstFeature;