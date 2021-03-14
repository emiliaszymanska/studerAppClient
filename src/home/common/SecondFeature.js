import React from 'react';

function SecondFeature() {
    return (
        <>
            <section className="content-feature-second">
                <div className="layout-container">
                    <div className="content-feature--layout layout-grid layout-grid-2">
                        <div>
                            <h2>...and building the bridge</h2>
                            <p className="paragraph-description">Lorem ipsum dolor sit amet, consec adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, q
                                nostrud exercitation ullamco nisi eq</p>
                        </div>
                        {/*<video class="video-right" autoplay loop muted playsinline src="videos/friends.mp4"/>*/}
                        <img src="/images/friends.png" alt="#" className="image-right"/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SecondFeature;