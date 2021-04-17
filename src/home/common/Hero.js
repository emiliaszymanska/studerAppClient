import React from 'react';

function Hero() {
    return (
        <>
            <section className="content-hero">
                <div className="main-video-wrapper">
                    <video autoPlay loop muted playsInline src="videos/girl-stairs.mp4"/>
                    <div className="overlay"/>
                </div>
                <div className="content-hero-header">
                    <h1>Are you feeling<br/>a bit lost?</h1>
                </div>
            </section>
        </>
    );
}

export default Hero;