import React from 'react';
import BuddyFinderHeader from "./common/BuddyFinderHeader";
import BuddyFinderFilter from "./common/BuddyFinderFilter";
import BuddyFinderAd from "./common/BuddyFinderAd";

function BuddyFinder() {

    const a = [1, 2, 3];

    return (
        <>
            <section className="content-buddy-finder">
                <div className="layout-container">
                    <BuddyFinderHeader/>
                    <BuddyFinderFilter/>
                    {a.map(item => <BuddyFinderAd/>)}
                </div>
            </section>
        </>
    )
}

export default BuddyFinder;