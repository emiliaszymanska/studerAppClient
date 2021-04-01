import React, {useState, useEffect} from 'react';
import BuddyFinderHeader from "./common/BuddyFinderHeader";
import BuddyFinderFilter from "./common/BuddyFinderFilter";
import BuddyFinderAd from "./common/BuddyFinderAd";
import {AdModel} from "./models/AdModel";
import {GetAds} from "./services/BuddyFinderService";

function BuddyFinder() {

    const [ads, setAds] = useState([]);

    useEffect(() => {
        GetAds().then(res => {
            const adsModel = res?.data?.map(item => new AdModel(item));
            setAds(adsModel);
        });
    }, []);

    return (
        <>
            <section className="content-buddy-finder">
                <div className="layout-container">
                    <BuddyFinderHeader title={'Meet new people'} description={'Buddy Finder – find a friend'}/>
                    <BuddyFinderFilter/>
                    {ads.map(item => <BuddyFinderAd userAd={item}/>)}
                </div>
            </section>
        </>
    )
}

export default BuddyFinder;