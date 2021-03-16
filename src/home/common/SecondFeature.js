import React from 'react';

function SecondFeature() {
    return (
        <>
            <section className="content-feature-second">
                <div className="layout-container">
                    <div className="content-feature--layout layout-grid layout-grid-2">
                        <div>
                            <h2>...and building the bridge</h2>
                            <div className="paragraph-description">Making new friends can be a daunting task. We know it's
                                not easy to find a proper person especially when being abroad. That's why Studer provides
                                a useful buddy-finder feature. It's pretty straightforward:
                                <div className="feature-second-wrapper"><ul className="feature-second-list">
                                    <li><i className="fas fa-check"/>&ensp; Create your profile</li>
                                    <li><i className="fas fa-check"/>&ensp; Introduce yourself</li>
                                    <li><i className="fas fa-check"/>&ensp; Get responses and choose a buddy</li>
                                </ul></div>
                                <b>Yes, that's it.</b> Have fun with your new friends!
                            </div>
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